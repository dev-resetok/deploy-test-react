import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    // {process.env.REACT_APP_BACK_END_URL}
    console.log("https://port-0-deploy-test-back-ly8jjkrt043c2434.sel5.cloudtype.app/test")
    const getDatas = async () => {
      const response = await fetch("", {
        method: "POST"
      });
      const datas = await response.json();
      return datas;
    }

    getDatas().then(console.log).catch(console.error);

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
