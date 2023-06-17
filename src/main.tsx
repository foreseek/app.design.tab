import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/style.scss";

import "./fonts/overpass/Overpass-Thin.ttf";
import "./fonts/overpass/Overpass-Black.ttf";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
