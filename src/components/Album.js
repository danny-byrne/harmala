import React from "react";

export default function Album(props) {
  console.log("album.js", props.curAlbum);
  const { curAlbum } = props;
  const { link, id, text } = curAlbum;
  const createSrc = (id) => {
    return `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`;
  };
  return (
    <div className="AlbumView fade-in">
      <iframe title={id} className="Album fade-in" src={createSrc(id)} seamless>
        <a href={link}>{text}</a>
      </iframe>
    </div>
  );
}
