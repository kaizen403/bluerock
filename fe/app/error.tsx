// app/error.js
"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  // Optionally log error to an external service
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4">Site Under Maintenance</h1>
      <p className="text-lg mb-6 text-center">
        Some pages are currently down for security reasons. We’ll be back
        shortly!
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
      >
        Retry
      </button>
    </div>
  );
}
