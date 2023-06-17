<template>
   <header class="header">
      <div class="logo">
      </div>
      <div class="nav">
        <ul :class="sidebar ? 'nav-links-sidebar' : 'nav-links'" @click="setSidebar(false)">
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/shop">Shop</a>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li>
            
            <a href="http://localhost:3000/">Blog</a>
          
          </li>
          <li>
            <a href="http://localhost:8080/createContacts">Contact</a>
          </li>
        </ul>
      </div>

  </header>
    <div class="responsive-container-block big-container">
    <div class="responsive-container-block container">
        <div class="responsive-container-block">
        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 img-one">
            <img alt="golden-lines.png" class="image-block bg-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png">
        </div>
        <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-12 content-one">
            <p class="text-blk section-head">
            Learn more about our salon
            </p>
            <p class="text-blk section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
            </p>
            <p class="text-blk section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in volupta
            </p>
        </div>
        </div>
    </div>
    </div>

    <footer>
      <div class="box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="SocailIcon">
          <i class="fab fa-facebook-f facebook"></i>
          <i class="fab fa-instagram instagram"></i>
          <i class="fab fa-twitter twitter"></i>
          <i class="fab fa-youtube youtube"></i>
        </div>
        <p>Copyright</p>
      <label>
        Design & Developed by...
      </label>
      </div>

  </footer>
</template>


