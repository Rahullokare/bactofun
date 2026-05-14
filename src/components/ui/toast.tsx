import * as React from "react";

type ToastProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type ToastActionElement = React.ReactElement;

const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const ToastViewport = () => null;
const Toast = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const ToastTitle = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const ToastDescription = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const ToastClose = () => null;
const ToastAction = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  type ToastProps,
  type ToastActionElement,
};
