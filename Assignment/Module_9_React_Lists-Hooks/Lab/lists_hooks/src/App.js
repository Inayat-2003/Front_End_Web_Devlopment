// import logo from './logo.svg';
// import './App.css';
import Counter from './Hooks/Counter';
import UserData from './Hooks/UserData';
import FruitList from './List/FruitList';
import UserList from './List/UserList';

function App() {
  return (
    <div className="App">
      <h1>This is an output for Lists</h1>
      <FruitList />

      <UserList />

     <h1>This is an output for Hooks</h1>

     <Counter />

     <UserData />
    </div>
  );
}

export default App;