
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Recomended from './Recomended';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/search/:searchTerm">
        <div className="main_page">
              <Sidebar />
              <SearchPage />
            </div>
        </Route>
          <Route path="/">
            <div className="main_page">
              <Sidebar />
              <Recomended />
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
