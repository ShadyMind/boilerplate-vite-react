import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import { App } from './app';

export const renderApp = (mountElement: HTMLElement): Root => {
  const root = createRoot(mountElement);

  root.render(<App />);

  return root;
};
