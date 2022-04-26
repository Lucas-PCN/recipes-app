import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function Provider({ children }) {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const contextValue = {
    disabled,
    setDisabled,
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <MyContext.Provider
      value={ contextValue }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
