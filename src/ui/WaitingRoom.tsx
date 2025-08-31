import React from 'react';
import Card from './Card';
import { LogoStreamberry } from './brand/LogoStreamberry';

type Props = {
  pin: string;
  nickname: string;
};

const WaitingRoom: React.FC<Props> = ({ pin, nickname }) => {
  return (
    <div className="w-full max-w-md mx-auto text-center">
      <Card className="p-8">
        <h1 className="text-4xl font-bold text-white">You're in!</h1>
        <p className="mt-2 text-white/80">See your nickname on the screen?</p>

        <div className="py-8">
          <div className="inline-block px-6 py-4 bg-white/10 rounded-lg">
            <div className="text-4xl font-bold tracking-widest text-white">{nickname}</div>
          </div>
        </div>

        <p className="text-white/60">Waiting for the host to start the game...</p>
      </Card>

      <div className="flex items-center justify-center mt-8 space-x-4 text-white/50">
        <LogoStreamberry className="h-6" />
        <div className="text-lg font-semibold">|</div>
        <div className="text-2xl font-bold tracking-widest">{pin}</div>
      </div>
    </div>
  );
};

export default WaitingRoom;
