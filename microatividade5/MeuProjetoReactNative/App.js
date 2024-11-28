import React from 'react';
// import DisplayAnImage from './DisplayAnImage'; // Comentando a importação do primeiro componente
import DisplayAnImageWithStyle from './DisplayAnImageWithStyle'; // Importando o segundo componente

export default function App() {
  return (
    <DisplayAnImageWithStyle /> // Renderizando apenas o segundo componente
  );
}
