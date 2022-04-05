import React from "react"
import  "./Contact.css";
import Navber from "./Navber";
import Map from "./map.png"
import Chat from "./chat.png";
import Email from "./email.png";
import Phone from "./telephone.png";
const Contact = () => {

return(
<div>

<Navber />

  <div class="container">
    <div class="content mt-40">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <img src={Map} style={{width:"20%", marginLeft:'40%'}} />
          <div class="topic">Address</div>
          <div class="text-one">5th Floor, 501 Binori Bsquare2 Nr Double Tree By Hilton, Ambli Rd, Bopal, Ahmedabad, Gujarat 380058</div>
          <div class="text-two">Ahmedabad</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <img src={Phone} style={{width:"20%", marginLeft:'40%'}} />
          <div class="topic">Phone</div>
          <div class="text-one">+91 7359291233</div>
          <div class="text-two"></div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <img src={Email} style={{width:"20%", marginLeft:'40%'}} />
          <div class="topic">Email</div>
          <div class="text-one">smeet312@gmail.com</div>
          <div class="text-two"></div>
        </div>
      </div>
      <div class="right-side">
      <img src={Chat} style={{width:"20%", marginLeft:'40%'}} />
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
         </div>
    </div>
  </div>

</div>
);
}
export default Contact;