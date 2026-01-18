import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Footer from './Footer';

interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  readTime: number;
}

// Import all markdown files from the content/blog folder
const posts = import.meta.glob('./content/blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const textContent = content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
  const wordCount = textContent.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function parsePostMeta(content: string, filename: string): PostMeta | null {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];
  const getValue = (key: string): string => {
    const match = frontmatter.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?`, 'm'));
    return match ? match[1].trim() : '';
  };

  const slug = getValue('slug') || filename.replace('./content/blog/', '').replace('.md', '');

  return {
    title: getValue('title'),
    date: getValue('date'),
    description: getValue('description'),
    slug,
    readTime: calculateReadTime(content),
  };
}

function Blog() {
  const postList: PostMeta[] = Object.entries(posts)
    .map(([filename, content]) => parsePostMeta(content, filename))
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] flex flex-col">
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4C2A85]">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-[#71717a] leading-relaxed">
              Announcements and updates from the ERC-8004 community
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafafa] flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {postList.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#e4e4e7] p-12 text-center card-shadow">
                <p className="text-[#71717a] text-lg">No posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {postList.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block bg-white rounded-2xl border border-[#e4e4e7] p-8 card-shadow hover:border-[#4C2A85] transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4 text-sm text-[#71717a] mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-[#18181b] mb-3 group-hover:text-[#4C2A85] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#71717a] leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-[#4C2A85]">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
