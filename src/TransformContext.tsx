import React, { useContext } from 'react';

export interface ITransformContext {
  scale: number;
  minScale: number;
  maxScale: number;
  offsetX: number;
  offsetY: number;
  setScale: (scale: number) => void;
  setOffsetX: (offsetX: number) => void;
  setOffsetY: (offsetY: number) => void;
}

export const TransformContext = React.createContext<ITransformContext>({
  scale: 1,
  minScale: 0.2,
  maxScale: Infinity,
  offsetX: 0,
  offsetY: 0,
  setScale: () => {},
  setOffsetX: () => {},
  setOffsetY: () => {},
});

TransformContext.displayName = 'TransformContext';

/**
 * Hook to provide the transform context
 */
export const useTransform = () => useContext(TransformContext);

export const TransformConsumer = TransformContext.Consumer;
