import React, {useState, useEffect} from 'react';
import './App.css';
import Landing from './components/Landing';
import BounceLoader from 'react-spinners/BounceLoader'

function App() {
  const [Loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false);
  }, [])

  function loading () {
    return(<BounceLoader size = {100}/>)
  }

  function notLoading () {
    return(<Landing/>)
  }

  return (
    <div className="App">
      {Loading ? loading() : notLoading()}
    </div>
  );
}

export default App;
