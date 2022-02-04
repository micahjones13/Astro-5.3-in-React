import React from "react";
import ReactDOM from "react-dom";
import { RuxGlobalStatusBar } from "@astrouxds/rux-global-status-bar";
import { RuxButton } from "@astrouxds/rux-button";
import { RuxClock } from "@astrouxds/rux-clock";

import styles from "./styles.module.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="dark-theme">
      <rux-global-status-bar class={styles.foo}>
        <rux-clock></rux-clock>
        <rux-button>Button</rux-button>
      </rux-global-status-bar>
      <rux-button>Outside of gsb</rux-button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
