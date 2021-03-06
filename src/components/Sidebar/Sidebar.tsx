import React from 'react';
import { Nav } from 'reactstrap';
import { Input, Button } from 'reactstrap';
import styles from './Sidebar.module.scss';
import getCountries from '../../services/countries';
import { NavLink, useHistory } from 'react-router-dom';
import { countries } from '../../config/data';

const Sidebar = (props: any) => {
  const history = useHistory();
  const countries = getCountries();

  const difficulties = [{
    key: 'easy', value: 'Facile'
  }, {
    key: 'medium', value: 'Moyenne'
  }, {
    key: 'hard', value: 'Difficile'
  }];

  const [difficulty, setDifficulty] = React.useState(difficulties[0].value);
  const [country, setCountry] = React.useState(props?.country ?
    countries.find((country: any) => country.value === props.country) :
    { key: 'FR', value: 'France' });
  const [city, setCity] = React.useState(props?.city ? props.city : '');

  const handleChangeDifficulty = (e: any) => {
    setDifficulty(e.currentTarget.value)
  }

  const handleChangeCountry = (e: any) => {
    const selectedCountry = countries.find((country: any) => country.key === e.currentTarget.value);
    setCountry(selectedCountry);
  }

  const searchWithParams = () => {
    history.push(`/hikings?city=${city}&country=${country.value}&difficulty=${difficulty}`)
  }

  return (<div className={`col-md-2 d-none d-md-block bg-light ${styles.root}`}>
    <div className={`${styles.sticky} mt-3`}>
      <Nav vertical>

        <label>Difficulté</label>
        <Input
          type="select"
          name="select"
          value={difficulty}
          onChange={handleChangeDifficulty}
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty.key} value={difficulty.value}>
              {difficulty.value}
            </option>
          ))}
        </Input>

        <label className="mt-2">Pays</label>
        <Input
          type="select"
          name="select"
          value={country.key}
          onChange={handleChangeCountry}
        >
          {countries.map((country: any) => (
            <option key={country.key} value={country.key}>
              {country.value}
            </option>
          ))}
        </Input>
        <label className="mt-2">Ville</label>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <div className="mt-4">
          <Button onClick={searchWithParams}>Rechercher</Button>
        </div>
      </Nav>
    </div>
  </div>);
};

export default Sidebar;
