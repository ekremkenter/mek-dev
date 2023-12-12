import posts from "@/app/blog/posts";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";

export default function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  console.log(slug);
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    redirect("/blog");
  }
  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        {/*<Link*/}
        {/*  href={post.category.href}*/}
        {/*  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"*/}
        {/*>*/}
        {/*  {post.category.title}*/}
        {/*</Link>*/}
      </div>
      <p>{post.description}</p>
    </article>
  );
}
