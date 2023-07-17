import React from "react";

const Footer = () => {
    return(
        <div className="footer">
        <div className="links">
          <div className="footer-web">
          <h5>Useful Links</h5>
             
               <a href="#">Home</a>
             
            
                <a href="#">Services</a>
             
            
               <a href="#">About</a>
             
            
               <a href="#">Contact</a>
             
          </div>
          <div className="social">
          <div className="location">
                <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg" alt="location-logo" />
                <p>Near PDJ High School Darbar Street Bijapur</p>
            </div>

            <div className ='contact'>
               <img src="https://c.neh.tw/thumb/f/720/comvecteezy449769.jpg" alt="call"/>    
                  <p>9606406210</p>
             </div>
                  <div className='email'>
                    <img src="https://www.nicepng.com/png/detail/518-5185628_email-icon-symbol-of-email-black.png" alt="email"/>    
                      <p>mubbashirmahabari@gmail.com</p>
                 </div>
          </div>
           
         </div>
         <div className="line">
         </div>
             <div className="connect">
                <h3>Connect Socially With Us</h3>
                <div className="twitter">
                <a href='#Home'><img src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png' alt="twitter"/>
            </a></div>

            <div className='facebook'>
              <a href='#Home'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGE8ljXRyieCB8kw8Xirym_RYMXW2dkuwKg&usqp=CAU' alt="facebook"/>
             </a>
             </div>

             <div className='instagram'><a href='#Home'><img src='https://logowik.com/content/uploads/images/instagram-glyph.jpg' alt="instagram"/>
               </a>
              </div>
             </div>
            </div>
      
    );
}
export default Footer;