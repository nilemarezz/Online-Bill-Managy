import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormContainer from './containers/Form'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <FormContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
