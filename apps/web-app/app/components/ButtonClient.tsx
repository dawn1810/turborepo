"use client";

import { Button } from "@repo/ui";

export function ButtonClient() {
  return (
    <Button
      variant="primary"
      onClick={() => console.log("Button clicked in Web App!")}
    >
      Shared Button from UI Package
    </Button>
  );
}
