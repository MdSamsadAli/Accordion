import React, { useState } from "react";
import DataItems from "./AccApi";
import { Accordion } from "./Accordion";

const App = () => {
  const [DataList, setDataList] = useState(DataItems);
  return (
    <div>
      <div className="accordion">
        <h1>Frequent Ask Questions</h1>
        {DataList.map(({ title, content }) => {
          return <Accordion title={title} content={content} />;
        })}
      </div>
    </div>
  );
};
export default App;
