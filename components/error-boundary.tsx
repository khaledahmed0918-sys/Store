"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-background/50 backdrop-blur-sm rounded-[2.5rem] border border-primary/10 shadow-xl my-8">
          <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Component Error</h2>
          <p className="text-foreground/60 text-sm max-w-md text-center mb-6">
            {this.state.error?.message || "An unexpected error occurred in this section."}
          </p>
          <div className="flex gap-4">
            <button
              onClick={this.handleReset}
              className="px-6 py-2 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all duration-300"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 rounded-xl bg-primary/5 border border-primary/10 text-primary font-bold hover:bg-primary/10 transition-all duration-300"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
