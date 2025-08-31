import React from 'react';
import { useNavigate } from 'react-router-dom';
import JoinForm from '../ui/JoinForm';

const JoinPage: React.FC = () => {
  const navigate = useNavigate();

  const handleJoin = (pin: string, nickname: string) => {
    console.log(`Attempting to join session ${pin} as ${nickname}`);
    // In a real app, you'd call an API/service here to validate the PIN
    // and then navigate to the player lobby.
    // For now, we'll simulate a successful join and navigate.
    navigate(`/play/${pin}`);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <JoinForm onJoin={handleJoin} />
    </div>
  );
};

export default JoinPage;
