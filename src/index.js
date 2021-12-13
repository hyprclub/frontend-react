import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

Sentry.init({
  dsn: "https://b620bcc052d84ea0a7841444b022f8f7@o1089010.ingest.sentry.io/6103876",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
