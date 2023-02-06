import React from 'react';

function Banner ({ title, subtitle }) {
    return (
      <div className="banner">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  };
export default Banner