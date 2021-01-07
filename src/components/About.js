import React from "react";

const blurb = `Harmala is a music project created by Danny Byrne that is strongly influenced by the worlds of electronic and ambient experimental drone, 
the singing bowls, gongs and chants of soundbaths, and the plant medicines psilocybin and ayahuasca. 
Harmala is an experiment that shows that music that accompanies a plant medicine journey could be approached in many ways.  
Traditionally, shamans use their voice, whistles, shakers made out of bundles of plants to perform healings.
 
He is influenced by Mogwai, Robert Rich, Brian Eno, Andrew Lahiff, Rudy Adrian, Aphex Twin, Vangelis, Radiohead and many others. 
Danny has been guardianing and facilitating with plant medicines for five years.
Danny is a Berklee College of Music graduate who enjoys designing websites(including this one).`;

export default function About() {
  return (
    <>
      <div className="blurb">{blurb}</div>
      <div className="pictureBox" />
    </>
  );
}
