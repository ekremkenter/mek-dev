"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Banner from "@/components/banner";

const formSchema = z.object({
  title: z.string().min(10).max(50),
  description: z.string().min(20).max(200),
  link: z.string().min(2).max(150),
});

const defaultValues = {
  title: "Free Palestine 🇵🇸",
  description:
    "Stand for humanity! Together, we can put an end to the Gaza genocide. Let’s unite under hashtag #SAVEGAZA and ensure that every life in this region has access to the most basic necessities.",
  link: "https://twitter.com/search?q=%23PalestineLivesMatter",
};

export function EmbedForm() {
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(script);
    toast({
      title: "Copied to clipboard",
      description: "You can now paste it to your website",
    });
  }

  const values = form.watch();

  const script = `<script async defer src="https://mek.dev/palestine/widget.js" data-config='${JSON.stringify(
    values,
  )}'/>`;

  return (
    <div className="grid-cols-2 gap-6 lg:grid">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder={defaultValues.title} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={defaultValues.description}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder={defaultValues.link} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Generated Code</FormLabel>
            <FormControl>
              <div
                className="mt-2 text-xs rounded-md bg-slate-800 p-4 prose-code cursor-copy hover:bg-slate-700 transition-colors"
                onClick={copyToClipboard}
              >
                {`${script}`}
              </div>
            </FormControl>
            <FormDescription>
              Copy and paste this code into your website
            </FormDescription>
            <FormMessage />
          </FormItem>
        </form>
      </Form>
      <div className="mt-8 lg:mt-0 h-full bg-card">
        <Banner {...values} />
        <div className="grid place-content-center">
          <p>Your Website</p>
        </div>
      </div>
    </div>
  );
}
