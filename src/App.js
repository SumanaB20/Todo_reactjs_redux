import './App.css';
import HomePage from './Screen/Home/HomePage';
import EditPage from './Screen/TodoEdit/TodoEditPage';
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route
          exact
          path="/todoEdit"
          component={EditPage}
        />
        </Switch>
    </div>
  );
}

export default App;
