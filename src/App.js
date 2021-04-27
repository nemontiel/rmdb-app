import React, { Suspense } from "react";
import "./App.css";
import MovieContextProvider from "./context/MovieContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const Details = React.lazy(() => import("./pages/Details"));
const Home = React.lazy(() => import("./pages/Home"));
const Search = React.lazy(() => import("./pages/Search"));

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <NavBar />
          <MovieContextProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/movie/:id" exact component={Details} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </MovieContextProvider>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;

/**/
