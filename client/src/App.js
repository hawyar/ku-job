import React from "react";
import Layout from "./components/layout/Layout";
import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = ({ children }) => {
  return (
    <div>
      <Router>
        <Layout>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};
export default App;
