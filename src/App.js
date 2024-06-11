import React, { useState, useEffect } from 'react';
import Home from "./component/Home";
import Spinner from "./component/Spinner";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
}, []);

  return (
    <div className="App">
      {loading ? <Spinner/> : <Home/>}
    </div>
  );
}

export default App;
