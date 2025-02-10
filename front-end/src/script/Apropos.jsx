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
                <p>
                    <h6>Je suis Abed-Négo Kodjaou, développeur web et mobile spécialisé en React JS et React Native. Passionné par la création d'applications modernes et performantes, j'aide les entreprises à concrétiser leurs idées en solutions numériques efficaces. Mon parcours m'a permis de travailler sur divers projets, dont un système de gestion scolaire présenté lors de ma soutenance, renforçant ainsi mon expertise en développement et gestion de projets complexes.</h6>
                </p>
                <p>
                    <h6> Je propose maintenance et support pour garantir la sécurité, la stabilité et les mises à jour régulières des sites web et applications mobiles.</h6>
                </p>
                <button
               
                >Embauche-moi!</button>
            </div>
        </div>
    );
}

export default Apropos;