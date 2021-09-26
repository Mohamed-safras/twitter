import Header from "./youtube/Header";
import Side from "./youtube/Side";

import "./App.css";
import { useState } from "react";

function App() {
  const [ismenuOpen, setIsmenuOpen] = useState(true);
  return (
    <div className="app">
      <Header ismenuOpen={ismenuOpen} setIsmenuOpen={setIsmenuOpen} />
      <div className="feed">{ismenuOpen ? <Side /> : null}</div>
    </div>
  );
}

export default App;