<script>
    export default{
        name: 'AboutUs',
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap');

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.responsive-cell-block {
  min-height: 75px;
}

* {
  font-family: Nunito, sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;
}

a {
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  color: inherit;
}

header {
  color: black;
  
text-decoration: none;
  color: black;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

}

.navbar-items-icon {
  color: #000;
  display: none;
}
header ul {
  color: #000;
text-decoration: none;
  display: flex;
  justify-content: space-between;

}
header ul li {
  color: black;
  
text-decoration: none;
  display: flex;
  justify-content: space-between;;
  margin-left: 30px;
}
header ul li a {
  color: black;
  
text-decoration: none;
  font-weight: 500;
  transition: 0.5s;
}
header ul li a:hover {
  color: #b91b1b;
  font-weight: 500;
}


header.active {
  color: black;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 28px 0 rgb(0 0 0 / 6%);
  width: 100%;
  z-index: 10;
}

@media screen and (max-width: 768px) {
  header .icon {
    
  }
 
  .nav-links-sidebar {
    color: black;
    position: absolute;
    display: block;
    background-color: #fff;
    left: 50px;
    top: 75px;
    transition: 0.5s;
    width: 100%;
    height: 30vh;
    
text-decoration: none;
    z-index: 5;
  }

  header ul li {
    color: black;
    margin-bottom: 30px;
  }

  
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.responsive-container-block.container {
  max-width: 1320px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.responsive-container-block.big-container {
  justify-content: center;
  padding-top: 0px;
  padding-right: 50px;
  padding-bottom: 0px;
  padding-left: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.text-blk.section-text {
  color: rgb(147, 147, 147);
  max-width: 750px;
  font-size: 18px;
  line-height: 27px;
}

.text-blk.section-head {
  max-width: 750px;
  font-size: 45px;
  line-height: 50px;

}

.responsive-cell-block.wk-ipadp-6.wk-tab-12.wk-mobile-12.wk-desk-6.content-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 1024px) {
  .responsive-container-block {
    flex-direction: column-reverse;
  }

  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-one {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one {
    display: flex;
    max-height: 300px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .bg-image {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(-90deg) scaleX(1) scaleY(1) scaleZ(1);
    width: 100%;
  }

  .responsive-container-block.container {
    margin-top: 50px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  .text-blk.section-text {
    font-size: 16px;
  }

  .text-blk.section-head {
    font-size: 40px;
    line-height: 45px;
  }
}

@media (max-width: 500px) {
  .text-blk.section-head {
    font-size: 30px;
    line-height: 35px;
  }

  .responsive-container-block.big-container {
    padding-top: 0px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-left: 30px;
  }

  .text-blk.section-text {
    font-size: 16px;
    line-height: 24px;
  }

  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one {
    max-height: 250px;
  }

  .responsive-container-block.container {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .responsive-container-block.big-container {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;
  }

  .responsive-container-block.container {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
}

.wk-desk-1 {
  width: 8.333333%;
}

.wk-desk-2 {
  width: 16.666667%;
}

.wk-desk-3 {
  width: 25%;
}

.wk-desk-4 {
  width: 33.333333%;
}

.wk-desk-5 {
  width: 41.666667%;
}

.wk-desk-6 {
  width: 50%;
}

.wk-desk-7 {
  width: 58.333333%;
}

.wk-desk-8 {
  width: 66.666667%;
}

.wk-desk-9 {
  width: 75%;
}

.wk-desk-10 {
  width: 83.333333%;
}

.wk-desk-11 {
  width: 91.666667%;
}

.wk-desk-12 {
  width: 100%;
}

@media (max-width: 1024px) {
  .wk-ipadp-1 {
    width: 8.333333%;
  }

  .wk-ipadp-2 {
    width: 16.666667%;
  }

  .wk-ipadp-3 {
    width: 25%;
  }

  .wk-ipadp-4 {
    width: 33.333333%;
  }

  .wk-ipadp-5 {
    width: 41.666667%;
  }

  .wk-ipadp-6 {
    width: 50%;
  }

  .wk-ipadp-7 {
    width: 58.333333%;
  }

  .wk-ipadp-8 {
    width: 66.666667%;
  }

  .wk-ipadp-9 {
    width: 75%;
  }

  .wk-ipadp-10 {
    width: 83.333333%;
  }

  .wk-ipadp-11 {
    width: 91.666667%;
  }

  .wk-ipadp-12 {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .wk-tab-1 {
    width: 8.333333%;
  }

  .wk-tab-2 {
    width: 16.666667%;
  }

  .wk-tab-3 {
    width: 25%;
  }

  .wk-tab-4 {
    width: 33.333333%;
  }

  .wk-tab-5 {
    width: 41.666667%;
  }

  .wk-tab-6 {
    width: 50%;
  }

  .wk-tab-7 {
    width: 58.333333%;
  }

  .wk-tab-8 {
    width: 66.666667%;
  }

  .wk-tab-9 {
    width: 75%;
  }

  .wk-tab-10 {
    width: 83.333333%;
  }

  .wk-tab-11 {
    width: 91.666667%;
  }

  .wk-tab-12 {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .wk-mobile-1 {
    width: 8.333333%;
  }

  .wk-mobile-2 {
    width: 16.666667%;
  }

  .wk-mobile-3 {
    width: 25%;
  }

  .wk-mobile-4 {
    width: 33.333333%;
  }

  .wk-mobile-5 {
    width: 41.666667%;
  }

  .wk-mobile-6 {
    width: 50%;
  }

  .wk-mobile-7 {
    width: 58.333333%;
  }

  .wk-mobile-8 {
    width: 66.666667%;
  }

  .wk-mobile-9 {
    width: 75%;
  }

  .wk-mobile-10 {
    width: 83.333333%;
  }

  .wk-mobile-11 {
    width: 91.666667%;
  }

  .wk-mobile-12 {
    width: 100%;
  }
}

footer {
  background-color: #08071c;
  padding: 50px 0 0 0;
  color: #ffffff;
}
footer p {
  color: #f2ebeb;
  margin: 15px 0;
}
footer .SocailIcon i {
  background-color: #fff;
  border: 1px solid #fff;
}
footer h2 {
  margin-bottom: 20x;
  font-size: 10px;
}
footer li {
  color: #fff;
  margin-bottom: 15px;
}
footer li:before {
  content: "·";
  font-size: 40px;
  vertical-align: middle;
  line-height: 10px;
  margin-right: 20px;
  color: #38d16a;
}
footer .box p {
  margin: 0;
  margin-top: 15px;
}
footer span {
  color: #38d16a;
  opacity: 1;
}
footer .icon {
  margin-top: 20px;
  display: flex;
}
footer .icon i {
  color: #38d16a;
  margin-right: 20px;
  width: 20px;
  height: 20px;
}
.legal {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 70px;
  padding: 20px 0;
}
</style>
