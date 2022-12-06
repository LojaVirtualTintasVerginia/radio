import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import './index.css';

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const tracks = [
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/1.mp3",
    title: "bBlack Eyed Peas",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/21.mp3",
    title: "Calvin Harris, Dua Lipa - One Kiss",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/21.mp3",
    title: "Skank - � uma Partida de Futebol",
    tags: ["Copa"],
  },

  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/21.mp3",
    title: "Skank - � uma Partida de Futebol",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/16.mp3",
    title: "Promo��o Compra Premiada Verginia",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/3.mp3",
    title: "Carlos Vives- La Copa de Todos",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/4.mp3",
    title: "Hayya Hayya (Better Together)",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/5.mp3",
    title: "Jason Derulo - Colors",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/6.mp3",
    title: "K'NAAN - Wavin' Flag",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/7.mp3",
    title: "Live It Up - Nicky jam ft. Will Smith",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/16.mp3",
    title: "Promo��o Compra Premiada Verginia",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/8.mp3",
    title: "MAGIC SYSTEM - Magic In The Air",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/9.mp3",
    title: "MC Guim� - Pa�s do Futebol",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/10.mp3",
    title: "Olodum - Samba Futebol",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/11.mp3",
    title: "Pitbull - Sinta Este Momento",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/12.mp3",
    title: "Pitbull - International Love",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/13.mp3",
    title: "Pitbull - Timber",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/14.mp3",
    title: "Pitbull - We Are One (Ole Ola)",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/15.mp3",
    title: "Pra Frente Brasil",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/16.mp3",
    title: "Promo��o Compra Premiada Verginia",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/17.mp3",
    title: "Ricky Martin - La Copa de la Vida",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/18.mp3",
    title: "Santana - Dar um Jeito",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/19.mp3",
    title: "Shakira - Hips Don't Lie",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/16.mp3",
    title: "Promo��o Compra Premiada Verginia",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/20.mp3",
    title: "Shakira, Ozuna - Monoton",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/21.mp3",
    title: "Skank - � uma Partida de Futebol",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/22.mp3",
    title: "Sorriso Maroto, Dilsinho - P�ssimo Neg�cio",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/16.mp3",
    title: "Promo��o Compra Premiada Verginia",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/23.mp3",
    title: "A Copa do Mundo Oficial da FIFA Catar 2022",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/24.mp3",
    title: "Este � para voc� (feat. Zara Larsson)",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/25.mp3",
    title: "Turma Do Pagode - Camisa 10 - Esse � O Clima",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/27.mp3",
    title: "XSeven Nation Army",
    tags: ["Copa"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Natal"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/28.mp3",
    title: "A Christmas Coffee Shop Ambience",
    tags: ["Natal"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/29.mp3",
    title: "Christmas Mix",
    tags: ["Natal"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/30.mp3",
    title: "Christmas playlist",
    tags: ["Natal"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/31.mp3",
    title: "Natal",
    tags: ["Natal"],
  },
  {
    url: "https://chimerical-zuccutto-efd387.netlify.app/copa/26.mp3",
    title: "Verginia 30 anos Manifesto",
    tags: ["Natal"],
  }



  
];

const App = () => {
  return (
    <>
    <Header />
    <Wrapper>
      <Player trackList={tracks} />
    </Wrapper>
    </>
  );
};

export default App;
