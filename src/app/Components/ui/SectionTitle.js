import React from "react";

const SectionTitle = ({ title, description, className = "" }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-base sm:text-sm text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
