import React from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() {
  // const history = useHistory()*;
  return (
    <div>
      <Header title="Explore" shouldRenderMagnifier={ false } />
      <Footer />
    </div>
  );
}

export default Explorer;
