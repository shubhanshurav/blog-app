import React from "react";

const ResponsivePageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="px-4 custom-sm:px-10 custom-md:px-24 w-full h-full">
      {children}
    </div>
  );
};

export default ResponsivePageContainer;
