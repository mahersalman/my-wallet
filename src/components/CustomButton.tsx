function CustomButton({ text }: { text: string }) {
    return (
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
        {text}
      </button>
    );
  }
  
  export default CustomButton;