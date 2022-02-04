import { RuxGlobalStatusBar } from "@astrouxds/rux-global-status-bar";
import { RuxClock } from "@astrouxds/rux-clock";

const App = () => {
  return (
    <div>
      <rux-global-status-bar>
        <rux-clock></rux-clock>
      </rux-global-status-bar>
    </div>
  );
};

export default App;
