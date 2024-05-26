import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getfaqAccordionById } from './server/server1';
import { TfaqAccordion } from './type/typeComponent';
import { BackgroundImage } from './component/BackgroundImage';
import iconStar from './assets/images/iconStar.svg'
import { FaqAccordion } from './component/FaqsAccordion';
function App() {
  const [faqsAccordion, setfaqAccordion] = useState<TfaqAccordion[] | null >(null)
  const [loading, setLoading] = useState<boolean>(true)

const [activeId, setActiveId] = useState(0)
  const toogleClick = (id: number) => {
    if(id != activeId){
         
      setActiveId(id)
    }else{
      setActiveId(0)
    }
  } 

  useEffect(() => {
    (async () => {
      setLoading(true);
      const faqAccordion = await getfaqAccordionById(1);
      setTimeout(() => {
        setfaqAccordion(faqAccordion);
        setLoading(false);
      }, 3500);
    })();
  }, []);

  return (
    <div className="App">
      <BackgroundImage />
     <section className='faqs'>
      <h1>
        {/* image */}
        <img className='icon-star' src={iconStar} />
        <span className='title'>FAQs</span>
      </h1>
      { loading ? <p className='loading'>Loading....</p> : <div className='faqAccordion'>
        {faqsAccordion?.map((faq, id) =>
           <FaqAccordion 
           faq={faq}
            key={id}
            activeId={activeId}
            toogleAccordion={toogleClick}
             />
       )}</div> }
     </section>
    </div>


  );
}

export default App;
