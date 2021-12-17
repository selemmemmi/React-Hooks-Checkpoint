import NavBar from "./components/NavBar/NavBar";
import MoviCard from "./components/MoviCard/MoviCard";
import { useState } from "react";
import ModalCard from "./components/Modal/ModalCard";

function App() {
  const [cardList, setcardList] = useState({});
  const addCard = (Card) => {
    setcardList({Card, ...cardList});
  };
  return (
    <div>
      <NavBar />
      <div className="plButton">
        <ModalCard addCard={addCard}/>
      </div>
      <div className="MvCard">
        <MoviCard />
      </div>
    </div>
  );
}

export default App;
