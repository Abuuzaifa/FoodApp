import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import "./App.css";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setfoodId] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList setfoodId={setfoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
