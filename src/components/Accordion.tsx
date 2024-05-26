import React, { useState } from "react";
import { FaqItem } from "../type";
import "./FaqAccordion.css";
import iconPlus from "../assets/images/iconPlus.svg";
import iconMinus from "../assets/images/iconMinus.svg";
import { on } from "events";

type Props = {
  items: Record<any, any>[];
  renderTitle: (data: Record<any, any>) => React.ReactNode;
  renderContent: (data: Record<any, any>) => React.ReactNode;
  retrieveContent: (data: Record<string, string>) => Promise<any>;
};
export const Accordion: React.FC<Props> = (props) => {
  const [activeId, setActiveId] = useState<number | undefined>();
  const handleClick = (id: number) => {
    if (id === activeId) {
      // if the accordion is open, close it
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  };
  return (
    <div className="faqAccordion">
      {props.items.map((item, id) => (
        <AccordionItem
          data={item}
          key={id}
          renderTitle={props.renderTitle}
          renderContent={props.renderContent}
          retrieveContent={props.retrieveContent}
          activeId={activeId}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

interface AccordionItemProps {
  data: Record<any, any>;
  renderTitle: (data: Record<any, any>) => React.ReactNode;
  renderContent: (data: any) => React.ReactNode;
  onClick: (id: number) => void;
  retrieveContent: (data: Record<string, string>) => Promise<any>;
  activeId?: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  activeId,
  onClick,
  data,
  renderTitle,
  renderContent,
  retrieveContent,
}) => {
  const open = activeId === data.id;
  const [content, setContent] = useState<any>();
  return (
    <div className="blocAccordion">
      <hr />
      {/* title */}
      <p
        onClick={async () => {
          const response = await retrieveContent(data);
          setContent(response);
          onClick(data.id);
        }}
        className="faqQuestion"
      >
        <span className="question">{renderTitle(data)}</span>
        {open ? (
          <img className="iconPlus-minus" src={iconMinus} alt="icon-plus" />
        ) : (
          <img className="iconPlus-minus" src={iconPlus} alt="Icon-minus" />
        )}
      </p>
      {/*  content */}
      {open && <div className="answer">{renderContent(content)} </div>}
    </div>
  );
};
