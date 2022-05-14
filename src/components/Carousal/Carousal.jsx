import React, { useEffect } from 'react'
import './Carousal.css'
const Carousal = () => {
        
    useEffect(()=>{
               
        const next = document.querySelector(".next");
        const prev = document.querySelector(".previous");
        const slides = document.querySelectorAll(".slide");
        
        let index = 0;
        display(index);
        
        function display(index) {
          slides.forEach((slide) => {
            slide.style.display = "none";
          });
          slides[index].style.display = "flex";
        }
        
        function nextSlide() {
          index++;
          if (index > slides.length - 1) {
            index = 0;
          }
          display(index);
        }
        
        function prevSlide() {
          index--;
          if (index < 0) {
            index = slides.length - 1;
          }
          display(index);
        }
        
        next.addEventListener("click", nextSlide);
        prev.addEventListener("click", prevSlide);
        

    },[])

  return (
    <div className='carousal_body'>
        <>
  <main>
    <div className="slider">
      <div className="buttons">
        <div className="previous" />
        <div className="next" />
      </div>
      <div className="slide">
        <div className="testimonial">
          <blockquote>
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </blockquote>
          <p className="author">
            Tanya Sinclair
            <span>UX Engineer</span>
          </p>
        </div>
        <div className="slider-img">
          <img
            src="https://alcs-slider.netlify.app/images/image-tanya.jpg"
            alt="Author Image"
          />
        </div>
      </div>

      <div className="slide">
        <div className="testimonial">
          <blockquote>
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </blockquote>
          <p className="author">
            Tanya Sinclair
            <span>UX Engineer</span>
          </p>
        </div>
        <div className="slider-img">
          <img
            src="https://alcs-slider.netlify.app/images/image-tanya.jpg"
            alt="Author Image"
          />
        </div>
      </div>
      
      <div className="slide">
        <div className="testimonial">
          <blockquote>
            “ If you want to lay the best foundation possible I’d recommend
            taking this course. The depth the instructors go into is incredible.
            I now feel so confident about starting up as a professional
            developer. ”
          </blockquote>
          <p className="author">
            John Tarkpor
            <span>Junior Front-end Developer</span>
          </p>
        </div>
        <div className="slider-img">
          <img
            src="https://alcs-slider.netlify.app/images/image-john.jpg"
            alt="Author Image"
          />
        </div>
      </div>

    </div>
  </main>
  <footer className="attribution">
     @VARSH.ORG
  </footer>
</>

    </div>
  )
}

export default Carousal