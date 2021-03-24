import React from 'react';
import s from 'views/homeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Раді вас бачити на нашому сайті{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
