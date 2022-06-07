import './App.css';
import GlobalState from './global/GlobalState';
import Router from "./routes/Router";

function App() {
  return (
    <div >
      <GlobalState>
        <Router />
      </GlobalState>
      

    </div>
  );
}

export default App;
