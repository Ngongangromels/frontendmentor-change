import React, { useState } from "react";
import { TfaqAccordion } from "../type/typeComponent";
import './FaqAccordion.css'
import iconPlus from '../assets/images/iconPlus.svg'
import iconMinus from '../assets/images/iconMinus.svg'

 interface Props {
       faq: TfaqAccordion
       toogleAccordion: (id: number) => void
       activeId: number
       
 }

export const  FaqAccordion: React.FC<Props> = ({faq,  activeId,  toogleAccordion}) => {
     
    const active = faq.id === activeId 
  
    return(
        <div className="blocAccordion">
            <hr/>
             {/* question */}
            <p onClick={() => toogleAccordion(faq.id)} className="faqQuestion">
                <span className="question">{faq.question}</span>
              { active ? (<img className="iconPlus-minus" src= { iconMinus} alt="icon-plus" />) :

                (<img className="iconPlus-minus" src={iconPlus} alt="Icon-minus" />)}
            </p>
            {/* answer */}
            {
                active && (

                    <p className="answer">{faq.answer} </p>

            )}
           
        </div>
    )
}
