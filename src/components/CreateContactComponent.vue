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
  
   <div class="container">
    <div class="content">
      
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Surkhet, NP12</div>
          <div class="text-two">Birendranagar 06</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">codinglab@gmail.com</div>
          <div class="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
      <form action="#" id="form" class="topBefore" @submit.prevent="handleSubmitForm">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" 
            id="name"
              class="form-control"
              v-model="contact.name"
              required>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your lastname" 
            id="lastname"
              class="form-control"
              v-model="contact.lastname"
              required>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"
              class="form-control"
              v-model="contact.email"
              required
           >
        </div>
        <div class="input-box message-box">
          <input
            id="message"
              type="text"
              class="form-control"
              v-model="contact.description"
              required
            />
        </div>
    
        <div class="form-group">
            <button class="btn btn-danger btn-block">Create</button>
          </div>
      </form>
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
  import axios from "axios";

  
  export default {
    data() {
      return {
        contact: {
            name:"",
            lastname:"",
            email:"",
            description:""
        },
      };
    },
  
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/apiC/create-contact";
  
        axios
          .post(apiURL, this.contact)
          .then(() => {
            this.$router.push("/view");
            this.contact = {
                name:"",
                lastname:"",
                email:"",
                description:""
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };


  
  </script>
  <style>
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
/*------------ footer ----------*/



.container{
  width: 85%;
  background: #4267b201;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 100px;
  margin-bottom: 100px;
}
.container .content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container .content .left-side{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}

.content .left-side::before{

  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;
}
.content .left-side .details{
  margin: 14px;
  text-align: center;
}
.content .left-side .details i{
  font-size: 30px;
  color: #5197d8;
  margin-bottom: 10px;
}
.content .left-side .details .topic{
  font-size: 18px;
  font-weight: 500;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two{
  font-size: 14px;
  color: #4954e7;

}
.container .content .right-side{
  width: 75%;
  margin-left: 75px;
}
.content .right-side .topic-text{
  font-size: 23px;
  font-weight: 600;
  color: #111112;
}
.right-side .input-box{
  height: 50px;
  width: 100%;
  margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: #F0F1F8;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
}
.right-side .message-box{
  min-height: 110px;
}
.right-side .input-box textarea{
  padding-top: 6px;
}
.right-side .button{
  color:  #355dac;
  display: inline-block;
  margin-top: 12px;
}
.right-side .button input[type="button"]{
  color: #4267b2;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background: #3e2093;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button input[type="button"]:hover{
  color:  #4267b2;
  background: #5029bc;
}

@media (max-width: 950px) {
  .container{
    width: 90%;
    padding: 30px 40px 40px 35px ;
  }
  .container .content .right-side{
   width: 75%;
   margin-left: 55px;
}
}
@media (max-width: 820px) {
  .container{
    margin: 40px 0;
    height: 100%;
  }
  .container .content{
    flex-direction: column-reverse;
  }
 .container .content .left-side{
   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;
 }
 .container .content .left-side::before{
   display: none;
 }
 .container .content .right-side{
   width: 100%;
   margin-left: 0;
 }
}
</style>
