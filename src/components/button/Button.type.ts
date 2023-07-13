export interface ButtonStyles {
  color?: string;

  size?: "small" | "medium" | "large";
  label?: string;
  // use?: "basic" | "error" | "warn" | "disable" | "secondary";
  use?: string;
  bgcolor?: string;

  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
