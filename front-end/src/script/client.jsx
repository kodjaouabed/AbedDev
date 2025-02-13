import React from 'react';
import {motion} from "framer-motion"
import "./client.css"
import { useSelector } from 'react-redux';
import { useState,useEffect,useRef } from 'react';
import { BiSolidCommentDetail } from "react-icons/bi";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";
import { FaUser,FaFacebook,FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import { AiTwotoneHdd } from "react-icons/ai";
import axios from 'axios';

const Client = (props) => {
      const selector = useSelector(state => state.Background);
      const containerRef = useRef(null);
      const [isMouseDown, setIsMouseDown] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const [visibleContainer,setVisibleContainer]=useState(false)
      const [temoignage,settemoignage]=useState([])
      const [selectedImage, setSelectedImage] = useState(null);
      const [nomtemoin, setnomtemoin] = useState(null);
      const [professiontemoin, setprofessiontemoin] = useState(null);
      const [messagetemoin,setmessagetemoin]=useState(null)

     const autoScroll = () => {
           if (containerRef.current) {
             containerRef.current.scrollLeft += 2; // Adjust scroll speed
             if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth) {
               containerRef.current.scrollLeft = 0; // Reset to the start
             }
           }
         };
       
         // Interval for auto scrolling
         useEffect(() => {
           const interval = setInterval(autoScroll, 30); // Scroll every 30ms
           return () => clearInterval(interval); // Clean up interval on component unmount
         }, []);
     
       const handleMouseDown = (e) => {
         setIsMouseDown(true);
         setStartX(e.pageX - containerRef.current.offsetLeft);  // Position initiale de la souris
         setScrollLeft(containerRef.current.scrollLeft);  // Position de défilement initiale
       };
     
       const handleMouseUp = () => {
         setIsMouseDown(false);  // La souris est relâchée
       };
     
       const handleMouseMove = (e) => {
         if (!isMouseDown) return;  // Si la souris n'est pas enfoncée, rien ne se passe
         e.preventDefault();
         const moveX = e.pageX - containerRef.current.offsetLeft;  // Nouvelle position de la souris
         const distance = moveX - startX;  // Calcul du mouvement horizontal
         containerRef.current.scrollLeft = scrollLeft - distance;  // Applique le mouvement au défilement
       };

      useEffect(() => {
        axios.get("https://abedbackendportofolio.vercel.app/alltemoignages")
        .then((res)=>{settemoignage(res.data)})
          .catch((err)=>{console.log(err)})
        return () => {
          
        };
      }, []);
       
       function unpload(e){
              const file=e.target.files[0]
              if (file) {
                setSelectedImage(file);
              }
       }


       function temoigner(e) {
       
          if (selectedImage!==null && nomtemoin!==null && professiontemoin!==null && messagetemoin!==null) {
          const formData=new FormData()
          formData.append("image",selectedImage)
          formData.append("nomtemoin",nomtemoin)
          formData.append("profession",professiontemoin)
          formData.append("message",messagetemoin)
          axios.post("https://abedbackendportofolio.vercel.app/temoignage",formData,{headers:{"Content-Type":"multipart/form-data"}})
          .then((res)=>{alert(res.data)})
          .catch((err)=>{console.log(err)})
          } else {
            alert("remplissez tout les champs du formulaire")
          }
      }
     
     
    return (
        <div className='section_client' ref={props.refclient}>
            
            <motion.div 
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
              className='title_client'>
            <h5>Témoingnages</h5>
            <div className='speciality'>
            <div></div><p>Témoingnages de quelques clients</p>
            </div>
            <button onClick={()=>{setVisibleContainer(true)}}>Témoignez</button>
           </motion.div>
 <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className='container_client'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      
      {
        temoignage.map((witness,key)=>{
          return(
            <div style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
        <p className='image'><img src={witness.image} alt="" /><BiSolidCommentDetail style={{color:selector.bacgroundColor==="white"?"#650065":"white",fontSize:20}} /></p>
        <p className='nom'>{witness.nom}</p>
        <p className='fonction'>{witness.profession}</p>
        <p className='comment'>{witness.temoignage} </p>
        <p className='note'>
          <LiaStarSolid style={{color:"#650065",fontSize:20}} />
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <RiStarSLine  style={{fontSize:23,color:"#650065"}}/>
        </p>
      </div>
          )
        })
      }
      
      
      



    </motion.div>
           
        <div className="visiblecontainer" style={{display:visibleContainer===true?"block":'none'}}>
          <FontAwesomeIcon onClick={()=>{setVisibleContainer(false)}} icon={faClose} style={{color:"white"}} />
        <p><h6>Ajoutez un témoignage</h6></p>
        <div className='hr'></div>
        <div className='form'>
          <div><span style={{}}><FaUser style={{color:"white"}} /></span><input  onChange={(e)=>{setnomtemoin(e.target.value)}} type="text" name="nomtemoin"  id="" placeholder='Nom / Prénom'/></div>
          <div><span style={{}}><AiTwotoneHdd style={{color:"white"}} /></span><input  onChange={(e)=>{setprofessiontemoin(e.target.value)}} type="text" name="profession"  id="" placeholder='Profession'/></div>
          <div><input  onChange={unpload} type="file" name="image"/></div>
          <div><textarea name="message" maxLength={286} onChange={(e)=>{setmessagetemoin(e.target.value)}} id="" placeholder='Veuillez enter votre témoignage'></textarea></div>
          <div><button type='button' onClick={temoigner} >Envoyer</button></div>
        </div>
        </div>
        </div>
        
    );
}

export default Client;
