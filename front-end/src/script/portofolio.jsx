import React from 'react';
import "./portofolio.css"
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import axios from "axios"
import { Helmet } from 'react-helmet';

const Portofolio = (props) => {
    const [projet,setProjet]=useState([])
    const  selector = useSelector(state => state.Background);
    const  translate = useSelector(state => state.lg);
    useEffect(() => {
    axios.get("https://abedbackendportofolio.vercel.app/projets")
    .then(resultat=>setProjet(resultat.data))
    .catch(err=>console.log(err))
    }, [projet]);

    function buttonsurvol(e) {
        e.target.style.backgroundColor="white"
        e.target.style.color="#650065"
      }
    
      function buttonnosurvol(e) {
        e.target.style.backgroundColor="#650065"
        e.target.style.color="white"
      }
    return (
        <div className='container_portofolio' ref={props.refportofolio}>
          <Helmet>
                <meta name="description" content="Développeur web et mobile Abed-Négo Kodjaou, expert en React.js, React Native et Node.js. Découvrez mes projets et mes compétences en développement." />
                <title>Développeur Web & Mobile - Abed-Négo Kodjaou</title>
                </Helmet>
           <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='title_portofolio'>
            <h5>Portofolio</h5>
            <div className='speciality'>
            <div></div><p> {translate.lg === "fr" ?"Mes projets web & mobile":"My web & mobile projects" }</p>
            </div>
           </motion.div>

           <div className='projets'>
            
                {
                    projet.map((projet,indexprojet)=>{
                          return(
                          <motion.div 
                          initial={{ opacity: 0, y: 100 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                            key={indexprojet}
                            style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}
                            className={projet.typeproject==="web"?'projet web':'projet mobile'}>
                                {/**
                                 * 
                                 * <div className='btn' style={{backgroundColor:selector.bacgroundColor==="white"?"white":"black"}}>
                                    <button onMouseOver={buttonnosurvol} onMouseOut={buttonsurvol} style={{border:"1px solid #650065",color:selector.bacgroundColor==="white"?"#650065":"white",backgroundColor:selector.bacgroundColor==="white"?"white":"#650065",marginLeft:20}}>website</button>
                                    <button onMouseOver={buttonnosurvol} onMouseOut={buttonsurvol} style={{border:"1px solid #650065",color:selector.bacgroundColor==="white"?"#650065":"white",backgroundColor:selector.bacgroundColor==="white"?"white":"#650065"}}>develppement</button>
                                </div>
                                 * 
                                 */}
                                 <img src={`/images/${projet.imageproject}`} alt="" />
                            </motion.div>
                          )
                    }
                    )
                }

               
                
           </div>
        </div>
    );
}

export default Portofolio;
