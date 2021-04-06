import "./App.css";
import MovieContextProvider from "./context/MovieContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <MovieContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/:id" exact component={Details} />
          </Switch>
        </MovieContextProvider>
      </div>
    </Router>
  );
}

export default App;
