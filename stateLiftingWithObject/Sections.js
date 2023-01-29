import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";

const Sections = ({ title, description, isVisible, setIsVisible }) => {
  console.log("isVisible: ", isVisible);
  return (
    <>
      <div>
        <h1>
          {title}{" "}
          {!isVisible ? (
            <AiOutlineArrowRight
              size={"12px"}
              cursor={"pointer"}
              onClick={() => setIsVisible(true)}
            />
          ) : (
            <AiOutlineArrowDown
              size={"12px"}
              cursor={"pointer"}
              onClick={() => setIsVisible(false)}
            />
          )}
        </h1>
      </div>
      <p>{isVisible && description}</p>
    </>
  );
};

export default Sections;
