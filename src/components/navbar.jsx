import React from "react";

function Navbar() {
return (
  
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="#">realme</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav l-hand-list">
<li class="nav-item">
<a class="nav-link" href="#">realme smartphone</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">narzo smartphone</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Audio</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Accessories</a>
</li>
</ul>
<ul className="navbar-nav r-hand-list"> 
<li class="nav-item">
<a class="nav-link" href="#">Brand </a>
</li> 
<li class="nav-item">
<a class="nav-link" href="#">Support</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Community</a>
</li>
</ul>
</div>
</div>
</nav>
)
}
export default Navbar