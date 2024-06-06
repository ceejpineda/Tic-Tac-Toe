import React, { useContext } from 'react';
import { ReactComponent as XIcon } from '../assets/x-svg.svg';
import { ReactComponent as OIcon } from '../assets/o-svg.svg';
import { ReactComponent as DrawIcon } from '../assets/draw.svg';
import { GameContext } from '../App'; // adjust the path according to your project structure

const Scoreboard = ({ roundXwins, roundOwins, roundDraws, roundNumber }) => {
  const { playerX, playerY } = useContext(GameContext);

  return (
    <>
        <div className="flex flex-row gap-x-16">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <XIcon className="w-6 h-6 fill-accent"/>
                <span className="font-bold text-base-900"><span className='text-accent'>{playerX}</span>: {roundXwins} wins</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <OIcon className="w-6 h-6 fill-secondary"/>
                <span className="font-bold text-base-900"><span className='text-secondary'>{playerY}</span>: {roundOwins} wins</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <DrawIcon className="w-6 h-6 fill-primary"/>
                <div className="font-bold text-base-900"><span className='text-primary'>Draws: </span>{roundDraws}</div>
            </div>
        </div>
        <div>
            <span className='font-bold'>
                Round Number: {roundNumber}
            </span>
        </div>
    </>
  );
};

export default Scoreboard;