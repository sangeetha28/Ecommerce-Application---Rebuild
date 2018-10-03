import React from "react";
import HomePageImage from "../images/wk16-HeroStatic_desk-four-revision.jpg"

const Image = ({image}) => {
  console.log('Image is',image)
  return (
    <div>
      <img className="wallpaper" src={image} />
    </div>
  );
};

export default Image;
