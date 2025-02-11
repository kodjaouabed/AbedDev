import React from 'react';
import {motion} from "framer-motion"
import "./client.css"
import { useSelector } from 'react-redux';
import { useState,useEffect,useRef } from 'react';
import { BiSolidCommentDetail } from "react-icons/bi";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";

const Client = (props) => {
      const selector = useSelector(state => state.Background);
      const containerRef = useRef(null);
      const [isMouseDown, setIsMouseDown] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);

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
     
     
    return (
        <div className='section_client' ref={props.refclient}>
            
            <div 
            
              className='title_client'>
            <h5>Témoingnages</h5>
            <div className='speciality'>
            <div></div><p>Témoingnages de quelques clients</p>
            </div>
           </div>
 <div
     
      className='container_client'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
        <p className='image'><img src="https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=" alt="" /><BiSolidCommentDetail style={{color:selector.bacgroundColor==="white"?"#650065":"white",fontSize:20}} /></p>
        <p className='nom'>Abed-Nego</p>
        <p className='fonction'>Développeur web</p>
        <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam.</p>
        <p className='note'>
          <LiaStarSolid style={{color:"#650065",fontSize:20}} />
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <RiStarSLine  style={{fontSize:23,color:"#650065"}}/>
        </p>
      </div>




      <div style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
        <p className='image'><img src="https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=" alt="" /><BiSolidCommentDetail style={{color:selector.bacgroundColor==="white"?"#650065":"white",fontSize:20}} /></p>
        <p className='nom'>Abed-Nego</p>
        <p className='fonction'>Développeur web</p>
        <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam.</p>
        <p className='note'>
          <LiaStarSolid style={{color:"#650065",fontSize:20}} />
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <RiStarSLine  style={{fontSize:23,color:"#650065"}}/>
        </p>
      </div>







      <div style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
        <p className='image'><img src="https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=" alt="" /><BiSolidCommentDetail style={{color:selector.bacgroundColor==="white"?"#650065":"white",fontSize:20}} /></p>
        <p className='nom'>Abed-Nego</p>
        <p className='fonction'>Développeur web</p>
        <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam.</p>
        <p className='note'>
          <LiaStarSolid style={{color:"#650065",fontSize:20}} />
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <RiStarSLine  style={{fontSize:23,color:"#650065"}}/>
        </p>
      </div>










      <div style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
        <p className='image'><img src="https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=" alt="" /><BiSolidCommentDetail style={{color:selector.bacgroundColor==="white"?"#650065":"white",fontSize:20}} /></p>
        <p className='nom'>Abed-Nego</p>
        <p className='fonction'>Développeur web</p>
        <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam.</p>
        <p className='note'>
          <LiaStarSolid style={{color:"#650065",fontSize:20}} />
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <RiStarSLine  style={{fontSize:23,color:"#650065"}}/>
        </p>
      </div>












      <div style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
        <p className='image'><img src="https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=" alt="" /><BiSolidCommentDetail style={{color:selector.bacgroundColor==="white"?"#650065":"white",fontSize:20}} /></p>
        <p className='nom'>Abed-Nego</p>
        <p className='fonction'>Développeur web</p>
        <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, numquam.</p>
        <p className='note'>
          <LiaStarSolid style={{color:"#650065",fontSize:20}} />
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <LiaStarSolid style={{color:"#650065",fontSize:20}}/>
          <RiStarSLine  style={{fontSize:23,color:"#650065"}}/>
        </p>
      </div>
    </div>
           
        
        </div>
        
    );
}

export default Client;
