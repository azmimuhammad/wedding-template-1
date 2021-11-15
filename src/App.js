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
      <audio id="backsound" autoplay loop>
        <source src={Backsound} type="audio/mpeg" />
      </audio>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/j-ZGEx5Gxgo?controls=0&amp;start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {!open && <HomePage />}
      <DialogComponent open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
