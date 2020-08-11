import React, { useState } from 'react';
import Album from './Album';


const bandcampURLs = [
  {
    link: "http://harmala.bandcamp.com/album/selections-i",
    id: 1125684420,
    text: "Selections I"
  },
  {
    link:"http://harmala.bandcamp.com/album/improvisations-i",
    id: 1970157443,
    text: "Improvisations I"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-ii",
    id: 3849103466,
    text: "Improvisations II"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-iii",
    id: 1936736121,
    text: "Improvisations III"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-iv",
    id: 1663168831,
    text: "Improvisations IV"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-v",
    id: 4290124329,
    text: "Improvisations V"
  }  
]

function Navbar(props){
  return (
    <>
    Albums:
      {props.albums.map((title) => {
        return  <div key={title} className="AlbumNavButton" onClick={() => props.setView(title)}>{title}</div>
      })}
    </>
  )
}

export default function Listen() {
  const [view, setView] = useState(bandcampURLs[0].text)

  const albums = bandcampURLs.map((e => {
    return e.text
  }))

  const findCurAlbum = () =>{
    for(let e of bandcampURLs){
      if(e.text === view){
        return e;
      }
    }
  }

  let curAlbum = findCurAlbum();  
  
  return (
    <div className="Listen">
      {/* <div>Albums</div> */}
      <Navbar albums={albums} setView={setView} />
      <Album curAlbum={curAlbum} />
    </div>
  )
}
