"use client";

import Loading from '@/components/common/loading';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export default function ClientProvider({ children }: { children: ReactNode }) {

  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}
