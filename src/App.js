import React, { useState } from "react"
import Listen from "./components/Listen"   
import About from "./components/About"
import Connect from "./components/Connect"
import Footer from "./components/Footer"
import "./App.scss"

function App() {
  const views = ['About', 'Listen', 'Connect']
  const [view, setView] = useState(views[0]);
  const findCurView = () => {
    switch(view){
      case "About":
        return <About />
      case "Listen":
        return <Listen />
      case "Connect":
        return <Connect />
      default:
        return <About />
    }
  }

  const curView = findCurView();

  return (
    <div className="App">
      <div className="header">HARMALA</div>
      <div id="Nav">
        {views.map((e)=> {
           return <div key={e} className="pageNav" onClick={() => setView(e)}>{e}</div>
        })}
      </div>
      <div id="content">
        {curView}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
