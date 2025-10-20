'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockAgents } from '@/lib/data/mockData';
import { Mail, Phone, Star, Building2, CheckCircle2 } from 'lucide-react';

export default function AgentsPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Our Expert Agents</h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Work with certified real estate professionals who understand the UAE market
            </p>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            <div className='text-center p-6 bg-muted/30 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>{mockAgents.length}+</div>
              <div className='text-sm text-muted-foreground'>Expert Agents</div>
            </div>
            <div className='text-center p-6 bg-muted/30 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>
                {mockAgents.reduce((sum, agent) => sum + agent.propertiesSold, 0)}+
              </div>
              <div className='text-sm text-muted-foreground'>Properties Sold</div>
            </div>
            <div className='text-center p-6 bg-muted/30 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>
                {(mockAgents.reduce((sum, agent) => sum + agent.rating, 0) / mockAgents.length).toFixed(1)}
              </div>
              <div className='text-sm text-muted-foreground'>Average Rating</div>
            </div>
            <div className='text-center p-6 bg-muted/30 rounded-lg'>
              <div className='text-3xl font-bold mb-2'>100%</div>
              <div className='text-sm text-muted-foreground'>Verified</div>
            </div>
          </div>

          {/* Agents Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {mockAgents.map((agent) => (
              <Card key={agent.id} className='overflow-hidden hover:shadow-xl transition-shadow duration-300 border-muted/50'>
                <CardContent className='p-8'>
                  <div className='flex flex-col items-center text-center'>
                    {/* Avatar */}
                    <div className='relative mb-6'>
                      <img
                        src={agent.avatar}
                        alt={agent.name}
                        className='w-32 h-32 rounded-full object-cover ring-4 ring-muted'
                      />
                      {agent.verified && (
                        <div className='absolute bottom-0 right-0 bg-foreground text-background rounded-full p-2 ring-4 ring-background'>
                          <CheckCircle2 className='w-6 h-6' />
                        </div>
                      )}
                    </div>

                    {/* Name & Title */}
                    <h3 className='text-2xl font-bold mb-1'>{agent.name}</h3>
                    <p className='text-sm text-muted-foreground mb-3'>{agent.title}</p>
                    <Badge variant='outline' className='mb-6 text-sm'>{agent.specialization}</Badge>

                    {/* Bio */}
                    <p className='text-sm text-muted-foreground mb-6 line-clamp-3'>
                      {agent.bio}
                    </p>

                    {/* Stats */}
                    <div className='flex items-center gap-8 mb-6 text-sm'>
                      <div className='flex items-center gap-2'>
                        <Building2 className='w-5 h-5 text-muted-foreground' />
                        <div>
                          <div className='font-semibold'>{agent.propertiesSold}</div>
                          <div className='text-xs text-muted-foreground'>Sold</div>
                        </div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Star className='w-5 h-5 text-muted-foreground fill-current' />
                        <div>
                          <div className='font-semibold'>{agent.rating}</div>
                          <div className='text-xs text-muted-foreground'>Rating</div>
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className='flex flex-wrap gap-2 justify-center mb-6'>
                      {agent.languages.map((lang: string) => (
                        <Badge key={lang} variant='secondary' className='text-xs'>
                          {lang}
                        </Badge>
                      ))}
                    </div>

                    {/* Contact Buttons */}
                    <div className='flex flex-col gap-3 w-full'>
                      <Button className='w-full' size='lg'>
                        <Mail className='w-4 h-4 mr-2' />
                        Email Agent
                      </Button>
                      <Button variant='outline' size='lg' className='w-full'>
                        <Phone className='w-4 h-4 mr-2' />
                        {agent.phone}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className='mt-20 text-center bg-foreground text-background rounded-3xl p-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Find Your Dream Property?
            </h2>
            <p className='text-lg text-background/80 mb-8 max-w-2xl mx-auto'>
              Our expert agents are here to help you every step of the way
            </p>
            <Button size='lg' variant='secondary' className='px-8'>
              Browse Properties
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
