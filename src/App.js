import React, { useState } from 'react';
import './App.css';
import HomePage from './pages';
import DialogComponent from './pages/components/DialogOpen'
import Backsound from './assets/backsound.mp3'

function App() {
  const [open, setOpen] = useState(true)
  // const [audio] = useState(new Audio(Backsound))

  const handleClose = () => {
    const x = document.getElementById("backsound")

    x.play()
    // audio.addEventListener('ended', () => audio.play());
    setOpen(false)
  }

  return (
    <div className="App">
      <audio id="backsound" hidden autoplay loop>
        <source src={Backsound} type="audio/mpeg" />
      </audio>
      {!open && <HomePage />}
      <DialogComponent open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
