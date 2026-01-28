import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer';

// Import all markdown files from the content/blog folder
const posts = import.meta.glob('./content/blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

interface PostData {
  title: string;
  date: string;
  description: string;
  content: string;
  readTime: number;
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function parsePost(content: string): PostData | null {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];
  const markdownContent = frontmatterMatch[2].trim();

  const getValue = (key: string): string => {
    const match = frontmatter.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?`, 'm'));
    return match ? match[1].trim() : '';
  };

  return {
    title: getValue('title'),
    date: getValue('date'),
    description: getValue('description'),
    content: markdownContent,
    readTime: calculateReadTime(markdownContent),
  };
}

function findPostBySlug(slug: string): PostData | null {
  for (const [filename, content] of Object.entries(posts)) {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const slugMatch = frontmatter.match(/^slug:\s*"?([^"\\n]*)"?/m);
      const postSlug = slugMatch ? slugMatch[1].trim() : filename.replace('./content/blog/', '').replace('.md', '');
      
      if (postSlug === slug) {
        return parsePost(content);
      }
    }
  }
  return null;
}

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? findPostBySlug(slug) : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] flex flex-col">
        <section className="relative pt-32 pb-20 bg-white overflow-hidden flex-1">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl font-bold mb-6 text-[#18181b]">
                Post not found
              </h1>
              <p className="text-[#71717a] mb-8">
                The post you're looking for doesn't exist.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#4C2A85] hover:text-[#412471] font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] flex flex-col">
      <section className="relative pt-32 pb-6 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#71717a] hover:text-[#4C2A85] font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-[#71717a] mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C2A85]">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-12 bg-white flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-zinc prose-headings:font-display prose-headings:text-[#18181b] prose-headings:mb-3 prose-headings:mt-8 prose-p:my-4 prose-a:text-[#4C2A85] prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPost;
