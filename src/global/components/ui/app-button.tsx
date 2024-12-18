import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface AppButtonProps extends ButtonProps {
  loading?: boolean;
}

export const AppButton = ({ children, loading, ...props }: AppButtonProps) => {
  return (
    <Button
      {...props}
      disabled={props.disabled || loading}
      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
    >
      {children}
    </Button>
  );
};
