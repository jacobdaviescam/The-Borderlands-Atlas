import PageLayout from '@/app/components/PageLayout';
import BlogPostCard from '@/app/components/BlogPostCard';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageLayout 
      title="Essays & Thoughts" 
      subtitle="Explorations from the borderlands"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))
        ) : (
          <div className="text-center py-16 text-text-secondary">
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="mx-auto mb-6 text-brass"
            >
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-xl">
              Essays are being compiled. Check back soon for explorations and musings.
            </p>
            <p className="mt-4 text-base">
              (Move your markdown files from Obsidian to <code className="bg-parchment-dark px-2 py-1 rounded">content/blog/</code>)
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

