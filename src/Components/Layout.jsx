// src/components/Layout.jsx

import React from 'react';

const Layout = ({ designContent, formContent }) => {
  return (
    <div className="page-layout">

      <div className="design-section">
        <h1 className="logo">+Medic</h1>
        {designContent}
      </div>


      <div className="form-section">
        {formContent}
      </div>
    </div>
  );
};

export default Layout;