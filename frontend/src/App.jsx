import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then(res => setMsg(res.data.message))
      .catch(err => setMsg('Error fetching API'));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Frontend Connected to Backend</h1>
      <p>Message: {msg}</p>
    </div>
  );
}

export default App;
