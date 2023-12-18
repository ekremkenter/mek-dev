import { redirect } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) redirect("/blog");
  return { title: post.title, description: post.description };
};

export default function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    redirect("/blog");
  }

  const toc = post.toc ? <TableOfContents headings={post.headings} /> : null;
  return (
    <div className="grid grid-cols-3">
      <article className="prose dark:prose-invert col-span-2">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.date} className="text-gray-500">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          {/*<Link*/}
          {/*  href={post.category.href}*/}
          {/*  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"*/}
          {/*>*/}
          {/*  {post.category.title}*/}
          {/*</Link>*/}
        </div>
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      {toc}
    </div>
  );
}

function TableOfContents({ headings }: { headings: any }) {
  return (
    <div className="sticky top-6 hidden space-y-2 font-sans xl:block">
      <h3 className="text-sm uppercase text-gray-500">On this page</h3>
      <div>
        {headings.map(
          (heading: { slug: string | undefined; level: string; text: any }) => {
            return (
              <div key={heading.slug}>
                <a
                  className="text-gray-400 data-[level=two]:pl-2 data-[level=three]:pl-4"
                  data-level={heading.level}
                  href={heading.slug}
                >
                  {heading.text}
                </a>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
