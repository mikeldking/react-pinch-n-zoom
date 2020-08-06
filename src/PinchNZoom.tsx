import React, { CSSProperties } from 'react';
import { TransformProvider } from './TransformProvider';
import { TransformComponent } from './TransformComponent';

export const PinchNZoom = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <TransformProvider>
      <TransformComponent style={style}>{children}</TransformComponent>
    </TransformProvider>
  );
};
