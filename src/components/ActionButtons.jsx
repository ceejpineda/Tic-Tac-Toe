import React from 'react';
import { Link } from 'react-router-dom';

const ActionButtons = ({ handleRestart, handleEndSession }) => (
  <div className={`flex gap-12 justify-center`}>
    <button className="btn btn-primary w-32" onClick={handleRestart}>
      Continue
    </button>
    <Link to="/">
      <button className="btn btn-secondary w-32" onClick={handleEndSession}>
        Stop
      </button>
    </Link>
  </div>
);

export default ActionButtons;