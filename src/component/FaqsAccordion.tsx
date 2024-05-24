import React, { useState } from "react";
import { TfaqAccordion } from "../type/typeComponent";
import './FaqAccordion.css'
import iconPlus from '../assets/images/iconPlus.svg'
import iconMinus from '../assets/images/iconMinus.svg'

 interface Props {
       faq: TfaqAccordion
 }

export const  FaqAccordion: React.FC<Props> = ({faq}) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const toogleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen)
    }
    return(
        <div className="blocAccordion">
            <hr/>
             {/* question */}
            <p onClick={toogleAccordion} className="faqQuestion">
                <span className="question">{faq.question}</span>
              { isAccordionOpen ? (<img className="iconPlus-minus" src= { iconMinus} alt="icon-plus" />) :

                (<img className="iconPlus-minus" src={iconPlus} alt="Icon-minus" />)}
            </p>
            {/* answer */}
            {
                isAccordionOpen && (

                    <p className="answer">{faq.answer} </p>

            )}
           
        </div>
    )
}
