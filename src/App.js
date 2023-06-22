import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/home/Landing';
import { Amplify } from 'aws-amplify';
import awsconfig from "./aws-exports";
import awsExports from "./aws-exports";
import {Authenticator, withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);
Amplify.configure(awsExports);


function App({ signOut }) {
  return (
    
    <div className="App">
      <Router>
      <Landing signOut={signOut} />
      <Routes>
      <Route path="/" element={<Authenticator/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
