function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className += " nav-d";
  } else {
    x.className = "";
  }


var x = document.getElementById("sticky");
  if (x.className === "sticky") {
    x.className += " stickyd";
  } else {
    x.className = "sticky";
  }

var x = document.getElementById("list-inline");
  if (x.className === "list-inline") {
    x.className += " list-inline-d";
  } else {
    x.className = "list-inline";
  }

var x = document.getElementsByClassName("stickA");

    
for (var i = 0; i < x.length; i++) { 
    
  if (x[i].className === "stickA") {
    x[i].className += " stickA-d";
  } else {
    x[i].className = "stickA";
  }
}


var x = document.getElementsByClassName("medium-box");
for (var i = 0; i < x.length; i++) { 
    if (x[i].className === "medium-box") {
    x[i].className += " medium-box-d";
  } else {
    x[i].className = "medium-box";
  }
}

}


//Header//

class MyHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
 
 <div class="image-container">
    <img class="maid" src="maid_logo.png" alt="maid header">
 </div>

      <header id="sticky" class="sticky"> 

<div class="topnav" id="myTopnav">
       
<button type="button" class="menu-toggle" onclick="myFunction()" >
           <i class="fa fa-bars"></i> 
    Menu 
</button>
   
    </div>
  
    
  <nav id="nav">
    <ul id="list-inline" class="list-inline"> 
      <li class="medium-box"><a class="stickA" href="index.html">Home Page</a></li>
      <li class="medium-box"><a class="stickA" href="art.html">Art</a></li>
      <li class="medium-box"><a class="stickA" href="newsletter.html">Newsletters</a></li>
      <li class="medium-box"><a class="stickA" href="contact.html">Contact Us</a></li>
      <li class="medium-box"><a class="stickA" href="faq.html">FAQ</a></li>
    </ul>
  </nav>
    
</div> 

</header>
       ` 
  }
}

customElements.define('my-header',MyHeader)

//Footer//

class MyFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      
  <footer>
 
    <div class="first-box">
    <div class="smicons">
<a href="https://discord.gg/gSAz2GC" target="_blank">
<img class="discord" src="Discord_logo.png" alt="discord logo"> 
</a>
    </div>

    <div class="smicons">
<a href="https://www.facebook.com/McGillAnime/" target="_blank">
<img class="facebook" src="facebook_logo_3.png" alt="facebook logo">
</a>
    </div>

    <div class="smicons">
<a href="contact.html">
      <img class="email" src="email_logo.png" alt="email logo">
</a>
    </div>

    </div>
<hr>
    <!--
<div class="second-box">
    <div class="small-box">
      <p>
       <a href=#> Top page</a>
      </p>
    </div>
</div>
      -->

<div class= "third-box">
   <p class="made-with-love"> Made with 🤎 by Christina, advised by Abu, and art by Song </p>
</div>
    
  </footer>
       ` 
  }
}

customElements.define('my-footer',MyFooter)


