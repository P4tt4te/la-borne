import { useState } from 'react'
import './App.css'
import Terminal from './components/views/Terminal';
import Hallway from './components/views/Hallway';
import Theater from './components/views/Theater';

function App() {
  const [view, setView] = useState("theater");

  const handleChangeView = (view) => setView(view)

  return (
    <div className='app'>
      {
        view === "terminal" ?
          <Terminal handleChangeView={handleChangeView} /> :
          view === "hallway" ?
            <Hallway handleChangeView={handleChangeView} /> :
            view === "theater" &&
            <Theater handleChangeView={handleChangeView} />
      }
    </div>
  );
}

export default App;
