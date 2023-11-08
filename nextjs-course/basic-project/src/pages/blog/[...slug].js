import { useRouter } from "next/router";

export default function BlogPostPage({ post }) {
  const router = useRouter();

  // get the slug from the URL and log it to the console
  console.log(router.query.slug);

  return (
    <div>
      <h1>The Blog Posts</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
    </div>
  );
}
