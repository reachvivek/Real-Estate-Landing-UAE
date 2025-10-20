'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { mockBlogPosts } from '@/lib/data/mockData';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(mockBlogPosts.map(post => post.category)));

  // Filter posts
  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
              <BookOpen className='w-8 h-8' />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>UAE Real Estate Insights</h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Expert analysis, market trends, and guides for buying, selling, and investing in UAE property
            </p>
          </div>

          {/* Search and Filters */}
          <div className='mb-12'>
            <div className='max-w-2xl mx-auto mb-8'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground' />
                <Input
                  placeholder='Search articles...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-10 h-12'
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className='flex flex-wrap gap-3 justify-center'>
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
                size='sm'
              >
                All Articles ({mockBlogPosts.length})
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size='sm'
                >
                  {category} ({mockBlogPosts.filter(p => p.category === category).length})
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className='mb-8 text-center text-muted-foreground'>
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </div>

          {/* Blog Grid */}
          {filteredPosts.length === 0 ? (
            <Card className='p-12 text-center'>
              <p className='text-lg font-semibold mb-2'>No articles found</p>
              <p className='text-sm text-muted-foreground mb-4'>
                Try adjusting your search or filters
              </p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}>
                Clear Filters
              </Button>
            </Card>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredPosts.map((post) => (
                <Card key={post.id} className='overflow-hidden hover:shadow-xl transition-shadow duration-300 border-muted/50 group'>
                  {/* Featured Image */}
                  <div className='relative h-56 overflow-hidden'>
                    <img
                      src={post.image}
                      alt={post.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute top-4 left-4'>
                      <Badge className='bg-foreground text-background'>
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className='p-6'>
                    {/* Title */}
                    <h3 className='text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className='text-muted-foreground mb-4 line-clamp-3 text-sm'>
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className='flex items-center justify-between text-sm text-muted-foreground mb-4 pb-4 border-b border-muted/50'>
                      <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='w-4 h-4' />
                          <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Clock className='w-4 h-4' />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className='flex items-center justify-between'>
                      <div className='text-sm'>
                        <span className='text-muted-foreground'>By </span>
                        <span className='font-medium'>{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant='ghost' size='sm' className='group/btn'>
                          Read More
                          <ArrowRight className='ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className='mt-20 bg-foreground text-background rounded-3xl p-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Stay Updated on UAE Real Estate
            </h2>
            <p className='text-lg text-background/80 mb-8 max-w-2xl mx-auto'>
              Get the latest market insights, investment tips, and property news delivered to your inbox
            </p>
            <div className='max-w-md mx-auto flex gap-3'>
              <Input
                placeholder='Enter your email'
                className='h-12 bg-background text-foreground'
              />
              <Button size='lg' variant='secondary' className='px-8 whitespace-nowrap'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
