import { useState } from 'react';

function App() {
  const [world, setWorld] = useState('World');

  return <div>Hello {world}!</div>;
}

export { App };
