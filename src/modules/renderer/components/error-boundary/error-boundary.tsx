import type { ReactNode } from 'react';
import React from 'react';
import { } from 'react-router-dom';
import { UnexpectedError } from '~/core/pages';

export interface ErrorBoundaryProps {
  children?: ReactNode | undefined;
};

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
    // this.props.onError(error, errorInfo);
  }
  override render() {
    if (this.state.error) {
      return (
        <UnexpectedError />
      );
    }

    return this.props.children;
  }
}
