import React from 'react';
import "./Apropos.css"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';



const Apropos = (props) => {
    const selector=useSelector(state=>state.Background)
    const  translate = useSelector(state => state.lg);
    return (
        <div className='container_apropos' ref={props.refpropos}>
      <Helmet>
  <meta name="description" content="Freelance en développement web et mobile Abed-Négo Kodjaou. Créez votre site web ou application mobile à des prix abordables avec un travail de qualité. Contactez-moi pour un devis personnalisé." />
  <title>Développeur Web & Mobile Freelance - Abed-Négo Kodjaou</title>
   </Helmet>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='image_présentation'><img src={selector.bacgroundColor==="white"?"./images/Designtete.png":"./images/Designteten.png"} alt="" />
            </motion.div>
            <div className='apropos'>
            <motion.div 
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
            className='title_propos'>
          <h5>{translate.lg === "fr" ?"Apropos":"AboutMe" }</h5>
          <div className='speciality'>
          <div></div><p>{translate.lg === "fr" ?"Qui suis-je ? ":"Who am I?" }</p>
          </div>
         </motion.div>
                <motion.p
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7 }}
                >
                    <h6>{translate.lg === "fr" ?"Je suis Abed-Négo Kodjaou, développeur web et mobile spécialisé en React JS et React Native. Passionné par la création d'applications modernes et performantes, j'aide les entreprises à concrétiser leurs idées en solutions numériques efficaces. Mon parcours m'a permis de travailler sur divers projets, dont un système de gestion scolaire présenté lors de ma soutenance, renforçant ainsi mon expertise en développement et gestion de projets complexes.":"I am Abed-Négo Kodjaou, web and mobile developer specialized in React JS and React Native. Passionate about creating modern, high-performance applications, I help companies turn their ideas into effective digital solutions. My background allowed me to work on various projects, including a school management system presented during my defense, thus strengthening my expertise in the development and management of complex projects." }</h6>
                </motion.p>
                <motion.p
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7 }}
                >
                    <h6>{translate.lg === "fr" ?"Je privilégie un code propre et structuré, tout en aimant collaborer avec des équipes multidisciplinaires pour relever des défis techniques. Mon objectif est de concevoir des applications intuitives qui répondent aux besoins des utilisateurs. Toujours ouvert aux nouvelles opportunités, n’hésitez pas à me contacter pour discuter de vos projets web ou mobiles.":"I favor clean and structured code, while enjoying collaborating with multidisciplinary teams to overcome technical challenges. My goal is to design intuitive applications that meet user needs. Always open to new opportunities, do not hesitate to contact me to discuss your web or mobile projects." }</h6>
                </motion.p>
                <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                onClick={props.clickembauche}
                >{translate.lg === "fr" ?"Embauche-moi!":"Here me!" }</motion.button>
            </div>
        </div>
    );
}

export default Apropos;