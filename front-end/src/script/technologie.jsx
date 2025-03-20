import React, { useRef, useState,useEffect } from 'react';
import { FaCss3, FaDatabase, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact, FaWordpress } from "react-icons/fa";
import { useSelector } from 'react-redux';
import './technologie.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export default function Technologie(props) {
  const selector=useSelector(state=>state.Background);
  const  translate = useSelector(state => state.lg);
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  const html=useRef(null)
  const css=useRef(null)
  const js=useRef(null)
  const react=useRef(null)
  const node=useRef(null)
  const sql=useRef(null)
  const figma=useRef(null)
  const git=useRef(null)
  const github=useRef(null)
  const php=useRef(null)
  const wordpress=useRef(null)
  const [visiblehtml,setvisiblehtml]=useState(false)
  const [visiblecss,setvisiblecss]=useState(false)
  const [visiblejs,setvisiblejs]=useState(false)
  const [visiblereact,setvisiblereact]=useState(false)
  const [visiblefigma,setvisiblefigma]=useState(false)
  const [visiblesql,setvisiblesql]=useState(false)
  const [visiblenode,setvisiblenode]=useState(false)
  const [visiblegit,setvisiblegit]=useState(false)
  const [visiblegithub,setvisiblegithub]=useState(false)
  const [visiblephp,setvisiblephp]=useState(false)
  const [visiblewordpress,setvisiblewordpress]=useState(false)



  const options = {
    root: null, // Par défaut, c'est le viewport
    rootMargin: "0px", // Pas de marge
    threshold: 0.5, // Se déclenche quand l'élément est à moitié visible
  }


  function callback(entries,observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target===html.current) {
          setvisiblehtml(true)
        }
        if (entry.target===css.current) {
          setvisiblecss(true)
        }

        if (entry.target===js.current) {
          setvisiblejs(true)
        }

        if (entry.target===react.current) {
          setvisiblereact(true)
        }

        if (entry.target===node.current) {
          setvisiblenode(true)
        }

        if (entry.target===git.current) {
          setvisiblegit(true)
        }
        if (entry.target===github.current) {
          setvisiblegithub(true)
        }
        if (entry.target===figma.current) {
          setvisiblefigma(true)
        }

        if (entry.target===php.current) {
          setvisiblephp(true)
        }

        if (entry.target===wordpress.current) {
          setvisiblewordpress(true)
        }
        if (entry.target===sql.current) {
          setvisiblesql(true)
        }
        
      } else {
        
      }
    });
  }
  const observer=new IntersectionObserver(callback,options)

  useEffect(() => {
    if (html.current) {
      observer.observe(html.current);
    }
    if (css.current) {
      observer.observe(css.current);
    }
    if (js.current) {
      observer.observe(js.current);
    }
    if (react.current) {
      observer.observe(react.current);
    }
    if (node.current) {
      observer.observe(node.current);
    }
    if (sql.current) {
      observer.observe(sql.current);
    }
    if (figma.current) {
      observer.observe(figma.current);
    }
    if (git.current) {
      observer.observe(git.current);
    }
    if (github.current) {
      observer.observe(github.current);
    }
    if (php.current) {
      observer.observe(php.current);
    }
    if (wordpress.current) {
      observer.observe(wordpress.current);
    }
  }, [html,css,js,react,node,sql,figma,git,github,php,wordpress]);



  // Scroll auto scrolling
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


  // Gestion du toucher (scroll tactile)
const handleTouchStart = (e) => {
  setIsMouseDown(true);
  setStartX(e.touches[0].pageX - containerRef.current.offsetLeft); // Position initiale du toucher
  setScrollLeft(containerRef.current.scrollLeft);
};

const handleTouchMove = (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const moveX = e.touches[0].pageX - containerRef.current.offsetLeft; // Position actuelle du doigt
  const distance = moveX - startX;
  containerRef.current.scrollLeft = scrollLeft - distance; // Applique le mouvement
};

const handleTouchEnd = () => {
  setIsMouseDown(false);
};


  




  return (
    <div className='section_tech' ref={props.reftechnologies}>
      <Helmet>
            <meta name="description" content="Développeur web et mobile Abed-Négo Kodjaou, expert en React.js, React Native et Node.js. Découvrez mes projets et mes compétences en développement." />
            <title>Développeur Web & Mobile - Abed-Négo Kodjaou</title>
            </Helmet>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className='title_tech'>
      <h5>Technologies</h5>
        <div className='speciality'>
        <div></div><p>{translate.lg === "fr" ?"Mes technologies utilisées":"My technologies used" }</p>
      </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className='container_technologie'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={html} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*90)/100,strokeDashoffset: visiblehtml ? 0 : (409 * 90) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>90%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaHtml5 style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>

      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={css} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*80)/100,strokeDashoffset: visiblecss ? 0 : (409 * 80) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>80%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaCss3 style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>




      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={js} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*75)/100,strokeDashoffset: visiblejs ? 0 : (409 * 75) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>75%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaJs style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>
      


      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={react} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*75)/100,strokeDashoffset: visiblereact ? 0 : (409 * 75) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>75%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaReact style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>


      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={node} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*80)/100,strokeDashoffset: visiblenode ? 0 : (409 * 80) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>80%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaNodeJs style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>


      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={sql} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*90)/100,strokeDashoffset: visiblesql ? 0 : (409 * 90) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>90%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaDatabase style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>


      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={figma} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*90)/100,strokeDashoffset: visiblefigma ? 0 : (409 * 90) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>90%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaFigma style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>




      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={git} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*90)/100,strokeDashoffset: visiblegit ? 0 : (409 * 90) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>90%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaGit style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>




      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={github} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*90)/100,strokeDashoffset: visiblegithub ? 0 : (409 * 90) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>90%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaGithub style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>
      


      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle ref={php} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*90)/100,strokeDashoffset: visiblephp ? 0 : (409 * 90) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>90%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaPhp style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>
      
      
      <div  style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"0px 0px 10px rgba(255, 255, 255,0.3)"}}>
         <svg class="progress-circle" width="100%" height="100%">
           <circle ref={wordpress} cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
           <circle  cx="150" cy="62" r="50" style={{fill:"none",strokeWidth:15,stroke:"#650065",strokeDasharray:(314*60)/100,strokeDashoffset: visiblewordpress ? 0 : (409 * 60) / 100,strokeLinecap:"round",transition: "stroke-dashoffset 2s ease-in-out"}}></circle>
         </svg>
         <h6 style={{marginTop:-100,marginLeft:140,fontSize:15,color:selector.bacgroundColor==="white"?"#650065":"white"}}>60%</h6>
         <h6 style={{marginLeft:70,marginTop:40}}><FaWordpress style={{fontSize:30,color:selector.bacgroundColor==="white"?"#650065":"white"}} /></h6>
      </div>


    </motion.div>
    </div>
  );
} 