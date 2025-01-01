import React from "react";
import { useNavigate } from "react-router-dom";
type CustomButtonProps = {
  text : string;
  path? : string;
};
function CustomButton({ text, path }: CustomButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
      if (path){
        navigate(path);
      }
    }
    return (
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 w-full"
      onClick={handleClick}>
        {text}
      </button>
    );
  }
  
  export default CustomButton;