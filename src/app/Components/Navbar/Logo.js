import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer select-none">

      {/* Icon Box */}
      <div className="
        w-10 h-10
        flex items-center justify-center
        rounded-xl
        bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700
        shadow-lg shadow-purple-900/40
        font-bold text-white text-lg tracking-tight
      ">
        {"</>"}
      </div>

      {/* Name */}
      <div className="leading-tight">
        <p className="text-white text-base font-semibold tracking-wide">
          Asma
        </p>
        <p className="text-purple-400 text-xs -mt-1 tracking-widest">
          DEVELOPER
        </p>
      </div>

    </div>
  );
};

export default Logo;
