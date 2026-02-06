import React from "react";

const variants = {
  primary:
    "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-900/30",
  outline:
    "border border-purple-500 text-purple-300 hover:bg-purple-600/10",
  ghost:
    "text-gray-300 hover:text-white hover:bg-white/5",
};

const Button = ({
  children,
  href,
  onClick,
  icon,
  variant = "primary",
  full = false,
  download = false,
  className = "",
}) => {
  const base = `
    group inline-flex items-center justify-center gap-2
    px-5 py-2 rounded-full text-sm font-medium
    transition-all duration-200
    hover:scale-105 active:scale-95
  `;

  const styles = `${base} ${variants[variant]} ${full ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href)
    return (
      <a href={href} download={download} onClick={onClick} className={styles}>
        {content}
      </a>
    );

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
};

export default Button;
