import React from 'react';
import "./Apropos.css"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';



const Apropos = (props) => {
    const selector=useSelector(state=>state.Background)
    return (
        <div className='container_apropos' ref={props.refpropos}>
            <div
           
            className='image_présentation'><img src={selector.bacgroundColor==="white"?"./images/presentation.png":"./images/presentation-.png"} alt="" /></div>
            <div className='apropos'>
                <h5
               
                >A propos</h5>
                <p
               
                >Je suis Abed-Négo Kodjaou, développeur web et mobile spécialisé en React JS et React Native. Passionné par la création d'applications modernes et performantes, j'aide les entreprises à concrétiser leurs idées en solutions numériques efficaces. Mon parcours m'a permis de travailler sur divers projets, dont un système de gestion scolaire présenté lors de ma soutenance, renforçant ainsi mon expertise en développement et gestion de projets complexes.</p>
                <p
               
                >Je privilégie un code propre et structuré, tout en aimant collaborer avec des équipes multidisciplinaires pour relever des défis techniques. Mon objectif est de concevoir des applications intuitives qui répondent aux besoins des utilisateurs. Toujours ouvert aux nouvelles opportunités, n’hésitez pas à me contacter pour discuter de vos projets web ou mobiles.</p>
                <button
               
                >Embauche-moi!</button>
            </div>
        </div>
    );
}

export default Apropos;