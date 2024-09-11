import React from 'react';

function App() {
  const itens = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
