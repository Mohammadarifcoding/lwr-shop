import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{children}</div>
    </main>
  );
};

export default Main;
