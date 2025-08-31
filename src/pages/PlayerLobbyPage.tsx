import React from 'react';
import { useParams } from 'react-router-dom';
import WaitingRoom from '../ui/WaitingRoom';

const PlayerLobbyPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();

  // In a real app, the player's nickname would be retrieved from a store
  // or passed via navigation state after the join form.
  // We'll use a placeholder for now.
  const nickname = 'Player1';

  return (
    <div className="flex items-center justify-center h-full">
      <WaitingRoom pin={sessionId ?? '...'} nickname={nickname} />
    </div>
  );
};

export default PlayerLobbyPage;
