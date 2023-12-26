import { ImageResponse } from "next/og";
import { allPosts } from "contentlayer/generated";
import { redirect } from "next/navigation";
import config from "@/util/config";

// Route segment config
export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) redirect("/blog");

  return [
    {
      id: "og",
      alt: post.title,
      size,
      contentType: "image/png",
    },
  ];
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) redirect("/blog");
  const { title, description } = post;
  const fullUrl = `${config.url}/blog/${post._raw.flattenedPath}`;

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "rgb(23,23,23) linear-gradient(180deg, rgba(23,23,23,1) 0%, rgba(30,27,75,1) 100%)",
          width: "100%",
          height: "100%",
          color: "white",
          fontSize: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.heroImage ? (
          <img
            alt={`Background`}
            src={`${config.url}/${post.heroImage}`}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            right: "1rem",
            background: "rgba(0,0,0,0.7)",
            padding: "2rem",
            maxWidth: "90%",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              paddingBottom: "2rem",
            }}
          >
            {title}
          </div>
          <div>{description}</div>
          <div
            style={{
              paddingTop: "2rem",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {fullUrl}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
