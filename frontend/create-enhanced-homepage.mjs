import fs from 'fs';

const content = `'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockProperties, mockAgents, mockBlogPosts, mockAnalytics } from '@/lib/data/mockData';
import {
  Search, MapPin, Bed, Bath, Square, Shield, Users, Award, Clock,
  CheckCircle2, Globe, TrendingUp, MessageSquare, ArrowRight, Star,
  Building2, Home, Briefcase, Mail, Phone
} from 'lucide-react';

export default function HomePage() {
  const [searchType, setSearchType] = useState('rent');

  // Filter properties by tags
  const recentlyAdded = mockProperties.filter(p => p.tags?.includes('recently-added')).slice(0, 8);
  const expatFriendly = mockProperties.filter(p => p.tags?.includes('expat-friendly')).slice(0, 4);
  const budgetFriendly = mockProperties.filter(p => p.tags?.includes('budget')).slice(0, 4);
  const luxuryProperties = mockProperties.filter(p => p.tags?.includes('luxury')).slice(0, 4);
  const topAgents = mockAgents.slice(0, 3);
  const latestBlogs = mockBlogPosts.slice(0, 3);

  const PropertyCard = ({ property }: { property: any }) => {
    const priceStr = new Intl.NumberFormat('en-US').format(property.price);
    return (
      <Card className='overflow-hidden hover:shadow-lg transition-shadow duration-300 border-muted/50'>
        <div className='relative h-64'>
          <img src={property.images[0]} alt={property.title} className='w-full h-full object-cover' />
          <div className='absolute top-4 left-4 flex gap-2'>
            <Badge className='bg-primary text-primary-foreground'>
              For {property.type === 'sale' ? 'Sale' : 'Rent'}
            </Badge>
            {property.verified && (
              <Badge className='bg-foreground text-background'>
                <CheckCircle2 className='w-3 h-3 mr-1' />
                Verified
              </Badge>
            )}
          </div>
        </div>
        <CardHeader>
          <CardTitle className='text-xl line-clamp-1'>{property.title}</CardTitle>
          <CardDescription className='flex items-center gap-1 text-sm'>
            <MapPin className='w-4 h-4' />
            {property.address}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-foreground mb-4'>
            $\${priceStr}
            {property.type === 'rent' && <span className='text-base font-normal text-muted-foreground'>/month</span>}
          </div>
          <div className='flex items-center gap-4 text-sm text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <Bed className='w-4 h-4' />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className='flex items-center gap-1'>
              <Bath className='w-4 h-4' />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className='flex items-center gap-1'>
              <Square className='w-4 h-4' />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className='pt-4 border-t border-muted/50'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
              <img src={property.agent.avatar} alt={property.agent.name} className='w-8 h-8 rounded-full' />
              <span className='text-sm font-medium'>{property.agent.name}</span>
            </div>
            <Link href={\`/property/\${property.id}\`}>
              <Button variant='outline' size='sm'>View Details</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-20 pb-32 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative rounded-3xl overflow-hidden bg-card shadow-xl'>
            <div className='relative h-96 md:h-[500px]'>
              <img src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200' alt='Real Estate Banner' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/40' />
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center px-4'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                Easy way to find a perfect property
              </h1>
              <p className='text-lg md:text-xl text-white/90 max-w-2xl'>
                We provide a complete service for the sale, purchase or rental of real estate.
              </p>
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
              <div className='bg-white dark:bg-card rounded-2xl shadow-2xl p-6'>
                <Tabs defaultValue='rent' onValueChange={setSearchType}>
                  <TabsList className='grid w-full max-w-md grid-cols-3 mb-6'>
                    <TabsTrigger value='rent'>Rent</TabsTrigger>
                    <TabsTrigger value='buy'>Buy</TabsTrigger>
                    <TabsTrigger value='sell'>Sell</TabsTrigger>
                  </TabsList>
                  <TabsContent value={searchType}>
                    <div className='grid grid-cols-1 md:grid-cols-10 gap-4 items-end'>
                      <div className='md:col-span-3'>
                        <label className='text-sm font-medium mb-2 block'>Location</label>
                        <Select>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Select Your City' /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value='ny'>New York</SelectItem>
                            <SelectItem value='la'>Los Angeles</SelectItem>
                            <SelectItem value='chicago'>Chicago</SelectItem>
                            <SelectItem value='miami'>Miami</SelectItem>
                            <SelectItem value='sf'>San Francisco</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='md:col-span-3'>
                        <label className='text-sm font-medium mb-2 block'>Property Type</label>
                        <Select>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Choose Property Type' /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value='apartment'>Apartment</SelectItem>
                            <SelectItem value='house'>House</SelectItem>
                            <SelectItem value='condo'>Condo</SelectItem>
                            <SelectItem value='townhome'>Townhome</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='md:col-span-3'>
                        <label className='text-sm font-medium mb-2 block'>Price Range</label>
                        <Select>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Choose Price Range' /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value='0-2000'>Up to $2,000/mo</SelectItem>
                            <SelectItem value='2000-4000'>$2,000 - $4,000/mo</SelectItem>
                            <SelectItem value='500k-1m'>$500K - $1M</SelectItem>
                            <SelectItem value='1m-plus'>$1M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='md:col-span-1'>
                        <Button className='w-full h-12'><Search className='w-5 h-5' /></Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Added - 2 Rows */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>Recently Added</h2>
            <p className='text-lg text-muted-foreground'>Explore our newest property listings</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {recentlyAdded.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link href='/properties'>
              <Button size='lg' variant='outline' className='px-8'>
                View All Properties
                <ArrowRight className='ml-2 w-4 h-4' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose PRESTIGE */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>Why Choose PRESTIGE</h2>
            <p className='text-lg text-muted-foreground'>Experience the difference with our premium services</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                <CheckCircle2 className='w-8 h-8' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>100% Verified Listings</h3>
              <p className='text-muted-foreground'>Every property is personally inspected and verified by our team</p>
            </div>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                <Shield className='w-8 h-8' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Legal Protection</h3>
              <p className='text-muted-foreground'>Complete legal assistance and secure transaction process</p>
            </div>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                <Users className='w-8 h-8' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Expert Agents</h3>
              <p className='text-muted-foreground'>Work with certified professionals with proven track records</p>
            </div>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                <TrendingUp className='w-8 h-8' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Smart Matching</h3>
              <p className='text-muted-foreground'>Advanced algorithms match you with perfect properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expat-Friendly Properties */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-12'>
            <div className='flex items-center gap-3 mb-3'>
              <Globe className='w-8 h-8' />
              <h2 className='text-3xl md:text-4xl font-bold'>Expat-Friendly Properties</h2>
            </div>
            <p className='text-lg text-muted-foreground'>International buyer support with relocation assistance</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {expatFriendly.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget Friendly */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-12'>
            <div className='flex items-center gap-3 mb-3'>
              <Home className='w-8 h-8' />
              <h2 className='text-3xl md:text-4xl font-bold'>Budget Friendly</h2>
            </div>
            <p className='text-lg text-muted-foreground'>Quality homes at affordable prices</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {budgetFriendly.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium & Luxury */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-12'>
            <div className='flex items-center gap-3 mb-3'>
              <Award className='w-8 h-8' />
              <h2 className='text-3xl md:text-4xl font-bold'>Premium & Luxury</h2>
            </div>
            <p className='text-lg text-muted-foreground'>Experience exceptional living with our exclusive collection</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {luxuryProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className='py-20 bg-foreground text-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold mb-2'>
                {mockAnalytics.stats.propertiesSold.toLocaleString()}+
              </div>
              <div className='text-background/80 text-lg'>Properties Sold</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold mb-2'>
                {mockAnalytics.stats.happyClients.toLocaleString()}+
              </div>
              <div className='text-background/80 text-lg'>Happy Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold mb-2'>
                {mockAnalytics.stats.yearsExperience}+
              </div>
              <div className='text-background/80 text-lg'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold mb-2'>
                {mockAnalytics.stats.expertAgents}+
              </div>
              <div className='text-background/80 text-lg'>Expert Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Expert Agents */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>Meet Our Expert Agents</h2>
            <p className='text-lg text-muted-foreground'>Work with certified professionals who care about your success</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {topAgents.map((agent) => (
              <Card key={agent.id} className='overflow-hidden hover:shadow-lg transition-shadow duration-300 border-muted/50'>
                <CardContent className='p-6'>
                  <div className='flex flex-col items-center text-center'>
                    <div className='relative mb-4'>
                      <img src={agent.avatar} alt={agent.name} className='w-32 h-32 rounded-full object-cover' />
                      {agent.verified && (
                        <div className='absolute bottom-0 right-0 bg-foreground text-background rounded-full p-1'>
                          <CheckCircle2 className='w-5 h-5' />
                        </div>
                      )}
                    </div>
                    <h3 className='text-xl font-bold mb-1'>{agent.name}</h3>
                    <p className='text-sm text-muted-foreground mb-2'>{agent.title}</p>
                    <Badge variant='outline' className='mb-4'>{agent.specialization}</Badge>
                    <p className='text-sm text-muted-foreground mb-4'>{agent.bio}</p>
                    <div className='flex items-center gap-4 mb-4 text-sm'>
                      <div className='flex items-center gap-1'>
                        <Building2 className='w-4 h-4' />
                        <span>{agent.propertiesSold} Sold</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Star className='w-4 h-4 fill-current' />
                        <span>{agent.rating}</span>
                      </div>
                    </div>
                    <div className='flex flex-wrap gap-1 justify-center mb-4'>
                      {agent.languages.map((lang: string) => (
                        <Badge key={lang} variant='secondary' className='text-xs'>{lang}</Badge>
                      ))}
                    </div>
                    <div className='flex gap-2 w-full'>
                      <Button variant='outline' size='sm' className='flex-1'>
                        <Mail className='w-4 h-4 mr-1' />
                        Email
                      </Button>
                      <Button variant='outline' size='sm' className='flex-1'>
                        <Phone className='w-4 h-4 mr-1' />
                        Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link href='/agents'>
              <Button size='lg' variant='outline' className='px-8'>
                View All Agents
                <ArrowRight className='ml-2 w-4 h-4' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights - Blog */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>Latest Insights</h2>
            <p className='text-lg text-muted-foreground'>Stay informed with market trends and expert advice</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {latestBlogs.map((post) => (
              <Card key={post.id} className='overflow-hidden hover:shadow-lg transition-shadow duration-300 border-muted/50'>
                <div className='relative h-48'>
                  <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
                  <Badge className='absolute top-4 left-4 bg-foreground text-background'>
                    {post.category}
                  </Badge>
                </div>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-2 line-clamp-2'>{post.title}</h3>
                  <p className='text-muted-foreground mb-4 line-clamp-2'>{post.excerpt}</p>
                  <div className='flex items-center justify-between text-sm text-muted-foreground mb-4'>
                    <span>{post.author}</span>
                    <div className='flex items-center gap-3'>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={\`/blog/\${post.slug}\`}>
                    <Button variant='outline' size='sm' className='w-full'>
                      Read More
                      <ArrowRight className='ml-2 w-4 h-4' />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link href='/blog'>
              <Button size='lg' variant='outline' className='px-8'>
                View All Articles
                <ArrowRight className='ml-2 w-4 h-4' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-foreground text-background rounded-3xl p-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Find Your Dream Property?</h2>
            <p className='text-lg text-background/80 mb-8 max-w-2xl mx-auto'>
              Join thousands of satisfied clients who found their perfect home with PRESTIGE
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/properties'>
                <Button size='lg' variant='secondary' className='px-8'>
                  Browse Properties
                </Button>
              </Link>
              <Link href='/contact'>
                <Button size='lg' variant='outline' className='px-8 border-background text-background hover:bg-background hover:text-foreground'>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
`;

fs.writeFileSync('d:/Anonymous/RealEstate/Project/frontend/app/page.tsx', content);
console.log('Successfully created enhanced homepage with all sections');
