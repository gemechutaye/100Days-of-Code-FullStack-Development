import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

import "./styles.css";

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      <h1>Qzense-Lab </h1>
      <h2>Welcome to our Lab</h2>

      <GoogleLogin
        clientId="633129028687-bgjj935aa6dv1rocm52ku7gd8ec40afa.apps.googleusercontent.com"
        buttonText="Login with Google by Qzense-Lab"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
