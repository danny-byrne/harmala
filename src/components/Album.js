import React from 'react'

export default function Album(props){

  const createSrc = (id) => {
    return `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`
  }

  let { link, id, text } = props.curAlbum;
  return (
    <div>
      <h3>{text} by Harmala (Danny Byrne)</h3>
      <iframe title={id} style={{border: "0", width: "350px", height: "470px"}} 
              src={createSrc(id)} seamless>
                <a href={link}>{text}
                </a>
      </iframe>
    </div>
  )
}