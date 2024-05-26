import React, { useState } from "react";
import { TfaqAccordion } from "../type/typeComponent";
import "./FaqAccordion.css";
import iconPlus from "../assets/images/iconPlus.svg";
import iconMinus from "../assets/images/iconMinus.svg";

interface Props {
  faq: TfaqAccordion;
  onClick: (id: number) => void;
  activeId: number;
}

export const FaqAccordion: React.FC<Props> = ({ faq, activeId, onClick }) => {
  const [open, setOpen] = useState<boolean>(faq.id === activeId);
  return (
    <div className="blocAccordion">
      <hr />
      {/* question */}
      <p
        onClick={() => {
          onClick(faq.id);
          setOpen(!open);
        }}
        className="faqQuestion"
      >
        <span className="question">{faq.question}</span>
        {active ? (
          <img className="iconPlus-minus" src={iconMinus} alt="icon-plus" />
        ) : (
          <img className="iconPlus-minus" src={iconPlus} alt="Icon-minus" />
        )}
      </p>
      {/* answer */}
      {active && <p className="answer">{faq.answer} </p>}
    </div>
  );
};
