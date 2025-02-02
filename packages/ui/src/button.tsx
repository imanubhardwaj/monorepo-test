import MuiButton, { ButtonProps } from "@mui/material/Button";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MuiButton
      {...props}
    >
      {children}
    </MuiButton>
  );
};
