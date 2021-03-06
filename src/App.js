import React, { useState } from "react";
import Listen from "./components/Listen";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import "./App.scss";

const views = {
  about: "About",
  listen: "Listen",
  connect: "Connect",
};

function App() {
  const [view, setView] = useState(views.about);

  const findCurView = () => {
    switch (view) {
      case views.about:
        return <About />;
      case views.listen:
        return <Listen />;
      case views.connect:
        return <Connect resetPage={resetPage} />;
      default:
        return <About />;
    }
  };

  const resetPage = () => {
    setTimeout(setView(views.about), 500);
  };

  const curView = findCurView();

  return (
    <div className="App fade-in">
      <header id="header">HARMALA</header>
      <div id="Nav">
        {Object.values(views).map((e) => {
          return (
            <div key={e} className="pageNav" onClick={() => setView(e)}>
              {e}
            </div>
          );
        })}
      </div>
      <div id="content">{curView}</div>
      <Footer />
    </div>
  );
}

export default App;
