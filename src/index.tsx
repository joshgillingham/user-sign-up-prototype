import * as React from "react";
import ReactDOM from "react-dom";

import App from "@app/components/App";

/**
 * Super simple entry
 * This might be a good place for an error boundary for the entire app
 */
ReactDOM.render(<App />, document.getElementById("app"));
