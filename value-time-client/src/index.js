import React from "react"
import App from "./App"
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

//Later service worker code, look at this: https://bit.ly/CRA-PWA
serviceWorker.unregister()
