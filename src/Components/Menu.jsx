import { useState } from 'react';

export default function DropDownMenu() {
  const [abierto, setAbierto] = useState(false);
  const [personasAbierto, setPersonasAbierto] = useState(false);

  const ToggleMenu = () => {
    setAbierto(!abierto);
  };
  const ToggleMenuPersonas = () => {
    setPersonasAbierto(!personasAbierto);
  };

  return (
    <div>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={ToggleMenu}>Reservar</button>

      {abierto && (
        <ul>
          <li>
            <button onClick={ToggleMenuPersonas}>People</button>
            {personasAbierto && (
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            )}
          </li>
          <li>Date</li>
          <li>Time</li>
        </ul>
      )}
    </div>
  );
}
