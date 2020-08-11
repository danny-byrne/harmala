import React from 'react'

const blurb = `Harmala is a music project created by Danny Byrne.  In 2015, Danny attended his first Ayahuasca ceremony.  
It changed his life, he became involved with the medicine community in Southern California.
He immediately saw how the music that accompanies a plant medicine journey could be approached in many ways.  
Traditionally, shamans use their voice, whistles, shakers, and bundles of plants to perform healings.  Since Ayahuasca has spread beyond the Amazon in recent decades, 
ceremony music has becomes more of a world music affair.

Danny is a Berklee College of Music graduate and immediately saw mixed ambient guitar and synth atmospheres helped people along in the journey process.  
He is influenced by Mogwai, Robert Rich, Brian Eno, Andrew Lahiff, Rudy Adrian, Aphex Twin, Vangelis, Radiohead and many others. 
Danny has been guardianing and facilitating with plant medicines for five years.`

export default function About() {
  return (
    <>
    <div className='blurb'>
      {blurb}
    </div>
    <div className='pictureBox'>

    </div>
    </>
  )
}
