import { SkeletonProps, Skeleton } from "@mui/material";

export const AppSkeleton = ({
  isLoading,
  variant = "rounded",
  children,
  ...props
}: {
  isLoading?: boolean;
} & SkeletonProps) => {
  return isLoading ? (
    <Skeleton variant={variant} {...props}>
      {children}
    </Skeleton>
  ) : (
    children
  );
};
