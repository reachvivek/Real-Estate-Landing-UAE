const fs = require('fs');
const path = require('path');

// Landing Page
const landingPage = `'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockProperties } from '@/lib/data/mockData';
import { Search, MapPin, DollarSign, Home, Bed, Bath, Square, TrendingUp, Users, Award, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  const [searchType, setSearchType] = useState('buy');
  const featuredProperties = mockProperties.filter((p) => p.featured);

  return (
    <div className='min-h-screen'>
      <Header />
      <section className='relative pt-24 pb-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10' />
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto space-y-8'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className='mb-4 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20'>
                <Sparkles className='w-4 h-4 mr-2 inline' />
                AI-Powered Real Estate Platform
              </Badge>
            </motion.div>
            <motion.h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              Find Your Dream <span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>Property</span>
            </motion.h1>
            <motion.p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              Discover properties with advanced AI-powered search, smart CRM, and real-time analytics
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card className='mt-12 p-6 backdrop-blur-sm bg-card/95 shadow-2xl'>
                <Tabs defaultValue='buy' onValueChange={setSearchType}>
                  <TabsList className='grid w-full grid-cols-3 mb-6'>
                    <TabsTrigger value='buy'>Buy</TabsTrigger>
                    <TabsTrigger value='rent'>Rent</TabsTrigger>
                    <TabsTrigger value='sell'>Sell</TabsTrigger>
                  </TabsList>
                  <TabsContent value={searchType}>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                      <div className='md:col-span-2'><div className='relative'><MapPin className='absolute left-3 top-3 w-5 h-5 text-muted-foreground' /><Input placeholder='City, Neighborhood, or ZIP code' className='pl-10 h-12' /></div></div>
                      <div className='relative'><Home className='absolute left-3 top-3 w-5 h-5 text-muted-foreground' /><Input placeholder='Property Type' className='pl-10 h-12' /></div>
                      <div className='relative'><DollarSign className='absolute left-3 top-3 w-5 h-5 text-muted-foreground' /><Input placeholder='Price Range' className='pl-10 h-12' /></div>
                    </div>
                    <Link href='/properties'><Button className='w-full mt-4 h-12 text-lg' size='lg'><Search className='w-5 h-5 mr-2' />Search Properties</Button></Link>
                  </TabsContent>
                </Tabs>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'><h2 className='text-4xl font-bold mb-4'>Featured Properties</h2><p className='text-xl text-muted-foreground'>Handpicked properties just for you</p></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredProperties.map((property) => (
              <Card key={property.id} className='overflow-hidden hover-lift cursor-pointer group'>
                <div className='relative h-64 overflow-hidden'>
                  <img src={property.images[0]} alt={property.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' />
                  <Badge className='absolute top-4 right-4 bg-primary'>{property.type === 'sale' ? 'For Sale' : 'For Rent'}</Badge>
                </div>
                <CardHeader><CardTitle className='line-clamp-1'>{property.title}</CardTitle><CardDescription className='flex items-center gap-1'><MapPin className='w-4 h-4' />{property.address}</CardDescription></CardHeader>
                <CardContent>
                  <div className='text-3xl font-bold text-primary mb-4'>$<span>{property.price.toLocaleString()}</span>{property.type === 'rent' && <span className='text-base font-normal text-muted-foreground'>/month</span>}</div>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-1'><Bed className='w-4 h-4' />{property.bedrooms} Beds</div>
                    <div className='flex items-center gap-1'><Bath className='w-4 h-4' />{property.bathrooms} Baths</div>
                    <div className='flex items-center gap-1'><Square className='w-4 h-4' />{property.sqft} sqft</div>
                  </div>
                </CardContent>
                <CardFooter className='border-t'><Link href={\`/property/\${property.id}\`} className='w-full'><Button variant='ghost' className='w-full group-hover:bg-primary group-hover:text-white'>View Details<ArrowRight className='w-4 h-4 ml-2' /></Button></Link></CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 bg-gradient-to-br from-primary to-secondary text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Ready to Transform Your Real Estate Business?</h2>
          <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>Join thousands of agents using PropVerse</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/pricing'><Button size='lg' variant='secondary' className='text-lg px-8'>View Pricing</Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync(path.join('app', 'page.tsx'), landingPage);
console.log('✓ Created app/page.tsx');

