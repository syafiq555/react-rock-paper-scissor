import * as React from 'react';
import ScoreBoard from '../ScoreBoard';

const Game: React.FC<{}> = () => {
  return (
    <div>
      <ScoreBoard />
      Score Rules You Picked The House Picked You Win You
      Lose Play Again
    </div>
  );
};

export default Game;
