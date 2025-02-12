import React from 'react';
import "./Apropos.css"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';



const Apropos = (props) => {
    const selector=useSelector(state=>state.Background)
    return (
        <div className='container_apropos' ref={props.refpropos}>

            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='image_présentation'><img src={selector.bacgroundColor==="white"?"./images/presentation.png":"./images/presentationn.png"} alt="" />
            </motion.div>
            <div className='apropos'>
            <motion.div 
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
            className='title_propos'>
          <h5>Apropos</h5>
          <div className='speciality'>
          <div></div><p>Qui suis-je ? </p>
          </div>
         </motion.div>
                <motion.p
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7 }}
                >
                    <h6>Je suis Abed-Négo Kodjaou, développeur web et mobile spécialisé en React JS et React Native. Passionné par la création d'applications modernes et performantes, j'aide les entreprises à concrétiser leurs idées en solutions numériques efficaces. Mon parcours m'a permis de travailler sur divers projets, dont un système de gestion scolaire présenté lors de ma soutenance, renforçant ainsi mon expertise en développement et gestion de projets complexes.</h6>
                </motion.p>
                <motion.p
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.7 }}
                >
                    <h6> Je privilégie un code propre et structuré, tout en aimant collaborer avec des équipes multidisciplinaires pour relever des défis techniques. Mon objectif est de concevoir des applications intuitives qui répondent aux besoins des utilisateurs. Toujours ouvert aux nouvelles opportunités, n’hésitez pas à me contacter pour discuter de vos projets web ou mobiles.</h6>
                </motion.p>
                <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                >Embauche-moi!</motion.button>
            </div>
        </div>
    );
}

export default Apropos;