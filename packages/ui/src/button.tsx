import { ReactNode } from "react";
import MuiButton from "@mui/material/Button";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <MuiButton
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </MuiButton>
  );
};
