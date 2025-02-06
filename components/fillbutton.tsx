const GradientFillButton = () => {
    return (
      <button className="group/button relative overflow-hidden rounded-3xl border-2  border-white bg-gradient-to-r from-pink-600 to-blue-500 px-4 py-1 text-lg font-medium text-white transition-all duration-150 hover:border-blue-500 active:scale-95 hover:text-blue-500 ">
        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-white transition-all duration-500 group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-blue-500">
          Sign Up
        </span>
      </button>
    )
  }
  
  export default GradientFillButton