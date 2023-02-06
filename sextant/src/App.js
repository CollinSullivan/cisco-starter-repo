import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner 
      title={document.title}
      subtitle="A dashboard that will help understand the status of the network"
      />
      <Exhibit
      title="Test Exhibit"
      

      />

      
    </div>
  );
}

export default App;
