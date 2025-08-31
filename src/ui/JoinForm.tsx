import React, { useState } from 'react';
import NumberField from './NumberField';
import TextField from './TextField';
import Button from './Button';
import Card from './Card';

type Props = {
  onJoin: (pin: string, nickname: string) => void;
  isLoading?: boolean;
  error?: string;
};

const JoinForm: React.FC<Props> = ({ onJoin, isLoading, error }) => {
  const [pin, setPin] = useState('');
  const [nickname, setNickname] = useState('');

  const canSubmit = pin.length === 6 && nickname.trim().length >= 2 && !isLoading;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      onJoin(pin, nickname.trim());
    }
  };

  return (
    <Card className="w-full max-w-sm p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center">Join a Game</h2>
        <div className="mt-6 space-y-4">
          <NumberField
            label="Game PIN"
            value={pin}
            onChange={(v) => setPin(v?.toString() ?? '')}
            maxLength={6}
            placeholder="123456"
          />
          <TextField
            label="Nickname"
            value={nickname}
            onChange={setNickname}
            placeholder="Your name"
          />
        </div>
        {error && <div className="mt-4 text-sm text-center text-red-400">{error}</div>}
        <div className="mt-6">
          <Button type="submit" variant="primary" className="w-full" disabled={!canSubmit}>
            {isLoading ? 'Joining...' : 'Join Game'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default JoinForm;
