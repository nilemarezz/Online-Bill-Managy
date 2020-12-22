import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormContainer from './containers/Form'
import Bill from './containers/Bill'
import ErrorPage from './containers/ErrorPage'
import { submitForm } from './services/submitForm'
function App() {
  const [formData, setFormData] = useState(null)
  const submitFormData = async () => {
    return false
  }
  return (
    <Router>
      <Switch>
        <Route path="/summary">
          <Bill formData={formData} />
        </Route>
        <Route path="/form">
          <FormContainer formData={formData} onSetFormData={(data) => setFormData(data)} submitFormData={submitFormData} />
        </Route>
        <Route >
          <ErrorPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
