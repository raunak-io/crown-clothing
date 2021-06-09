import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log("props detector here", props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;
