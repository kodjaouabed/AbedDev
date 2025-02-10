import React from 'react'
import { useEffect,useState } from 'react'
import "./acceuil.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from "react-icons/fa";
import {faBars, faMoon,faSun} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn, faUpwork, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BackgroundChange } from './reduxAction';
import { useDispatch,useSelector } from 'react-redux'
import { motion } from "framer-motion";
import { useRef } from 'react';



export default function Acceuil(props) {
  const projetsRef=useRef(null)
  const satisfactionRef=useRef(null)
  const annéesExperiencesRef=useRef(null)


  const acceuil=useRef(null)
  const propos=useRef(null)
  const services=useRef(null)
  const competences=useRef(null)
  const portofolio=useRef(null)
  const temoignage=useRef(null)
  const contact=useRef(null)

  const [ProjetsVisible,setProjetsVisible]=useState(false)
  const [annéesExperiencesVisible, setAnnéesExperiencesVisible] = useState(false);
  const [satisfactionVisible, setSatisfactionVisible] = useState(false);

  const [projets,setprojets]=useState(0)
  const [annéesExperiences,setannéesExperiences]=useState(0)
  const [satisfaction,setsatisfaction]=useState(0)
  const dispatch = useDispatch();
  const  selector = useSelector(state => state.Background);

  
  
  function buttonsurvol(e) {
    e.target.style.backgroundColor="white"
    e.target.style.color="#650065"
  }

  function buttonnosurvol(e) {
    e.target.style.backgroundColor="#650065"
    e.target.style.color="white"
  }


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjetsVisible(true)
          setAnnéesExperiencesVisible(true)
          setSatisfactionVisible(true)
        }
      });
    }, options);
  
    if (projetsRef.current) {
      observer.observe(projetsRef.current);
    }
  
    return () => {
      if (projetsRef.current) {
        observer.unobserve(projetsRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    let timerProjets, timerAnnéesExperiences, timerSatisfaction;

    if (ProjetsVisible) {
      timerProjets = setInterval(() => {
        setprojets(prev => {
          if (prev >=8) {
            clearInterval(timerProjets);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }

    if (annéesExperiencesVisible) {
      timerAnnéesExperiences = setInterval(() => {
        setannéesExperiences(prev => {
          if (prev >= 3) {
            clearInterval(timerAnnéesExperiences);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }

    if (satisfactionVisible) {
      timerSatisfaction = setInterval(() => {
        setsatisfaction(prev => {
          if (prev >= 98) {
            clearInterval(timerSatisfaction);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }

    return () => {
      clearInterval(timerProjets);
      clearInterval(timerAnnéesExperiences);
      clearInterval(timerSatisfaction);
    };
  }, [ProjetsVisible, annéesExperiencesVisible, satisfactionVisible]);
  
function clickacceuil() {
  acceuil.current.scrollIntoView({ behavior: 'smooth' });
}
  



 
 
  return (
    <div ref={acceuil} className='container_acceuil'>
        <nav style={{backgroundColor:selector.bacgroundColor==="black"?"black":"white"}}>
           <div className='container_navigation'>
           <div><img src="/images/Logo.png" alt="" /></div>
           <div className='link'>
            <p onClick={clickacceuil}>Acceuil</p>
            <p onClick={props.clickapropos}>Apropos</p>
            <p onClick={props.clickservices}>Services</p>
            <p onClick={props.clickcompetences}>Compétences</p>
            <p onClick={props.clickportofolio}>Portofolio</p>
            <p onClick={props.clicktemoignage}>Témoignages</p>
            <p onClick={props.clickcontact}>Contact</p>
           </div>
           <div className='buttonnav'>
              <div className='buttonbackground'>
              {selector.bacgroundColor==="white"?<FaMoon style={{color:"white",fontSize:15}}   onClick={()=>{dispatch(BackgroundChange(selector))}} />
               :<RiSunFill style={{color:"white",fontSize:20}}  onClick={()=>{dispatch(BackgroundChange(selector))}} />
               }
              </div>
              <button onMouseOver={buttonsurvol} onMouseOut={buttonnosurvol} >Embauche-moi!</button>
              <div className='menubars'>
               <FontAwesomeIcon icon={faBars} style={{color:"white"}}  />
               
              </div>
           </div>
           </div>
        </nav>
        <section>
            <div className='container_info'>
            <div className='letgo'>
                  <div className='hr'></div><p>Let's go ✌️😎</p>
            </div>


            
            <p className="presentationbreve" style={{display:"flex"}}>
               <h2><span>Je suis Abed-Négo</span><div/>Développeur Web & Mobile</h2>
            </p>
            


                <p
                   className='presentation'
                    
                >
                      Je suis Abed-Négo Kodjaou, développeur web et mobile spécialisé en React.js et React Native. Passionné par la création d’applications performantes et intuitives, j’allie design moderne et code optimisé pour offrir des expériences utilisateur fluides et engageantes. 🚀
                </p>

                <div 
                   
                   className='conteneur_button'>
                  <button className="downloadcv" type="button" style={{border:"solid 1px #650065"}}><a href="/cv.pdf"  download="cv.pdf" style={{color:"#650065"}}>Telecharger mon cv</a></button>
                  <button onMouseOver={buttonsurvol} onMouseOut={buttonnosurvol} className="lienapropos" type="button" style={{border:"solid 1px #650065",color:"white",backgroundColor:"#650065"}}>A propos de moi</button>
                </div>
                <div
                className='client'
                ><p>1+ de clients</p><div className="hrv"></div><div style={{display:"flex",gap:10,paddingLeft:10}}><FontAwesomeIcon icon={faGithub} style={{fontSize:20,color:selector.colorText,cursor:"pointer"}} /><FontAwesomeIcon icon={faWhatsapp} style={{fontSize:20,color:selector.colorText,cursor:"pointer"}} /><FontAwesomeIcon icon={faFacebook} style={{fontSize:20,color:selector.colorText,cursor:"pointer"}} /><FontAwesomeIcon icon={faUpwork} style={{fontSize:20,color:selector.colorText,cursor:"pointer"}} /><FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:20,color:selector.colorText,cursor:"pointer"}} /></div></div>
            
             
            
            </div>




            <div className='container_image'>
              <img 
              src={selector.bacgroundColor==="white"?"./images/Design.png":"./images/Designn.png"} alt="" />
            </div>



        </section>
        <div className='details'>
            <div ref={projetsRef}>
              <h2>{projets}+</h2>
              <p>Projets freelance réalisés</p>
            </div>

            <div ref={annéesExperiencesRef}>
              <h2>{annéesExperiences}+</h2>
              <p>Années d'expériences</p>
            </div>


            <div ref={satisfactionRef}>
              <h2>{satisfaction}%</h2>
              <p>Satisfaction</p>
            </div>
        </div>
    </div>
  )
}
