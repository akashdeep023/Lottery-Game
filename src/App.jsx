import "./App.css";
import Lottery from "./Lottery";

function App() {
  let winCondition = (ticket) => {
    return ticket.reduce((sum, curr) => sum + curr, 0) === 15;
    // return ticket.every((num) => num === ticket[0])
    // return ticket[0] === 0;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
