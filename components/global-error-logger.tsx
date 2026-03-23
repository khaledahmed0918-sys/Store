"use client";

import React, { useEffect } from "react";

export function GlobalErrorLogger() {
  useEffect(() => {
    console.log("GlobalErrorLogger mounted");
    const errorHandler = (event: ErrorEvent) => {
      console.error("Global Error Caught:", event.error);
    };

    const unhandledRejectionHandler = (event: PromiseRejectionEvent) => {
      console.error("Unhandled Promise Rejection Caught:", event.reason);
    };

    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", unhandledRejectionHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
      window.removeEventListener("unhandledrejection", unhandledRejectionHandler);
    };
  }, []);

  return null;
}
