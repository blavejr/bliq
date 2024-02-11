import { TextInput } from "flowbite-react";

interface BTextInputProps {
  type: string;
  placeholder: string;
  required?: boolean;
  shadow?: boolean;
  id?: string;
}

export default function BTextInput({
  type = "text",
  placeholder = "Placeholder",
  required = false,
  shadow = false,
  id = "b-text-input",
}: BTextInputProps): React.ReactElement {
  return (
    <TextInput
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      shadow={shadow}
    />
  );
}
