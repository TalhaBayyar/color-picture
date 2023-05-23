import { useState } from 'react';

import { send } from '../socketApi'

function Picker({activeColor}) {   
 
  const [color, setColor] = useState('#000');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p style={{ color: 'white' }} className="font-bold text-lg">{color} </p>
      <input type="color" value={activeColor} onChange={handleChange} className="border-2 drop-shadow-2xl"/>
      <button type="button" onClick={() => send(color)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Choose Color</button>
    </div>
  );
}
export default Picker;