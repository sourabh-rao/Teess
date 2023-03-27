import React from "react";
import './Slider.css'

function Slider() {
  return (
    <div>
      <header className="cont-slider">
        <section className="slider">
          <article className="slide one">
            <span> One </span>
          </article>
          <article className="slide two">
            <span> Two</span>
          </article>
          <article className="slide three">
            <span> Three</span>
          </article>
          <article className="slide four">
            <span>Four</span>
          </article>
          <article className="slide five">
            <span>Five</span>
          </article>
        </section>
      </header>
    </div>
  );
}

export default Slider;
