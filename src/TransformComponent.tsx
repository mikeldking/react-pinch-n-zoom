import React, { useRef, useEffect, CSSProperties } from 'react';
import { useTransform } from './TransformContext';
import { GestureEvent } from 'types';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}
/**
 * The component that takes the transform context and applies it
 */
export const TransformComponent = ({ children, style, className }: IProps) => {
  const {
    scale,
    setScale,
    offsetX,
    setOffsetX,
    offsetY,
    setOffsetY,
  } = useTransform();
  const elementRef = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ initialScale: number | null }>({
    initialScale: null,
  });

  useEffect(() => {
    const el = elementRef.current;

    // Wheel  handler, for chrome / safar
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (event.metaKey || event.ctrlKey) {
        // Your zoom/scale factor
        setScale(Math.max(0.2, scale - event.deltaY * 0.01));
      } else {
        // The trackpad is panning
        setOffsetX(offsetX - event.deltaX * 2);
        setOffsetY(offsetY - event.deltaY * 2);
      }
    };

    const onGestureStart = (event: GestureEvent) => {
      event.preventDefault();
      gesture.current.initialScale = scale;
    };

    const onGestureChange = (event: GestureEvent) => {
      event.preventDefault();

      setScale(gesture.current.initialScale! * event.scale);
    };

    const onGestureEnd = (event: GestureEvent) => {
      event.preventDefault();
      gesture.current.initialScale = null;
    };

    el?.addEventListener('wheel', onWheel, { passive: false });
    el?.addEventListener('gesturestart', onGestureStart as any, false);
    el?.addEventListener('gesturechange', onGestureChange as any, false);
    el?.addEventListener('gestureend', onGestureEnd as any, false);
    return () => {
      el?.removeEventListener('wheel', onWheel);
      el?.removeEventListener('gesturestart', onGestureStart as any);
      el?.removeEventListener('gesturechange', onGestureChange as any);
      el?.removeEventListener('gestureend', onGestureEnd as any);
    };
  }, [offsetX, offsetY, scale, setOffsetX, setOffsetY, setScale]);

  return (
    <div ref={elementRef} style={style} className={className}>
      <div
        style={{
          transform: `scale(${scale}) translateX(${offsetX}px) translateY(${offsetY}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
