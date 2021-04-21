import './App.css';
import ExploreRef from './components/ExploreRef';
import Home from './components/Home';
import PatientManagement from './components/PatientManagement/PatientManagement';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
      <ExploreRef></ExploreRef>
      <Home></Home>
    </div>
  );
}

export default App;
