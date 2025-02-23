"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();

  return (
    <p className="form-actions">
      <button type="reset" disabled={status.pending}>
        Reset
      </button>
      <button disabled={status.pending}>
        {status.pending ? "Submitting..." : "Create Post"}
      </button>
    </p>
  );
}
