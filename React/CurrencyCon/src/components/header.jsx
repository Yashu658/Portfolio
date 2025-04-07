import React from 'react';
import { RotateCw } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-amber-950 py-6 shadow-lg">
      <div className="container mx-auto flex justify-center items-center gap-4">
        <RotateCw size={48} className="text-lime-300 animate-spin-slow" />
        <h1 className="text-6xl font-extrabold text-lime-50">
          Currency Converter
        </h1>
      </div>
    </header>
  );
};

export default Header;
