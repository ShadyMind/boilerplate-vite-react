
import type { FC } from 'react';
import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ErrorBoundary } from './components/error-boundary';
import './palette.css';
import './init.css';

export const App: FC = () => (
    <StrictMode>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </StrictMode>
);