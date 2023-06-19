import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const Button_list = [
    "All",
    "Music",
    "Bollywood Music",
    "Live",
    "Gaming",
    "Comedy",
    "Recently Watched",
    "Bgmi",
    "New To You",
  ];

  return (
    <div>
      {Button_list.map((name) => {
        return <Button name={name} key={name} />;
      })}
    </div>
  );
};

export default ButtonList;
