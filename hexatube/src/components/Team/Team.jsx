import React from 'react';
import './Team.css';

function About() {
  return (
    <div className="container">
      <div className="team">
        <h4 className="title">Команда</h4>
        <h5 className="title">2107д</h5>
        <p>
          <span>Гильмутдинов И.</span> - проджект менеджер и старший разработчик
        </p>
        <p>
          <span>Мур Л.</span> - дизайнер, верстальщик, разработчик
        </p>
        <p>
          <span>Себреков Д. </span> - тестировщик
        </p>
        <p>
          <span>Анисимов И. </span> - разработчик
        </p>
        <p>
          <span>Рощин Н.</span> - разработчик
        </p>
      </div>
    </div>
  );
}

export default About;
