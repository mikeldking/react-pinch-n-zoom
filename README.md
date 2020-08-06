# react-pinch-n-zoom

Trackpad based pinch, zoom, and pan support. Ideal for creating interactive visualizations.

## How to use

If you don't need direct access to the transform values, you can simply wrap a component in the `PinchNZoom` component.

```typescript
import PinchNZoom from 'react-pinch-n-zoom';

const App = () => {
  return (
    <PinchNZoom
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        alt="react-logo"
        height="100"
      />
    </PinchNZoom>
  );
};
```

To get access to the transform values and setters, use the context providers and consumers. You can also use the `useTransform` hook to grab the transform context values in child components.

```typescript
import { TransformComponent, TransformProvider, TransformConsumer } from '../.';

const App = () => {
  return (
    <TransformProvider>
      <TransformComponent
        style={{
          width: '100%',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dotted gray',
          borderRadius: 10,
          marginTop: 20,
          overflow: 'hidden',
        }}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
          height="100"
        />
      </TransformComponent>
      <TransformConsumer>
        {({ scale, setScale, offsetX, setOffsetX, offsetY, setOffsetY }) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <label>
                Scale
                <input
                  type="range"
                  value={scale}
                  min="0.2"
                  max="3"
                  step="0.05"
                  onChange={e => {
                    setScale(parseFloat(e.currentTarget.value));
                  }}
                />
              </label>
              <label>
                Offset X
                <input
                  type="number"
                  value={offsetX}
                  step="10"
                  onChange={e => {
                    setOffsetX(parseFloat(e.currentTarget.value));
                  }}
                />
              </label>
              <label>
                Offset Y
                <input
                  type="number"
                  value={offsetY}
                  step="10"
                  onChange={e => {
                    setOffsetY(parseFloat(e.currentTarget.value));
                  }}
                />
              </label>
            </div>
          );
        }}
      </TransformConsumer>
    </TransformProvider>
  );
};
```
