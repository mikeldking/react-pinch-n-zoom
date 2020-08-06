import React, { useState } from 'react';
import { TransformContext } from './TransformContext';

export const TransformProvider = ({
  children,
  initialScale = 1,
}: {
  children: React.ReactNode;
  initialScale?: number;
}) => {
  const [scale, setScale] = useState<number>(initialScale);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  return (
    <TransformContext.Provider
      value={{ scale, offsetX, offsetY, setScale, setOffsetY, setOffsetX }}
    >
      {children}
    </TransformContext.Provider>
  );
};
