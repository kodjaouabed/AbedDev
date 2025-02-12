import React from 'react';
import "./footer.css"
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.div className='container_footer'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        >
            <hr />
            <p>COPYRIGHT @2024 BY <span>ABED-NEGO KODJAOU</span></p>
        </motion.div>
    );
}

export default Footer;
