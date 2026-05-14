import { Toaster } from "sonner";

type SonnerProps = React.ComponentProps<typeof Toaster>;

const Sonner = ({ ...props }: SonnerProps) => {
  return <Toaster richColors position="top-right" {...props} />;
};

export { Sonner as Toaster };
