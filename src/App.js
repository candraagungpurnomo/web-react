// import logo from './logo.svg';
import React from 'react';
import GambarMobil from './img/mobil.png'
import './App.css';

// const Welcome = (props) => {
//   console.log(props.name)
//   return <div>HEllo lagi {props.name}</div>
// }


function App() {
  return (
    // <div className="App" style={{color: "red"}}>
    //   <h1>Hello World</h1>
    // </div>
    <div>
      <div class="box1">
      <h1>Hi, Nama Saya Candra</h1>
      <p>Senang Bisa mengenal mu!</p>
    </div>
    <div class="box2">
      <p>Dibawah ini adalah gambar mobil</p>
    </div>
    <div class="box3">
      <img alt="mobil" src={GambarMobil} class="foto" />
    </div>
    <div class="box4">
      <div class="con1"></div>
      <div class="con2"></div>
      <div class="con3"></div>
      <div class="con4"></div>
    </div>
    </div>
  );
}

export default App;
