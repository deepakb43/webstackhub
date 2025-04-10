import './App.css';
import { Card } from './components/ui/card.tsx';

function App() {
  return (
    <div className="App">
      <h1>My Card Application</h1>
      <div className="card-container">
        <Card 
          title="Sample Card"
          content="This is a sample card component"
        />
      </div>
    </div>
  );
}

export default App;
