import React from "react";
import { Props } from "../data";

interface AvatarProps {
  image: string;
  isNew?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ image, isNew }) => {
  return (
    <div className="Avatar">
      <img className="photo" src={image} alt="" />
      {isNew && <span className="new">New</span>}
    </div>
  );
};

export default Avatar;
