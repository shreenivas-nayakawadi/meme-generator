import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div className="editPage container">
      <div className="meme" ref={memeRef}>
        <img src={params.get("url")} width="250px" alt="" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <div className="buttons">
        <Button className=" m-3" onClick={addText}>
          Add Text
        </Button>
        <Button
          className=" m-3"
          variant="success"
          onClick={(e) => {
            exportComponentAsJPEG(memeRef);
          }}
        >
          save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
