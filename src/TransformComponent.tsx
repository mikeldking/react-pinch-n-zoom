import React, { useRef, useEffect, CSSProperties } from 'react';
import { useTransform } from './TransformContext';

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

  useEffect(() => {
    const el = elementRef.current;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.ctrlKey) {
        // Your zoom/scale factor
        setScale(Math.max(0.2, scale - e.deltaY * 0.01));
      } else {
        // The trackpad is panning
        setOffsetX(offsetX - e.deltaX * 2);
        setOffsetY(offsetY - e.deltaY * 2);
      }
    };
    el?.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el?.removeEventListener('wheel', onWheel);
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
