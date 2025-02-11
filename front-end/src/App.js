import './App.css';
import { useState,useEffect, useRef } from 'react';
import Chargement from './script/chargement';
import Acceuil from './script/acceuil';
import Apropos from './script/Apropos';
import Services from './script/services';
import Technologie from './script/technologie';
import Portofolio from './script/portofolio';
import Client from './script/client';
import Contact from './script/contact';
import Footer from './script/footer';
import { useSelector } from 'react-redux';

function App() {
  const [chargement,setchargement]=useState("")
  const selector = useSelector(state=>state.Background)
  const refapropos=useRef(null)
  const refservices=useRef(null)
  const reftechnologies=useRef(null)
  const refportofolio=useRef(null)
  const refclient=useRef(null)
  const refcontact=useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setchargement("oui")
    },4000);
    return () => {
      
    };
  }, []);
  useEffect(() => {
    document.body.style.transition = "1s";
    document.body.style.backgroundColor = selector.bacgroundColor
    document.querySelectorAll('p').forEach((p,k)=>{
      p.style.color=selector.colorText
    })
   
    return () => {
      
    };
  }, [selector]);


  function clickapropos() {
    refapropos.current.scrollIntoView({ behavior: 'smooth' });
  }

  function clickservice() {
    refservices.current.scrollIntoView({ behavior: 'smooth' });
  }

  function clickcompetences() {
    reftechnologies.current.scrollIntoView({ behavior: 'smooth' });
  }

  function clickportofolio() {
    refportofolio.current.scrollIntoView({ behavior: 'smooth' });
  }

  function clicktemoignage() {
    refclient.current.scrollIntoView({ behavior: 'smooth' });
  }

  function clickcontact() {
    refcontact.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    chargement==="oui"?
    <div className="App">
        <Acceuil clickapropos={clickapropos} clickservices={clickservice} clickcompetences={clickcompetences} clickportofolio={clickportofolio}  clicktemoignage={clicktemoignage} clickcontact={clickcontact}  />
        <Apropos refpropos={refapropos}  />
        <Services refservices={refservices}  />
        <Technologie reftechnologies={reftechnologies} />
        <Portofolio refportofolio={refportofolio}  />
        <Client refclient={refclient}  />
        <Contact refcontact={refcontact} />
        <Footer />
    </div>
    :
    <div className="App">
        <Chargement />
    </div>
  );
}

export default App;

