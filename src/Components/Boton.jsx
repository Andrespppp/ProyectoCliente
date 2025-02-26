// import Menu from './Menu';
// export default function Boton() {
//   return (
//     <>
//       <div>
//         <button onClick={this.Menu} className='boton-reservar' type='button'>
//           Reservar
//         </button>{' '}
//       </div>
//     </>
//   );
// }

import { useState } from 'react';

export default function DropdownMenu2() {
  const [abierto, setAbierto] = useState(false);

  const toggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <div className='relative inline-block'>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={toggleMenu}
        className='bg-blue-500 text-white px-4 py-2 rounded-lg'
      >
        Reservar
      </button>

      {abierto && (
        <ul className='absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-40'>
          <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
            Opción 1
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
            Opción 2
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
            Opción 3
          </li>
        </ul>
      )}
    </div>
  );
}

// const links = [];
