import React from 'react'

export default function Album(props){

  const createSrc = (id) => {
    return `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`
  }

  let { link, id, text } = props.curAlbum;
  return (
    <div className="AlbumView">
      {/* <h3 style={{textAlign:"center"}}>{text} by Harmala (Danny Byrne)</h3> */}
      <iframe title={id} style={{border: "0", width: "350px", height: "470px", display: "inline-block"}} 
              src={createSrc(id)} seamless>
                <a href={link}>{text}
                </a>
      </iframe>
    </div>
  )
}