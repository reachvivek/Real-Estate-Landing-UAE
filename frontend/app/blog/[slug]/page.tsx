'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockBlogPosts } from '@/lib/data/mockData';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
export const runtime = 'edge';



export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = mockBlogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = mockBlogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
          {/* Back Button */}
          <Link href='/blog'>
            <Button variant='ghost' className='mb-6'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Blog
            </Button>
          </Link>

          {/* Featured Image */}
          <div className='relative h-96 rounded-2xl overflow-hidden mb-8'>
            <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
            <div className='absolute top-6 left-6'>
              <Badge className='bg-foreground text-background text-sm px-4 py-1'>
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Article Header */}
          <div className='mb-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>{post.title}</h1>

            {/* Meta Info */}
            <div className='flex flex-wrap gap-6 text-muted-foreground mb-6'>
              <div className='flex items-center gap-2'>
                <User className='w-5 h-5' />
                <span>{post.author}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Calendar className='w-5 h-5' />
                <span>
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5' />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className='flex items-center gap-3 pb-6 border-b border-muted'>
              <span className='text-sm font-semibold'>Share:</span>
              <Button size='sm' variant='outline'>
                <Facebook className='w-4 h-4 mr-2' />
                Facebook
              </Button>
              <Button size='sm' variant='outline'>
                <Twitter className='w-4 h-4 mr-2' />
                Twitter
              </Button>
              <Button size='sm' variant='outline'>
                <Linkedin className='w-4 h-4 mr-2' />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <article className='prose prose-lg max-w-none mb-12'>
            <p className='text-xl text-muted-foreground leading-relaxed mb-6'>
              {post.excerpt}
            </p>

            {/* Sample Content - In real app, this would come from CMS */}
            <h2 className='text-3xl font-bold mt-8 mb-4'>Market Overview</h2>
            <p>
              The UAE real estate market continues to show remarkable resilience and growth in early 2025.
              Dubai, in particular, has emerged as a global hub for property investment, attracting buyers
              from across the world with its tax-free environment, world-class infrastructure, and
              exceptional quality of life.
            </p>

            <p>
              Recent data indicates that property prices have seen steady appreciation across prime areas
              including Dubai Marina, Downtown Dubai, and Palm Jumeirah. The rental market has also
              strengthened, with yields remaining attractive for investors.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4'>Key Trends</h2>
            <p>
              Several key trends are shaping the UAE property market in 2025:
            </p>

            <ul className='list-disc pl-6 space-y-2 my-4'>
              <li>Increased demand for luxury waterfront properties</li>
              <li>Growing interest in sustainable and smart home developments</li>
              <li>Rise in off-plan property investments</li>
              <li>Strong performance in villa communities like Arabian Ranches and Dubai Hills</li>
              <li>Continued appeal among international buyers and expats</li>
            </ul>

            <h2 className='text-3xl font-bold mt-8 mb-4'>Investment Opportunities</h2>
            <p>
              For investors looking to enter the UAE property market, there are numerous opportunities
              across different price points and property types. Areas like Business Bay and Jumeirah
              Village Circle offer excellent entry points for first-time investors, while established
              communities continue to deliver strong returns.
            </p>

            <p>
              The implementation of long-term visa programs and golden visas has further strengthened
              the market, providing additional security and benefits for property owners.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4'>Expert Recommendations</h2>
            <p>
              Industry experts recommend conducting thorough due diligence, working with reputable
              real estate agents, and considering both rental yield and capital appreciation potential
              when making investment decisions. The UAE's transparent regulatory framework and
              established legal protections make it an attractive destination for property investment.
            </p>
          </article>

          {/* Author Card */}
          <Card className='mb-12'>
            <CardContent className='p-6'>
              <div className='flex items-center gap-4'>
                <div className='w-20 h-20 rounded-full bg-muted flex items-center justify-center'>
                  <User className='w-10 h-10 text-muted-foreground' />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-1'>About {post.author}</h3>
                  <p className='text-muted-foreground'>
                    {post.author} is a senior real estate expert specializing in the UAE property market
                    with over 10 years of experience helping clients find their dream homes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className='text-3xl font-bold mb-6'>Related Articles</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className='overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                      <div className='relative h-48'>
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className='w-full h-full object-cover'
                        />
                        <Badge className='absolute top-4 left-4 bg-foreground text-background'>
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <CardContent className='p-4'>
                        <h3 className='text-lg font-bold mb-2 line-clamp-2'>
                          {relatedPost.title}
                        </h3>
                        <p className='text-sm text-muted-foreground line-clamp-2'>
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
