import fs from 'fs';

const pages = {
  'app/properties/page.tsx': `'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function PropertiesPage() {
  return (<div className="min-h-screen bg-background"><Header /><main className="pt-24 pb-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold">Properties</h1><p className="mt-4 text-muted-foreground">Browse all available properties</p></div></main><Footer /></div>);
}`,
  'app/crm/page.tsx': `'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function CRMPage() {
  return (<div className="min-h-screen bg-background"><Header /><main className="pt-24 pb-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold">CRM Dashboard</h1><p className="mt-4 text-muted-foreground">Manage your leads and properties</p></div></main><Footer /></div>);
}`,
  'app/analytics/page.tsx': `'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function AnalyticsPage() {
  return (<div className="min-h-screen bg-background"><Header /><main className="pt-24 pb-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold">Analytics</h1><p className="mt-4 text-muted-foreground">Track your performance</p></div></main><Footer /></div>);
}`,
  'app/pricing/page.tsx': `'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function PricingPage() {
  return (<div className="min-h-screen bg-background"><Header /><main className="pt-24 pb-20"><div className="container mx-auto px-4"><h1 className="text-4xl font-bold">Pricing</h1><p className="mt-4 text-muted-foreground">Simple, transparent pricing</p></div></main><Footer /></div>);
}`
};

Object.entries(pages).forEach(([path, content]) => {
  fs.writeFileSync(path, content);
  console.log(`Created ${path}`);
});
