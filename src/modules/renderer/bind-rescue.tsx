import type { Root } from 'react-dom/client';
import React from 'react';
import { App } from './app';

export const bindRescue = (root: Root) => {
  if (process.env.NODE_ENV !== 'production') {
    document.addEventListener('keyup', (ev) => {
      if (ev.altKey && ev.metaKey && ev.code === 'keyR') {
        root.unmount();
        root.render(<App />);
      }
    })
  }

  return root;
}