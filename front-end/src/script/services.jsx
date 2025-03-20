import React from 'react';
import "./services.css"
import { FaGlobe,FaSearch,FaTools} from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { CiMobile3,CiServer} from "react-icons/ci";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Services = (props) => {
    const  selector = useSelector(state => state.Background);
    const  translate = useSelector(state => state.lg);
    return (
        <div className='container_services' ref={props.refservices}>
          <Helmet>
                <meta name="description" content="Développeur web et mobile Abed-Négo Kodjaou, expert en React.js, React Native et Node.js. Découvrez mes projets et mes compétences en développement." />
                <title>Développeur Web & Mobile - Abed-Négo Kodjaou</title>
                </Helmet>
            <motion.h5
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
            >Services</motion.h5>
            <motion.div
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
            className='speciality'>
                <div></div><p>{translate.lg === "fr" ?"Mes spécialités":"My specialties" }</p>
            </motion.div>
            <div className='services'>
                     <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"1px 1px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><FaGlobe  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>{translate.lg === "fr" ?"Conception de sites web":"Website design" }</span></p>
                      <p>
                        <h6>
                        {translate.lg === "fr" ?"Je crée des sites web personnalisés et performants en utilisant des technologies modernes comme HTML5, CSS3, JavaScript, React.js et Node.js. 🚀":"I create custom, high-performance websites using modern technologies like HTML5, CSS3, JavaScript, React.js and Node.js. 🚀" }
                        </h6>
                      </p>
                     </motion.div>



                     <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"1px 1px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><CiMobile3 style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>{translate.lg === "fr" ?"Conception d'app mobile":"Mobile app design" }</span></p>
                      <p>
                        <h6>
                        {translate.lg === "fr" ?" Je conçois des applications mobiles natives et hybrides avec React Native et Node.js, offrant des expériences fluides et optimisées sur Android et iOS.":"I design native and hybrid mobile apps with React Native and Node.js, delivering fluid and optimized experiences on Android and iOS." }
                        </h6>
                      </p>
                     </motion.div>


                     <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"1px 1px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><GiPencilBrush style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>{translate.lg === "fr" ?"Conception d’interfaces UI/UX ":"UI/UX interface design" }</span></p>
                      <p>
                        <h6>
                        {translate.lg === "fr" ?"Je conçois des interfaces pratiques et responsives, offrant une expérience utilisateur fluide sur mobile, tablette et ordinateur.":"I design practical and responsive interfaces, offering a fluid user experience on mobile, tablet and computer." }
                        </h6>
                      </p>
                     </motion.div>


                     <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"1px 1px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><CiServer  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>{translate.lg === "fr" ?"Intégration d'API":"API integration" }</span></p>
                      <p>
                        <h6>
                          {translate.lg === "fr" ?"Connexion fluide à des services externes via des API REST et GraphQL pour des données en temps réel et des fonctionnalités améliorées.":"Seamlessly connect to external services via REST and GraphQL APIs for real-time data and enhanced functionality." }
                        </h6>
                      </p>
                     </motion.div>


                     <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"1px 1px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><FaSearch  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>{translate.lg === "fr" ?"Optimisation SEO ":"SEO Optimization" }</span></p>
                      <p>
                        <h6>
                          {translate.lg === "fr" ?"J’optimise les sites web pour des performances rapides et une meilleure visibilité sur les moteurs de recherche.":"I optimize websites for fast performance and better visibility on search engines." }
                        </h6>
                      </p>
                     </motion.div>

                     <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     style={{boxShadow:selector.bacgroundColor==="white"?"5px 5px 10px rgba(0, 0, 0, 0.3)":"1px 1px 10px rgba(101, 0, 101,0.3)"}}>
                      <span className='icon'><FaTools  style={{color:"white",fontSize:20,padding:10,backgroundColor:"#650065",borderRadius:"50%",marginTop:10,marginLeft:20}} /></span>
                      <p><span>{translate.lg === "fr" ?"Maintenance et support technique ":"Maintenance and technical support" }</span></p>
                      <p>
                        <h6>
                        {translate.lg === "fr" ?"Je propose maintenance et support pour garantir la sécurité, la stabilité et les mises à jour régulières des sites web et applications mobiles":"I offer maintenance and support to guarantee the security, stability and regular updates of websites and mobile applications" }
                        </h6>
                      </p>
                     </motion.div>


                     

                     
            </div>
        </div>
    );
}

export default Services;
