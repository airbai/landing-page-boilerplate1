import React from 'react';

const LayoutPack = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutPack;
