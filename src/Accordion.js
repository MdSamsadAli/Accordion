import React, { useState } from "react";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="title">{title}</div>
          <div className="title">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="content">{content}</div>}
      </div>
    </div>
  );
};
