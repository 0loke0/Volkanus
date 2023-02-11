import React, { useState } from 'react';

import './App.css';

function App() {
  const [prueba, setprueba] = useState<string>("lo jajas")
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <div>{prueba}</div>

      </header>
    </div>
  );
}

export default App;
