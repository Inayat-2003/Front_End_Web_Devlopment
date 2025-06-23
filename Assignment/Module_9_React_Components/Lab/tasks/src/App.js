import Greetings from "./Components/Greetings";
import WelcomeMessage from "./Components/WelcomeMessage";
import UserCard from "./Props_&_states/Card";
import Counter from "./Props_&_states/Counter";

function App() {
  return (
    <div className="App">
      <Greetings />
      <WelcomeMessage />

      <Counter />
    <br></br>
      <UserCard />
    </div>
  );
}

export default App;
