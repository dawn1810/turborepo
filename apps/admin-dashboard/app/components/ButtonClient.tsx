"use client";

import { Button } from "@repo/ui";

export function ButtonClient() {
  return (
    <Button
      variant="primary"
      onClick={() => console.log("Button clicked in Admin Dashboard!")}
    >
      Shared Button from UI Package
    </Button>
  );
}
