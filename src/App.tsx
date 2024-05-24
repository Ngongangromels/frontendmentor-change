import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getfaqAccordionById } from './server/server1';
import { TfaqAccordion } from './type/typeComponent';
import { Tprops } from './type';
import desktop from './assets/images/desktop.svg'
import iconStar from './assets/images/iconStar.svg'
import { FaqAccordion } from './component/FaqsAccordion';
function App() {
  const [faqsAccordion, setfaqAccordion] = useState<TfaqAccordion[] | null >(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    (async () => {
      setLoading(true);
      const faqAccordion = await getfaqAccordionById();
      setTimeout(() => {
        setfaqAccordion(faqAccordion);
        setLoading(false);
      }, 2000);
    })();
  }, []);

  return (
    <div className="App">
     <img src={desktop} />
     <section className='faqs'>
      <h1>
        {/* image */}
        <img className='icon-star' src={iconStar} />
        <span className='title'>FAQs</span>
      </h1>
      <div className='faqAccordion'>
      {/* This checks whether faqsAccordion has an element in the current index (id) before accessing its properties.  */}
        {faqsAccordion?.map((d, id) =>
           <FaqAccordion faq={faqsAccordion?.[id]} key={id} />
       )} 
      </div>
     </section>
    </div>


  );
}

export default App;
