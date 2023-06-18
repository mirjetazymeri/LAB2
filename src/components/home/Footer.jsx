import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/logo1.png' alt='' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
          </div>

     

    
        </div>
        <div className='legal container'>
          <p>Copyright</p>
          <label>
            Design & Developed by...
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
