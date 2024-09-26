import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@styles/hds.scss';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Failed to find the root element.');
}
