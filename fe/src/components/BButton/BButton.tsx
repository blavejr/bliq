import React from "react";
import { Button } from "flowbite-react";

interface BButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function BButton({ text, children, onClick }: BButtonProps): React.ReactElement {
  return (
    <div onClick={onClick}>
      <Button>{children || text}</Button>
    </div>
  );
}
