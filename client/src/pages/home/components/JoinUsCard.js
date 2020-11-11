import React from 'react';
import {
  JoinCard, JoinCardP, JoinCardTitle, JoinLink,
} from '../style';

export default function JoinUsCard() {
  return (
    <JoinCard>
      <div style={{ marginRight: '1rem' }}>
        <JoinCardTitle> New here ? join us... </JoinCardTitle>
        <JoinCardP>
          Find what you can&apos;t find anywhere.
        </JoinCardP>
      </div>
      <div>
        <JoinLink> Create an account </JoinLink>
      </div>
    </JoinCard>
  );
}
