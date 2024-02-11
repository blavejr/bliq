"use client";

import { Progress } from "flowbite-react";

export default function BProgressBar() {
  return (
    <Progress
      progress={50}
      textLabel="Flowbite"
      size="lg"
      labelProgress
      labelText
    />
  );
}
