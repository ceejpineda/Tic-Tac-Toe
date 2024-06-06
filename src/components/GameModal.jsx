// GameModal.jsx
import React from 'react';
import { ReactComponent as XIcon } from '../assets/x-svg.svg';
import { ReactComponent as OIcon } from '../assets/o-svg.svg';

const GameModal = ({ isModalOpen, playerX, setPlayerX, playerY, setPlayerY, handleCloseModal, handleStartGame }) => {
  return (
    isModalOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center h-screen">
        <div className="rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-neutral px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-32 flex flex-col">
            <div className='flex gap-6'>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Player 1 name:</span>
                  <XIcon />
                </div>
                <input type="text" value={playerX} placeholder="Type here" class="input input-bordered w-full max-w-xs" onChange={(e) => setPlayerX(e.target.value)} />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Player 2 name:</span>
                  <OIcon />
                </div>
                <input type="text" value={playerY} placeholder="Type here" class="input input-bordered w-full max-w-xs" onChange={(e) => setPlayerY(e.target.value)} />
              </label>
            </div>
          </div>
          <div className="bg-neutral px-4 py-3 sm:px-6 flex flex-row justify-end gap-6">
            <button type="button" className="btn  btn-primary" onClick={handleCloseModal}>
              Cancel
            </button>
            <button type="button" className="btn btn-wide btn-accent" onClick={handleStartGame}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default GameModal;