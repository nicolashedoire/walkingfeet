import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import styles from './Sidebar.module.scss';
import getCountries from '../../services/countries';

const Sidebar: React.FC = () => {

  const countries = getCountries();

  const difficulties = [{
    key: 'easy', value: 'Facile'
  }, {
    key: 'medium', value: 'Moyenne'
  }, {
    key: 'hard', value: 'Difficile'
  }];

  const [difficulty, setDifficulty] = React.useState(difficulties[0].value);

  const handleChangeDifficulty = (e: any) => {
    setDifficulty(e.currentTarget.value)
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

        <label className="mt-4">Pays</label>
        <Input
          type="select"
          name="select"
          value={difficulty}
          onChange={handleChangeDifficulty}
        >
          {countries.map((country : any ) => (
            <option key={country.key} value={country.value}>
              {country.value}
            </option>
          ))}
        </Input>
      </Nav>
    </div>
  </div>);
};

export default Sidebar;
