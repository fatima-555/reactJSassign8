import React from 'react'

function Carousel () {
return ( 
  
<div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
<img src="./src/assets/first img.webp" class="d-block w-100" alt="realme C75"/>
</div>
<div class="carousel-item">
<img src="./src/assets/second img.webp" class="d-block w-100" alt="realme 13+"/>
</div>
<div class="carousel-item">
<img src="./src/assets/third img.webp" class="d-block w-100" alt="realme GT 6"/>
</div>
<div class="carousel-item">
<img src="./src/assets/fourth img.webp" class="d-block w-100" alt="realme note 6"/>
</div>
<div class="carousel-item">
<img src="./src/assets/fifth img.webp" class="d-block w-100" alt="realme C61"/>
</div>
<div class="carousel-item">
<img src="./src/assets/sixth img.webp" class="d-block w-100" alt="realme C65"/>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>

)
}

export default Carousel