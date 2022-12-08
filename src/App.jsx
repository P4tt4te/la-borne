import { useState } from 'react'
import './App.css'
import Dataviz from './components/views/Dataviz';
import Terminal from './components/views/Terminal';
import Theater from './components/views/Theater';

function App() {
  const [view, setView] = useState("dataviz");

  const handleChangeView = (view) => setView(view)

  return (
    <div className='app'>
      {
        view === "terminal" ?
          <Terminal handleChangeView={handleChangeView} /> :
          view === "dataviz" ?
            <Dataviz handleChangeView={handleChangeView} /> :
            view === "theater" &&
            <Theater handleChangeView={handleChangeView} />
      }
    </div>
  );
}

export default App;
