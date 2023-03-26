import React from "react";

export const Card = ({ imageUrl, title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`relative shadow-lg rounded-md p-4 w-1/4  flex flex-col items-center justify-center m-4 ${
        isHovered ? "scale-110" : ""
      } transition-transform duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="w-full rounded-md" />
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
