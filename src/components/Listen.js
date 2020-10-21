import React, { useState, useMemo } from "react";
import Album from "./Album";

import bandcampURLs from "../constants";

export default function Listen() {
  const [view, setView] = useState(bandcampURLs[0].text);
  console.log(bandcampURLs[0]);
  console.log(view);

  const albums = bandcampURLs.map((e) => {
    return e.text;
  });

  const [curAlbum] = bandcampURLs.filter((e) => {
    return e.text === view;
  });

  const changeView = (view) => {
    console.log("changing view", view);
    setView(view);
  };

  console.log(curAlbum);

  return (
    <div className="Listen fade-in">
      <Navbar albums={albums} setView={changeView} />
      <Album curAlbum={curAlbum} />
    </div>
  );
}

function Navbar(props) {
  const { albums } = props;
  return (
    <>
      Albums:
      {albums.map((title) => {
        return (
          <div
            key={title}
            className="AlbumNavButton  fade-in"
            onClick={() => props.setView(title)}
          >
            {title}
          </div>
        );
      })}
    </>
  );
}
