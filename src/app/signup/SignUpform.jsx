
// "Sign Up" form that looks like the provided "Login" design.
// It will POST to your signup endpoint but visually match the provided image.
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Crown } from "lucide-react";

// Updated schema to match the design
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    // TODO: Implement sign-up logic
    console.log("Sign Up values:", values);
    // For demonstration, you might show a toast message
    // import { useToast } from "@/hooks/use-toast";
    // const { toast } = useToast();
    // toast({ title: "Sign Up Submitted", description: "Check console for values." });
  }

  return (
    <div className="w-full max-w-sm space-y-8">
      <div className="text-left">
        <div className="flex items-center justify-start mb-1">
          <Crown className="w-10 h-10 text-foreground mr-2" />
          <h1 className="text-4xl font-bold text-foreground">Book Hub</h1>
        </div>
        <p className="text-foreground/80">Welcome to our App</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="first name"
                      {...field}
                      className="bg-white text-foreground border-input placeholder:text-muted-foreground rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="last name"
                      {...field}
                      className="bg-white text-foreground border-input placeholder:text-muted-foreground rounded-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    {...field}
                    className="bg-white text-foreground border-input placeholder:text-muted-foreground rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                    className="bg-white text-foreground border-input placeholder:text-muted-foreground rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md py-3 text-base">
            Create account
          </Button>
        </form>
      </Form>
    </div>
  );
}
