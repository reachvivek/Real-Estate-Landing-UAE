'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProperties } from '@/lib/data/mockData';
import {
  MapPin, Bed, Bath, Square, Calendar, Home, CheckCircle2,
  Phone, Mail, Share2, Heart, ArrowLeft, ShoppingBag, Train,
  GraduationCap, Building2, UtensilsCrossed, Navigation
} from 'lucide-react';
import { useState } from 'react';
import PropertyLocationMap from '@/components/map/PropertyLocationMap';
export const runtime = 'edge';





// Helper function to get icon for location type
const getLocationIcon = (type: string) => {
  const iconMap: { [key: string]: any } = {
    mall: ShoppingBag,
    metro: Train,
    school: GraduationCap,
    hospital: Building2,
    supermarket: UtensilsCrossed,
    beach: Navigation,
    golf: Navigation,
    landmark: MapPin,
  };
  return iconMap[type] || MapPin;
};

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const propertyId = parseInt(resolvedParams.id);
  const property = mockProperties.find(p => p.id === propertyId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    notFound();
  }

  const priceStr = new Intl.NumberFormat('en-US').format(property.price);

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Back Button */}
          <Link href='/properties'>
            <Button variant='ghost' className='mb-6'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Properties
            </Button>
          </Link>

          {/* Image Gallery */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8'>
            <div className='lg:col-span-2'>
              <div className='relative h-96 lg:h-[600px] rounded-xl overflow-hidden'>
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-4 left-4 flex gap-2'>
                  <Badge className='bg-primary text-primary-foreground text-sm px-4 py-1'>
                    For {property.type === 'sale' ? 'Sale' : 'Rent'}
                  </Badge>
                  {property.verified && (
                    <Badge className='bg-foreground text-background text-sm px-4 py-1'>
                      <CheckCircle2 className='w-4 h-4 mr-1' />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className='absolute top-4 right-4 flex gap-2'>
                  <Button size='icon' variant='secondary'>
                    <Heart className='w-5 h-5' />
                  </Button>
                  <Button size='icon' variant='secondary'>
                    <Share2 className='w-5 h-5' />
                  </Button>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-1 gap-4'>
              {property.images.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  className={`relative h-32 lg:h-48 rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === idx ? 'ring-4 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img src={img} alt={`View ${idx + 1}`} className='w-full h-full object-cover' />
                </div>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Title and Price */}
              <div>
                <h1 className='text-4xl font-bold mb-4'>{property.title}</h1>
                <div className='flex items-center gap-2 text-muted-foreground mb-6'>
                  <MapPin className='w-5 h-5' />
                  <span className='text-lg'>{property.address}</span>
                </div>
                <div className='text-4xl font-bold text-foreground'>
                  AED {priceStr}
                  {property.type === 'rent' && (
                    <span className='text-xl font-normal text-muted-foreground'>/year</span>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-6'>Property Features</h2>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    <div className='text-center p-4 bg-muted/30 rounded-lg'>
                      <Bed className='w-8 h-8 mx-auto mb-2' />
                      <div className='text-2xl font-bold'>{property.bedrooms}</div>
                      <div className='text-sm text-muted-foreground'>Bedrooms</div>
                    </div>
                    <div className='text-center p-4 bg-muted/30 rounded-lg'>
                      <Bath className='w-8 h-8 mx-auto mb-2' />
                      <div className='text-2xl font-bold'>{property.bathrooms}</div>
                      <div className='text-sm text-muted-foreground'>Bathrooms</div>
                    </div>
                    <div className='text-center p-4 bg-muted/30 rounded-lg'>
                      <Square className='w-8 h-8 mx-auto mb-2' />
                      <div className='text-2xl font-bold'>{property.sqft}</div>
                      <div className='text-sm text-muted-foreground'>Sqft</div>
                    </div>
                    <div className='text-center p-4 bg-muted/30 rounded-lg'>
                      <Home className='w-8 h-8 mx-auto mb-2' />
                      <div className='text-2xl font-bold'>{property.category}</div>
                      <div className='text-sm text-muted-foreground'>Type</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-4'>Description</h2>
                  <p className='text-muted-foreground leading-relaxed'>{property.description}</p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-4'>Amenities</h2>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-primary' />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-4'>Property Details</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex justify-between py-3 border-b border-muted'>
                      <span className='text-muted-foreground'>Property Type</span>
                      <span className='font-semibold'>{property.category}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-muted'>
                      <span className='text-muted-foreground'>Status</span>
                      <span className='font-semibold capitalize'>{property.status}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-muted'>
                      <span className='text-muted-foreground'>Year Built</span>
                      <span className='font-semibold'>{property.yearBuilt}</span>
                    </div>
                    <div className='flex justify-between py-3 border-b border-muted'>
                      <span className='text-muted-foreground'>Listed Date</span>
                      <span className='font-semibold'>
                        {new Date(property.listedDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-4'>Location</h2>
                  <div className='flex items-center gap-2 text-muted-foreground mb-4'>
                    <MapPin className='w-5 h-5' />
                    <span>{property.address}</span>
                  </div>
                  <PropertyLocationMap
                    lat={property.location.lat}
                    lng={property.location.lng}
                    title={property.title}
                    address={property.address}
                    price={property.price}
                  />
                </CardContent>
              </Card>

              {/* Nearby Locations */}
              {property.nearbyLocations && property.nearbyLocations.length > 0 && (
                <Card>
                  <CardContent className='p-6'>
                    <h2 className='text-2xl font-bold mb-4'>Nearby Locations</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {property.nearbyLocations.map((location, index) => {
                        const Icon = getLocationIcon(location.type);
                        return (
                          <div key={index} className='flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors'>
                            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background flex-shrink-0'>
                              <Icon className='w-5 h-5' />
                            </div>
                            <div className='flex-1'>
                              <h3 className='font-semibold text-sm'>{location.name}</h3>
                              <p className='text-xs text-muted-foreground capitalize'>{location.type}</p>
                              <p className='text-xs font-medium mt-1'>{location.distance}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar - Agent Contact */}
            <div className='lg:col-span-1'>
              <Card className='sticky top-24'>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-6'>Contact Agent</h2>

                  {/* Agent Info */}
                  <div className='flex items-center gap-4 mb-6 pb-6 border-b border-muted'>
                    <img
                      src={property.agent.avatar}
                      alt={property.agent.name}
                      className='w-20 h-20 rounded-full object-cover ring-4 ring-muted'
                    />
                    <div>
                      <h3 className='text-xl font-bold'>{property.agent.name}</h3>
                      <p className='text-sm text-muted-foreground'>Real Estate Agent</p>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className='space-y-3 mb-6'>
                    <Button className='w-full' size='lg'>
                      <Phone className='w-4 h-4 mr-2' />
                      {property.agent.phone}
                    </Button>
                    <Button variant='outline' className='w-full' size='lg'>
                      <Mail className='w-4 h-4 mr-2' />
                      Email Agent
                    </Button>
                  </div>

                  {/* Inquiry Form */}
                  <div className='space-y-3'>
                    <h3 className='font-semibold'>Send Inquiry</h3>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='w-full px-4 py-2 border border-muted rounded-lg'
                    />
                    <input
                      type='email'
                      placeholder='Your Email'
                      className='w-full px-4 py-2 border border-muted rounded-lg'
                    />
                    <input
                      type='tel'
                      placeholder='Your Phone'
                      className='w-full px-4 py-2 border border-muted rounded-lg'
                    />
                    <textarea
                      placeholder='Message'
                      rows={4}
                      className='w-full px-4 py-2 border border-muted rounded-lg'
                      defaultValue={`I am interested in ${property.title}`}
                    />
                    <Button className='w-full' size='lg'>
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
