import React from "react";
import Layout from "./components/layout/Layout";
import Landing from "./components/elements/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import customTheme from "./components/themes/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <ColorModeProvider>
          <Router>
            <Layout>
              <Route exact path="/" component={Landing} />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Layout>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
};
export default App;
