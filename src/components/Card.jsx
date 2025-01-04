import React from 'react';
import krishna from '../assets/krishna.jpg';

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md bg-blue-100 shadow-2xl rounded-2xl overflow-hidden">
      
        <img src={krishna} alt="SPIRITUAL NIGHT" className="w-full h-80 object-cover" />
        
       
        <div className="p-6 bg-blue-200">
          
          <p className="text-blue-900 text-2xl font-bold">
            SPIRITUAL MUSIC NIGHT
          </p>
          
          <p className="text-purple-800 text-lg mt-4">
            Date: January 15, 2025
          </p>
          
          <p className="text-blue-800 text-lg mt-2">
            Venue: Cidco,Sambhajinagar
          </p>
          
        
          <p className="text-pink-700 text-md mt-4">
            Join us for a spiritual journey to discover peace and serenity within yourself. Immerse in the beauty of soulful melodies and reflective moments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
