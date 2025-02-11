import React,{useState,useRef} from 'react';
import { motion } from 'framer-motion';
import { FaUser,FaFacebook,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import "./contact.css"
import emailjs from '@emailjs/browser';
import axios from "axios"

const Contact = (props) => {
    const selector = useSelector(state => state.Background);
    const [nom,setnom]=useState(null)
    const [email,setemail]=useState(null)
    const [tel,settel]=useState(null)
    const [message,setmessage]=useState(null)
    const [newsletter,setnewsletter]=useState(null)
    const form=useRef(null)
  
    function buttonsurvol(e) {
        e.target.style.backgroundColor="white"
        e.target.style.color="#650065"
      }
    
      function buttonnosurvol(e) {
        e.target.style.backgroundColor="#650065"
        e.target.style.color="white"
      }


      function envoyer(e) {
        e.preventDefault()
        if (nom!==null && email!==null && tel!==null &&  message!==null) {
          emailjs
      .sendForm('service_sb2jpmd', 'template_3dsfh3s', form.current, {
        publicKey: 'YPTrEdIFmeTfZ3JQW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
        } else {
          alert("veuillez remplir tout les champs du  formulaire")
        }
      }

      function fnewsletter() {
        axios.post("https://abed-dev-qk8f.vercel.app/newsletter",{newsletter:newsletter})
        .then((res)=>{alert(res.data)})
        .catch((err)=>{console.log(err)})
      }

    return (
        <div className='container_contact' ref={props.refcontact}>
            <div 
            
              className='title_contact'>
            <h5>Contactez-Moi</h5>
            <div className='speciality'>
            <div></div><p>Parlons-en de vos projets</p>
            </div>
           </div>


           <div className='formulaire_contact'
          
           >
                <form action="" onSubmit={envoyer} ref={form}>
                <div><span style={{}}><FaUser style={{color:"white"}} /></span><input  onChange={(e)=>{setnom(e.target.value)}} type="text" name="nom"  id="" placeholder='Nom / Prénom'/></div>
                <div><span style={{}}><MdEmail style={{color:"white"}} /></span><input onChange={(e)=>{setemail(e.target.value)}}  type="email" name="email"  id="" placeholder='Email'/></div>
                <div><span style={{}}><BsFillTelephoneFill style={{color:"white"}} /></span><input onChange={(e)=>{settel(e.target.value)}}  type="text" name="tel"  id="" placeholder='Téléphone'/></div>
                <div><textarea name="message" onChange={(e)=>{setmessage(e.target.value)}} id="" placeholder='Merci de  détaillé  le plus possible votre besoin afin de faciliter nos futurs échanges'></textarea></div>
                <div><button type="submit" onMouseOver={buttonsurvol} onMouseOut={buttonnosurvol}>Envoyer</button></div>
                </form>

              
                <div className='reseau'>
                <div><input type="email" onChange={(e)=>{setnewsletter(e.target.value)}}  placeholder='email' /><button onMouseOver={buttonsurvol} onMouseOut={buttonnosurvol} onClick={fnewsletter}>S'abonner</button></div>
                   <div><FaLocationDot style={{padding:10,backgroundColor:"#650065",borderRadius:"50%",color:"white"}} /><p>CALAVI ZE COTONOU</p></div>
                   <div><BsFillTelephoneFill style={{padding:10,backgroundColor:"#650065",borderRadius:"50%",color:"white"}} /><a href="tel:+2290168364255"><p>+229 0168364255</p></a></div>
                   <div><MdEmail style={{padding:10,backgroundColor:"#650065",borderRadius:"50%",color:"white"}} /><a href="mailto:abnegko@gmail.com"><p>abnegko@gmail.com</p></a></div>
                   <div><FaFacebook style={{padding:10,backgroundColor:"#650065",borderRadius:"50%",color:"white"}} /><a href="https://www.facebook.com/abednego.kodjaou?locale=fr_FR"><p>Abed-Négo Kodjaou</p></a></div>
                   <div><FaWhatsapp style={{padding:10,backgroundColor:"#650065",borderRadius:"50%",color:"white"}} /><a href="https://wa.me/+2290168364255"><p>+229 0168364255</p></a></div>
                </div>
           </div>

           <div className="footer">

           </div>
        </div>
    );
}

export default Contact;
