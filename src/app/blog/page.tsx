import { allPosts, Post } from "contentlayer/generated";
import SectionTitle from "@/components/section-title";
import { compareDesc, format, parseISO } from "date-fns";

function PostCard(post: Post) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between bg-card/70 hover:bg-card/90 p-3 shadow-card rounded-lg ">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-gray-500">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        {/*<a*/}
        {/*  href={post.category.href}*/}
        {/*  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-opacity-75"*/}
        {/*>*/}
        {/*  {post.category.title}*/}
        {/*</a>*/}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-opacity-60">
          <a href={post.url}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6">
          {post.description}
        </p>
      </div>
    </article>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      <SectionTitle
        title="Blog"
        subtitle="Thoughts on software development, productivity, and life."
      />
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
