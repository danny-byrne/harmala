import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  const dims = "100%";
  const style = {
    height: dims, width: dims
  };
  const urls = ["https://www.facebook.com/Harmala.Ceremony", 
  "http://Harmala.Bandcamp.com/",
  "spotify:artist:3YrBSGU872i4MqGqHenlIk",
  "https://www.instagram.com/harmala.music/"]
  return (
    <>
      {urls.map((e) => {
        return (
         <div key = {e} className="socialIcon">
          <SocialIcon fgColor="#FFFFFF" style={style} url={e} />
         </div> )
      })}
    </>
  );
}
