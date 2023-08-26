import React from "react";
import { Props } from "../data";
import Avatar from "./Avatar";

const Profile: React.FC<Props> = ({ image, name, title, isNew }) => {
  return (
    <div className="Profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Profile;
