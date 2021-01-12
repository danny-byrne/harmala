import React from "react";
import { p1, p2, p3, p4, p5 } from "../constants/text.js";

const blurb = [p1, p2, p3, p4].map((e) => {
  return <article>{e.padStart(2, " ")}</article>;
});

export default function About() {
  return (
    <>
      <picture className="pictureBox" />
      <div className="blurb">{blurb}</div>
    </>
  );
}
