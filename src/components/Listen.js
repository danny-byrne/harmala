import React from 'react'

const albums = [
  {
    link: "http://harmala.bandcamp.com/album/selections-i",
    id: 1125684420,
    text: "Selections I by Harmala (Danny Byrne)"
  },
  {
    link:"http://harmala.bandcamp.com/album/improvisations-i",
    id: 1970157443,
    text: "Improvisations I by Harmala (Danny Byrne)"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-ii",
    id: 3849103466,
    text: "Improvisations II by Harmala (Danny Byrne)"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-iii",
    id: 1936736121,
    text: "Improvisations III by Harmala (Danny Byrne)"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-iv",
    id: 1663168831,
    text: "Improvisations IV by Harmala (Danny Byrne)"
  },
  {
    link: "http://harmala.bandcamp.com/album/improvisations-v",
    id: 4290124329,
    text: "Improvisations V by Harmala (Danny Byrne)"
  }  
]

const createSrc = (id) => {
  return `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`
}

function Album(props){
  let { link, id, text } = props.e;
  return (
    <div>
      {/* <h3>{text}</h3> */}
      <iframe title={id} style={{border: "0", width: "350px", height: "470px"}} 
              src={createSrc(id)} seamless>
                <a href={link}>{text}
                </a>
      </iframe>
    </div>
  )
}


export default function Listen() {
  return (
    <div>
      Albums
      {albums.map((e) => {
        return <Album e={e} />
      })}
    </div>
  )
}
