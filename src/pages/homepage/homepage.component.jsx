import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Headwear</h1>
          <span className="subtitle">Browse our headwear</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jewelry</h1>
          <span className="subtitle">Browse our jewelry</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Handbags</h1>
          <span className="subtitle">Browse our handbags</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Activewear</h1>
          <span className="subtitle">Browse our active wear</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Formalwear</h1>
          <span className="subtitle">Browse our formal wear</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Casualwear</h1>
          <span className="subtitle">Browse our casual wear</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
