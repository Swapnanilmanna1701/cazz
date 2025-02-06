const GradientFillButton = () => {
    return (
      <button className="group/button relative overflow-hidden rounded-3xl border-2 border-[#ff0b85] bg-white px-12 py-2 text-md font-medium text-[#ff0b85] transition-all duration-150 hover:border-[#ffffff] active:scale-95 mr-17">
        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-[#ff0b85] via-violet-500 to-cyan-300 transition-all duration-500 group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
          Srch
        </span>
      </button>
    )
  }
  
  export default GradientFillButton