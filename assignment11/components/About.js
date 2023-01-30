import React, { useState } from "react";
import Sections from "./sections";

const About = () => {
  // const [visibleConfig, setVisibleConfig] = useState({
  //   isAbout: false,
  //   isTeam: false,
  //   isCareer: false,
  // });
  const [visibleConfig, setVisibleConfig] = useState("");
  return (
    <div>
      <h1>About Us</h1>

      <Sections
        title={"Careers"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // isVisible={visibleConfig.isCareer}
        // setIsVisible={() =>
        //   setVisibleConfig({
        //     isAbout: false,
        //     isTeam: false,
        //     isCareer: visibleConfig.isCareer ? false : true,
        //   })
        // }
        isVisible={visibleConfig === "career"}
        setIsVisible={() =>
          visibleConfig === "career"
            ? setVisibleConfig("")
            : setVisibleConfig("career")
        }
      />

      <Sections
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleConfig === "about"}
        setIsVisible={() =>
          visibleConfig === "about"
            ? setVisibleConfig("")
            : setVisibleConfig("about")
        }
        // isVisible={visibleConfig.isAbout}
        // setIsVisible={() =>
        //   setVisibleConfig({
        //     isAbout: visibleConfig.isAbout ? false : true,
        //     isTeam: false,
        //     isCareer: false,
        //   })
        // }
      />

      <Sections
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleConfig === "team"}
        setIsVisible={() =>
          visibleConfig === "team"
            ? setVisibleConfig("")
            : setVisibleConfig("team")
        }
        // isVisible={visibleConfig.isTeam}
        // setIsVisible={() =>
        //   setVisibleConfig({
        //     isAbout: false,
        //     isTeam: visibleConfig.isTeam ? false : true,
        //     isCareer: false,
        //   })
        // }
      />
    </div>
  );
};

export default About;
