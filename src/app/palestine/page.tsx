import { EmbedForm } from "./form";

export default function PalestinePage() {
  return (
    <div className="block">
      <div className="py-24 sm:py-32 w-full prose dark:prose-invert">
        <h1>Palestine Widget</h1>
        <p>
          Embed the following code on your website to express your support. All
          fields are fully customizable, so feel free to modify them according
          to your preferences.
        </p>
        <blockquote>
          If you need any assistance during setup, just ping me up.
        </blockquote>
      </div>
      <EmbedForm />
    </div>
  );
}
