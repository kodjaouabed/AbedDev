import React from 'react';
import "./services.css"
import { FaGlobe,FaSearch,FaTools} from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { CiMobile3,CiServer} from "react-icons/ci";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Services = (props) => {
    const  selector = useSelector(state => state.Background);
    return (
        <div className='container_services' ref={props.refservices}>
            <h5>Services</h5>
            <div className='speciality'>
                <div></div><p>Mes spécialités</p>
            </div>
            <div className='services'>
                     <div
                    
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(101, 0, 101,0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><FaGlobe  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>Conception de sites web</span></p>
                      <p>
                        <h6>
                        Je crée des sites web personnalisés et performants en utilisant des technologies modernes comme HTML5, CSS3, JavaScript, React.js et Node.js. 🚀
                        </h6>
                      </p>
                     </div>



                     <div
                    
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><CiMobile3 style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>Conception d'app mobile</span></p>
                      <p>
                        <h6>Je conçois des applications mobiles natives et hybrides avec React Native et Node.js, offrant des expériences fluides et optimisées sur Android et iOS.</h6>
                      </p>
                     </div>


                     <div
                    
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><GiPencilBrush style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>Conception d’interfaces UI/UX</span></p>
                      <p>
                        <h6>Je conçois des interfaces pratiques et responsives, offrant une expérience utilisateur fluide sur mobile, tablette et ordinateur.</h6>
                      </p>
                     </div>


                     <div
                    
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><CiServer  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>Intégration d'API</span></p>
                      <p>
                        <h6>Connexion fluide à des services externes via des API REST et GraphQL pour des données en temps réel et des fonctionnalités améliorées.</h6>
                      </p>
                     </div>


                     <div
                    
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><FaSearch  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>Optimisation SEO</span></p>
                      <p>
                        <h6>J’optimise les sites web pour des performances rapides et une meilleure visibilité sur les moteurs de recherche.</h6>
                      </p>
                     </div>

                     <div
                    
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"5px 5px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><FaTools  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>Maintenance et support technique</span></p>
                      <p>
                        <h6>Je propose maintenance et support pour garantir la sécurité, la stabilité et les mises à jour régulières des sites web et applications mobiles</h6>
                      </p>
                     </div>


                     

                     
            </div>
        </div>
    );
}

export default Services;
