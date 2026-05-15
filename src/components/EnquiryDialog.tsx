import { useState } from "react";
import { Leaf } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EnquiryDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Enquiry received! Our team will reach out within 24 hours.");
      onOpenChange(false);
      (event.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90dvh,100%)] w-[calc(100%-1.5rem)] max-w-lg overflow-y-auto sm:w-full">
        <DialogHeader>
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full gradient-leaf">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <DialogTitle className="text-2xl">Requirement Enquiry</DialogTitle>
          <DialogDescription>Share your requirements — we'll respond with a custom quote within 24 hours.</DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
          </div>

          <div>
            <Label htmlFor="size">Bag Size & Quantity</Label>
            <Input id="size" placeholder="e.g. 11x14, 5000 pcs" required />
          </div>

          <div>
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg" rows={3} placeholder="Any specific requirements..." />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit Enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;
