import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveDecorator from './components/PerspectiveDecorator';

function App() {
  return (
    <>
      <PerspectiveDecorator />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
