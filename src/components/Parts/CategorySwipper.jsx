import React from 'react'
import './PartsStyle/CategorySwipper.css'

function CategorySwipper() {


  var swiper = new Swiper(".swiper-container", {
    loopedSlides: 8,
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: {
      releaseOnEdges: true,
    },
  });
  
  var thumb = document.querySelectorAll(".thumbContainer");
  
  thumb.forEach(function(image, index) {
    var delay = index * 90;
    image.classList.add("fadeInSlide");
    image.style.animationDelay = delay + "ms";
  });
  
  return (
    <>
     <div class="swiper-container">

<div class="swiper-wrapper">
  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 1</h2>
      </div>
    </div>
  </div>


  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 2</h2>
      </div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 3</h2>
      </div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 4</h2>
      </div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 5</h2>
      </div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 6</h2>
      </div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 7</h2>
      </div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="thumbContainer">
      <img src="https://picsum.photos/600/400"/>
      <div class="projectInfo">
        <h2 class="serif">Project 8</h2>
      </div>
    </div>
  </div>
</div>

</div> 
    </>
  )
}

export default CategorySwipper
