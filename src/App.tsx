import React from 'react';
import Navbar from './components/Navbar'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
      <Navbar />
        <h1>Walking feet</h1>
        <div>
          <input placeholder="Rechercher une randonnée"/>
        </div>
       
      </header>
      <div className="informations">
      <h2>Le principe</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, minima, iste possimus facere sunt error laborum dolorum quis rem magni tempora temporibus, ipsa officiis repellat? Magnam quidem atque nihil numquam!
      Voluptatum inventore unde ducimus tempora nulla vel neque repudiandae, magnam iste dicta cum, hic quo consectetur vitae eaque animi blanditiis. Nisi dolore corporis, commodi sint ut dignissimos eaque. Reprehenderit, eaque.
      Nemo aspernatur aliquam, sint fugit reiciendis, provident deleniti illo modi ducimus recusandae, incidunt eos reprehenderit. Reiciendis molestiae tempore odit amet quaerat itaque voluptates, quos, reprehenderit aliquam illum aperiam, atque maxime.
      Eos omnis assumenda odio facilis, aspernatur voluptatibus similique veniam placeat fugiat, aperiam repellendus. Dolores unde adipisci a repellendus hic, excepturi nobis aliquam, aut rerum quos quo deserunt quas delectus facilis!</p>
      <h3>Nos objectifs</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in ut consequatur excepturi quod neque magnam odio id esse ratione tempora, voluptate, impedit qui nisi porro repellendus doloremque ea! Corporis?
      Autem adipisci officiis quo perspiciatis delectus rerum neque aut tempora maiores! Blanditiis, aliquid. Velit perferendis nesciunt totam tenetur maiores labore aperiam magni veritatis enim illo fugiat voluptatibus, voluptates assumenda voluptatem!
      Ipsa excepturi cum labore in et, est nobis at inventore neque earum ullam expedita exercitationem quidem reiciendis tenetur sit hic molestiae consequuntur repellendus velit accusantium. Aspernatur ab quaerat ratione quisquam?
      Ipsam fugiat laboriosam minima laborum voluptatem quasi dicta, impedit ab praesentium eum eligendi doloremque ea quibusdam sequi aliquam est. Repellendus neque voluptatibus sed distinctio quos totam debitis provident illum labore.</p>
      </div>
    </div>
  );
}

export default App;
