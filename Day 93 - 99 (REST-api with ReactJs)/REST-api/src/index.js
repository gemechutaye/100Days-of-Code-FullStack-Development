import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { ApiProvider, useApi } from "react-rest-api";

const defaultConfig = {
  headers: {
    // All api calls will take this Content-Type Header
    "Content-Type": "application/json",
    X_MY_APP_API_KEY: "XXX"
  }
};

const App = () => {
  // `url` and `config` refer respectively to `resource` and `init` from https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
  const url = "https://jsonplaceholder.typicode.com";
  const [config, setConfig] = useState(defaultConfig);

  function signin(token) {
    // Update the api config merging the current one
    setConfig({
      ...defaultConfig,
      headers: {
        ...defaultConfig.headers,
        Authorization: token
      }
    });
  }

  // Consider a logout function
  // function signout() {
  //   setConfig(defaultConfig);
  // }

  // All resolved response shoudl be converted to json according to the content type
  function resolveHook(response) {
    // Check the ok prop to consider the response as rejected as needed like:
    return response.ok
      ? // `.json()` if ok
        response.json()
      : // if not `ok` fallback to rejectHook
        Promise.reject(response);
  }

  // Treat fails here before returning to your call
  // Note: The rejected reponse above will fall here
  function rejectHook(response) {
    return Promise.reject(response);
  }

  return (
    <ApiProvider
      url={url} // Optional: prefix url api calls. Litteraly, it's a prefix for api calls.
      config={config} // Optional: Init default config of fetch. It can be overridable per calls later (or wrapping another ApiProvider)
      resolveHook={resolveHook} // Optional: Provide callback function for success fetchs
      rejectHook={rejectHook} // Optionnal: Provider reject callback
    >
      <SignIn signinCallback={signin} />
    </ApiProvider>
  );
};

const SignIn = ({ signinCallback }) => {
  const api = useApi();

  const [dataState, dataDispatch] = useReducer(reducer, {
    status: "initialized",
    payload: {}
  });

  function getSuccess() {
    dataDispatch({ status: "initializing" });
    // Call 'https://myendpoint.co/api/' + '/slug/details' + '?id=42&filter=random'
    api
      .get("/comments", undefined, { id: 42, filter: "random" })
      .then((payload) => {
        // Note that: payload is already jsonified due to resolveCallback
        dataDispatch({ status: "initialized", payload });
      })
      .catch((payload) => {
        // FeelsBadMan
        dataDispatch({ status: "error", payload });
      });
  }

  function postSuccess() {
    dataDispatch({ status: "initializing" });
    api
      .post("/comments", {
        body: JSON.stringify({ prop: "usefull stringify operation" })
      })
      .then((payload) => {
        signinCallback("myToken");
        dataDispatch({ status: "initialized", payload });
      })
      .catch((payload) => {
        dataDispatch({ status: "error", payload });
      });
  }

  function postError() {
    dataDispatch({ status: "initializing" });
    api
      .post("/error", {
        body: JSON.stringify({ prop: "usefull stringify operation" }),
        headers: {
          // This will override the default Content-type. Note the Authorization will be preserved
          // :warning: This is for demo pruposes only, `body: JSON.stringify` should be treated as `application/json`. It's just to show a config override per call.
          "Content-Type": "text/html; charset=utf-8"
        }
      })
      .then((payload) => {
        signinCallback("myToken");
        dataDispatch({ status: "initialized", payload });
      })
      .catch((payload) => {
        dataDispatch({ status: "error", payload });
      });
  }

  return (
    <>
      <div>
        <button onClick={getSuccess}>GET SUCCESS</button>
        <button onClick={postSuccess}>POST SUCCESS</button>
        <button onClick={postError}>POST ERROR</button>
      </div>
      {dataState.status === "initializing" && "loading ..."}
      {dataState.status === "error" && (
        <div>
          Error:
          <pre>{JSON.stringify(dataState.payload, null, 2)}</pre>
        </div>
      )}
      {dataState.status === "initialized" && (
        <div>
          Success:
          <pre>{JSON.stringify(dataState.payload, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

// Wrap the reducer whatever we dont care that's not the point here
function reducer(state, action) {
  return { ...state, ...action };
}

ReactDOM.render(<App />, document.getElementById("root"));
