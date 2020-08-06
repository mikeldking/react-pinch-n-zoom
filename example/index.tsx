import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  TransformComponent,
  TransformProvider,
  useTransform,
  TransformConsumer,
} from '../.';

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

ReactDOM.render(<App />, document.getElementById('root'));
