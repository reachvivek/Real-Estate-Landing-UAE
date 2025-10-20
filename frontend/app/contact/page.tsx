'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Get in Touch</h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Have questions about properties? Our team is here to help you find your dream home in UAE
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
            {/* Contact Info Cards */}
            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-8 text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                  <Phone className='w-8 h-8' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Call Us</h3>
                <p className='text-muted-foreground mb-4'>Mon-Sat 9am-8pm</p>
                <a href='tel:+971501234567' className='text-lg font-semibold hover:underline'>
                  +971 50 123 4567
                </a>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-8 text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                  <Mail className='w-8 h-8' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Email Us</h3>
                <p className='text-muted-foreground mb-4'>We reply within 24 hours</p>
                <a href='mailto:info@prestigeuae.com' className='text-lg font-semibold hover:underline'>
                  info@prestigeuae.com
                </a>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-8 text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-4'>
                  <MapPin className='w-8 h-8' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Visit Us</h3>
                <p className='text-muted-foreground mb-4'>Dubai Marina Office</p>
                <p className='text-sm'>
                  Marina Plaza, Level 23<br />
                  Dubai Marina, Dubai, UAE
                </p>
              </CardContent>
            </Card>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Contact Form */}
            <Card>
              <CardContent className='p-8'>
                <h2 className='text-3xl font-bold mb-6'>Send us a Message</h2>
                <form className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <Label htmlFor='firstName'>First Name *</Label>
                      <Input id='firstName' placeholder='John' className='mt-2' required />
                    </div>
                    <div>
                      <Label htmlFor='lastName'>Last Name *</Label>
                      <Input id='lastName' placeholder='Doe' className='mt-2' required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='email'>Email Address *</Label>
                    <Input id='email' type='email' placeholder='john@example.com' className='mt-2' required />
                  </div>

                  <div>
                    <Label htmlFor='phone'>Phone Number *</Label>
                    <Input id='phone' type='tel' placeholder='+971 50 123 4567' className='mt-2' required />
                  </div>

                  <div>
                    <Label htmlFor='subject'>Subject</Label>
                    <Input id='subject' placeholder='Property Inquiry' className='mt-2' />
                  </div>

                  <div>
                    <Label htmlFor='message'>Message *</Label>
                    <textarea
                      id='message'
                      rows={6}
                      className='w-full mt-2 px-4 py-2 border border-input rounded-lg bg-background'
                      placeholder='Tell us about your requirements...'
                      required
                    />
                  </div>

                  <Button type='submit' size='lg' className='w-full'>
                    <Send className='w-4 h-4 mr-2' />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Office Hours */}
            <div className='space-y-8'>
              <Card>
                <CardContent className='p-8'>
                  <h2 className='text-3xl font-bold mb-6'>Office Hours</h2>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <Clock className='w-5 h-5 text-muted-foreground' />
                      <div className='flex-1'>
                        <div className='flex justify-between'>
                          <span className='font-semibold'>Monday - Friday</span>
                          <span className='text-muted-foreground'>9:00 AM - 8:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Clock className='w-5 h-5 text-muted-foreground' />
                      <div className='flex-1'>
                        <div className='flex justify-between'>
                          <span className='font-semibold'>Saturday</span>
                          <span className='text-muted-foreground'>10:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Clock className='w-5 h-5 text-muted-foreground' />
                      <div className='flex-1'>
                        <div className='flex justify-between'>
                          <span className='font-semibold'>Sunday</span>
                          <span className='text-muted-foreground'>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-0'>
                  <div className='h-80 bg-muted rounded-lg overflow-hidden'>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0973267326497!2d55.13656431501046!3d25.077751983954447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad7d166f5b%3A0x7e1365f7e1d1c3e8!2sDubai%20Marina%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1647890123456!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='mt-20'>
            <h2 className='text-3xl font-bold text-center mb-12'>Frequently Asked Questions</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-3'>Do you charge consultation fees?</h3>
                  <p className='text-muted-foreground'>
                    No, all our consultations are completely free. We only get paid when you successfully
                    buy or rent a property through us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-3'>How long does it take to find a property?</h3>
                  <p className='text-muted-foreground'>
                    It varies based on your requirements. Our team typically arranges viewings within 24-48 hours
                    and many clients find their ideal property within 1-2 weeks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-3'>Can you help with visa and legal matters?</h3>
                  <p className='text-muted-foreground'>
                    Yes! We provide complete support including property registration, visa processing,
                    and connecting you with legal advisors for documentation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-3'>Do you work with international buyers?</h3>
                  <p className='text-muted-foreground'>
                    Absolutely! We specialize in helping expats and international buyers. We can arrange
                    virtual viewings and handle the entire process remotely if needed.
                  </p>
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
