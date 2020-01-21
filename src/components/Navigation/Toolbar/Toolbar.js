import React from 'react';
import Logo from '../../Logo/Logo';

const Toolbar = () => (
  <header
    className="Toolbar"
    style={{
      backgroundColor: 'mediumaquamarine',
      paddingLeft: '26%',
      paddingBottom: '8px',
    }}>
    <Logo />
  </header>
);

export default Toolbar;