import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from './theme';

import PinchNZoom, {
  TransformComponent,
  TransformProvider,
  TransformConsumer,
} from '../.';

const liveWrapStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  border: '1px solid gray',
  borderRadius: '10px',
  overflow: 'hidden',
};

const App = () => {
  return (
    <main style={{ width: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
      <h1>react-pinch-n-zoom</h1>
      <section>
        <h2>Simple Wrapper</h2>
        <p>
          If you simply want to display an image or component in a window, you
          can use the default export to wrap any component to enable pinch to
          zoom and panning.
        </p>
        <div style={liveWrapStyle}>
          <LiveProvider
            scope={{ PinchNZoom }}
            theme={theme as any}
            code="<PinchNZoom
                  style={{
                    width: '100%',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
          <img
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
            alt='react-logo'
            height='400'
          />
        </PinchNZoom>"
          >
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </section>
      <section>
        <h2>Full Control via Transform Context</h2>
        <p>
          In order to control the scale and panning, use the context provider
          and consumers in conjunction with the TransformComponent.
        </p>
        <div style={liveWrapStyle}>
          <LiveProvider
            scope={{ TransformComponent, TransformProvider, TransformConsumer }}
            theme={theme as any}
            code="<TransformProvider>
        <TransformComponent
          style={{
            width: '100%',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
            alt='react-logo'
            height='400'
          />
        </TransformComponent>
        <TransformConsumer>
          {({
            scale,
            setScale,
            offsetX,
            setOffsetX,
            offsetY,
            setOffsetY,
            minScale,
            maxScale,
          }) => {
            return (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <label>
                  Scale
                  <input
                    type='range'
                    value={scale}
                    min={minScale}
                    max={maxScale}
                    step='0.05'
                    onChange={e => {
                      setScale(parseFloat(e.currentTarget.value));
                    }}
                  />
                </label>
                <label>
                  Offset X
                  <input
                    type='number'
                    value={offsetX}
                    step='10'
                    onChange={e => {
                      setOffsetX(parseFloat(e.currentTarget.value));
                    }}
                  />
                </label>
                <label>
                  Offset Y
                  <input
                    type='number'
                    value={offsetY}
                    step='10'
                    onChange={e => {
                      setOffsetY(parseFloat(e.currentTarget.value));
                    }}
                  />
                </label>
              </div>
            );
          }}
        </TransformConsumer>
      </TransformProvider>"
          >
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </section>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
