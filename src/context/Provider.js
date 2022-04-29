import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchSearchByName from '../services/fetchSearchByName';

import MyContext from './MyContext';

function Provider({ children }) {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [teste, setTeste] = useState([]);
  const contextValue = {
    disabled,
    setDisabled,
    email,
    setEmail,
    password,
    setPassword,
    inputText,
    setInputText,
    teste,
  };

  async function testeteste() {
    const fetch = await fetchSearchByName();
    setTeste(fetch);
  }

  useEffect(() => {
    testeteste();
  }, []);

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
