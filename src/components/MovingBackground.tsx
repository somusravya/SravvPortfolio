
import React from 'react';

const MovingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-dashed border-primary/30 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary/10 rounded-full animate-float-fast"></div>
      <div className="absolute top-1/6 right-1/2 w-20 h-20 border-2 border-pink-400/20 rounded-full animate-float-reverse"></div>
      <div className="absolute bottom-1/4 right-1/6 w-28 h-28 border border-dashed border-primary/25 rounded-full animate-float-diagonal"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 left-1/6 w-12 h-12 border border-primary/20 rotate-45 animate-rotate-slow"></div>
      <div className="absolute bottom-1/2 right-1/3 w-8 h-8 bg-primary/5 rotate-45 animate-rotate-fast"></div>
      <div className="absolute top-2/3 left-1/2 w-6 h-6 border border-pink-400/30 animate-pulse-gentle"></div>
      
      {/* Moving dots */}
      <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-primary/40 rounded-full animate-move-horizontal"></div>
      <div className="absolute bottom-1/5 right-1/5 w-3 h-3 bg-primary/30 rounded-full animate-move-vertical"></div>
      <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-move-diagonal"></div>
      
      {/* Large background circles */}
      <div className="absolute -top-32 -left-32 w-64 h-64 border border-primary/10 rounded-full animate-spin-very-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 border border-dashed border-primary/8 rounded-full animate-spin-reverse-slow"></div>
    </div>
  );
};

export default MovingBackground;
