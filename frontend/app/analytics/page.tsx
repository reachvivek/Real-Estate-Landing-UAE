'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function AnalyticsPage() {
  return (<div className="min-h-screen bg-background"><Header /><main className="pt-24 pb-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold">Analytics</h1><p className="mt-4 text-muted-foreground">Track your performance</p></div></main><Footer /></div>);
}