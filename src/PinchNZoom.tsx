import React, { CSSProperties } from 'react';
import { TransformProvider } from './TransformProvider';
import { TransformComponent } from './TransformComponent';

/**
 * All in one component that provides pinch, zoom, and pan capabilities
 */
export const PinchNZoom = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <TransformProvider>
      <TransformComponent {...props}>{children}</TransformComponent>
    </TransformProvider>
  );
};
