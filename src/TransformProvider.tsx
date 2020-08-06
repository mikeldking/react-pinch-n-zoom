import React, { useState } from 'react';
import { TransformContext } from './TransformContext';

interface IProps {
  children: React.ReactNode;
  initialScale?: number;
  minScale?: number;
  maxScale?: number;
}
export const TransformProvider = ({
  children,
  initialScale = 1,
  minScale = 0.2,
  maxScale = Infinity,
}: IProps) => {
  const [scale, setScale] = useState<number>(initialScale);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  return (
    <TransformContext.Provider
      value={{
        scale,
        offsetX,
        offsetY,
        setScale,
        setOffsetY,
        setOffsetX,
        minScale,
        maxScale,
      }}
    >
      {children}
    </TransformContext.Provider>
  );
};
