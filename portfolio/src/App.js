import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Organism/Home";
import { Login } from "./components/Organism/Login";
import { Logout } from "./components/Organism/Logout";
import { SignUp } from "./components/Organism/SignUp";
import { Form } from "./components/Organism/Form";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
