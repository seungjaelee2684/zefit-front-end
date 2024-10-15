"use client"; // 클라이언트 컴포넌트로 설정

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}
