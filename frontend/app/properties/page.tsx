'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockProperties } from '@/lib/data/mockData';
import {
  Search, MapPin, Bed, Bath, Square, Grid3x3, List, Map as MapIcon,
  SlidersHorizontal, CheckCircle2, X
} from 'lucide-react';

// Dynamic import for PropertyMap to avoid SSR issues with Leaflet
const PropertyMap = dynamic(() => import('@/components/map/PropertyMap'), {
  ssr: false,
  loading: () => <div className='flex items-center justify-center h-[600px] bg-muted rounded-lg'><p>Loading map...</p></div>
});

function PropertiesPageContent() {
  const searchParams = useSearchParams();

  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'sale' | 'rent'>('all');
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 30000000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(true);
  const [hoveredPropertyId, setHoveredPropertyId] = useState<number | null>(null);

  // Map area URL param to actual area names in addresses
  const areaMapping: { [key: string]: string } = {
    'dubai-marina': 'Dubai Marina',
    'business-bay': 'Business Bay',
    'jbr': 'Jumeirah Beach Residence',
    'downtown': 'Downtown Dubai',
    'arabian-ranches': 'Arabian Ranches',
    'dubai-hills': 'Dubai Hills Estate',
    'palm-jumeirah': 'Palm Jumeirah',
    'jvc': 'Jumeirah Village Circle',
    'sports-city': 'Dubai Sports City',
    'silicon-oasis': 'Dubai Silicon Oasis',
  };

  // Parse URL parameters on mount
  useEffect(() => {
    const type = searchParams.get('type');
    const area = searchParams.get('area');
    const propertyType = searchParams.get('propertyType');
    const price = searchParams.get('price');

    // Set type filter (rent/buy/sell)
    if (type === 'rent' || type === 'buy') {
      setSelectedType(type === 'buy' ? 'sale' : 'rent');
    }

    // Set area filter
    if (area) {
      const mappedArea = areaMapping[area] || area;
      setSelectedAreas([mappedArea]);
    }

    // Set property type filter
    if (propertyType) {
      setSelectedPropertyTypes([propertyType]);
    }

    // Set price range filter
    if (price) {
      const priceRanges: { [key: string]: [number, number] } = {
        '0-100k': [0, 100000],
        '100k-200k': [100000, 200000],
        '200k-500k': [200000, 500000],
        '500k-plus': [500000, 30000000],
        '0-2m': [0, 2000000],
        '2m-5m': [2000000, 5000000],
        '5m-10m': [5000000, 10000000],
        '10m-plus': [10000000, 30000000],
      };
      if (priceRanges[price]) {
        setPriceRange(priceRanges[price]);
      }
    }
  }, [searchParams]);

  // Extract unique areas from properties
  const areas = useMemo(() => {
    const areaSet = new Set<string>();
    mockProperties.forEach(p => {
      const area = p.address.split(',')[1]?.trim() || p.address.split(',')[0];
      areaSet.add(area);
    });
    return Array.from(areaSet).sort();
  }, []);

  // Extract unique amenities
  const allAmenities = useMemo(() => {
    const amenitySet = new Set<string>();
    mockProperties.forEach(p => p.amenities.forEach(a => amenitySet.add(a)));
    return Array.from(amenitySet).sort();
  }, []);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties.filter(property => {
      // Type filter
      if (selectedType !== 'all' && property.type !== selectedType) return false;

      // Search query
      if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !property.address.toLowerCase().includes(searchQuery.toLowerCase())) return false;

      // Property type filter
      if (selectedPropertyTypes.length > 0 && !selectedPropertyTypes.includes(property.category)) return false;

      // Area filter
      if (selectedAreas.length > 0) {
        const propertyArea = property.address.split(',')[1]?.trim() || property.address.split(',')[0];
        if (!selectedAreas.includes(propertyArea)) return false;
      }

      // Bedrooms filter
      if (selectedBedrooms.length > 0) {
        const bedroomStr = property.bedrooms.toString();
        const hasMatch = selectedBedrooms.some(bed => {
          if (bed === '4+') return property.bedrooms >= 4;
          if (bed === 'Studio') return property.bedrooms === 0 || property.bedrooms === 1;
          return bedroomStr === bed;
        });
        if (!hasMatch) return false;
      }

      // Price range filter
      if (property.price < priceRange[0] || property.price > priceRange[1]) return false;

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every(amenity =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'size-asc': return a.sqft - b.sqft;
        case 'size-desc': return b.sqft - a.sqft;
        case 'date': return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime();
        default: return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedType, selectedPropertyTypes, selectedAreas, selectedBedrooms, priceRange, selectedAmenities, sortBy]);

  const toggleArrayFilter = (value: string, array: string[], setter: (arr: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(v => v !== value));
    } else {
      setter([...array, value]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedPropertyTypes([]);
    setSelectedAreas([]);
    setSelectedBedrooms([]);
    setPriceRange([0, 30000000]);
    setSelectedAmenities([]);
  };

  const PropertyCard = ({ property, view }: { property: any; view: 'grid' | 'list' }) => {
    const priceStr = new Intl.NumberFormat('en-US').format(property.price);

    if (view === 'list') {
      return (
        <Card className='overflow-hidden hover:shadow-lg transition-shadow duration-300 border-muted/50'>
          <div className='flex flex-col md:flex-row'>
            <div className='relative w-full md:w-80 h-64'>
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
            <div className='flex-1 p-6'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-bold mb-2'>{property.title}</h3>
                  <p className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <MapPin className='w-4 h-4' />
                    {property.address}
                  </p>
                </div>
                <div className='text-right'>
                  <div className='text-3xl font-bold text-foreground'>
                    AED {priceStr}
                  </div>
                  {property.type === 'rent' && (
                    <span className='text-sm text-muted-foreground'>/year</span>
                  )}
                </div>
              </div>
              <div className='flex items-center gap-6 mb-4 text-muted-foreground'>
                <div className='flex items-center gap-2'>
                  <Bed className='w-5 h-5' />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Bath className='w-5 h-5' />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Square className='w-5 h-5' />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
              <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>{property.description}</p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <img src={property.agent.avatar} alt={property.agent.name} className='w-10 h-10 rounded-full' />
                  <div>
                    <p className='text-sm font-medium'>{property.agent.name}</p>
                    <p className='text-xs text-muted-foreground'>{property.agent.phone}</p>
                  </div>
                </div>
                <Link href={`/property/${property.id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      );
    }

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
            AED {priceStr}
            {property.type === 'rent' && <span className='text-base font-normal text-muted-foreground'>/year</span>}
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
            <Link href={`/property/${property.id}`}>
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

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Section */}
          <div className='mb-8'>
            <h1 className='text-4xl font-bold mb-2'>Properties in UAE</h1>
            <p className='text-lg text-muted-foreground'>
              Discover {filteredProperties.length} properties matching your criteria
            </p>
          </div>

          {/* Search and Controls */}
          <div className='mb-6 flex flex-col md:flex-row gap-4'>
            <div className='flex-1 relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground' />
              <Input
                placeholder='Search by location, property name...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='pl-10 h-12'
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className='w-full md:w-48 h-12'>
                <SelectValue placeholder='Sort by' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='date'>Latest First</SelectItem>
                <SelectItem value='price-asc'>Price: Low to High</SelectItem>
                <SelectItem value='price-desc'>Price: High to Low</SelectItem>
                <SelectItem value='size-asc'>Size: Small to Large</SelectItem>
                <SelectItem value='size-desc'>Size: Large to Small</SelectItem>
              </SelectContent>
            </Select>
            <div className='flex gap-2'>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size='icon'
                className='h-12 w-12'
                onClick={() => setViewMode('grid')}
              >
                <Grid3x3 className='w-5 h-5' />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size='icon'
                className='h-12 w-12'
                onClick={() => setViewMode('list')}
              >
                <List className='w-5 h-5' />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size='icon'
                className='h-12 w-12'
                onClick={() => setViewMode('map')}
              >
                <MapIcon className='w-5 h-5' />
              </Button>
            </div>
          </div>

          {/* Type Tabs */}
          <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as any)} className='mb-6'>
            <TabsList className='grid w-full max-w-md grid-cols-3'>
              <TabsTrigger value='all'>All ({mockProperties.length})</TabsTrigger>
              <TabsTrigger value='sale'>For Sale ({mockProperties.filter(p => p.type === 'sale').length})</TabsTrigger>
              <TabsTrigger value='rent'>For Rent ({mockProperties.filter(p => p.type === 'rent').length})</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Active Filters */}
          {(selectedAreas.length > 0 || selectedPropertyTypes.length > 0 || selectedType !== 'all' || selectedBedrooms.length > 0 || selectedAmenities.length > 0) && (
            <div className='mb-6 flex flex-wrap gap-2 items-center'>
              <span className='text-sm font-medium text-muted-foreground'>Active Filters:</span>
              {selectedType !== 'all' && (
                <Badge variant='secondary' className='gap-1'>
                  Type: {selectedType === 'sale' ? 'For Sale' : 'For Rent'}
                  <button onClick={() => setSelectedType('all')} className='ml-1 hover:text-foreground'>
                    <X className='w-3 h-3' />
                  </button>
                </Badge>
              )}
              {selectedAreas.map((area) => (
                <Badge key={area} variant='secondary' className='gap-1'>
                  {area}
                  <button onClick={() => setSelectedAreas(selectedAreas.filter(a => a !== area))} className='ml-1 hover:text-foreground'>
                    <X className='w-3 h-3' />
                  </button>
                </Badge>
              ))}
              {selectedPropertyTypes.map((type) => (
                <Badge key={type} variant='secondary' className='gap-1'>
                  {type}
                  <button onClick={() => setSelectedPropertyTypes(selectedPropertyTypes.filter(t => t !== type))} className='ml-1 hover:text-foreground'>
                    <X className='w-3 h-3' />
                  </button>
                </Badge>
              ))}
              {selectedBedrooms.map((bed) => (
                <Badge key={bed} variant='secondary' className='gap-1'>
                  {bed} Bedrooms
                  <button onClick={() => setSelectedBedrooms(selectedBedrooms.filter(b => b !== bed))} className='ml-1 hover:text-foreground'>
                    <X className='w-3 h-3' />
                  </button>
                </Badge>
              ))}
              {selectedAmenities.map((amenity) => (
                <Badge key={amenity} variant='secondary' className='gap-1'>
                  {amenity}
                  <button onClick={() => setSelectedAmenities(selectedAmenities.filter(a => a !== amenity))} className='ml-1 hover:text-foreground'>
                    <X className='w-3 h-3' />
                  </button>
                </Badge>
              ))}
              <Button
                variant='ghost'
                size='sm'
                onClick={() => {
                  setSelectedType('all');
                  setSelectedAreas([]);
                  setSelectedPropertyTypes([]);
                  setSelectedBedrooms([]);
                  setSelectedAmenities([]);
                  setPriceRange([0, 30000000]);
                }}
                className='h-7 text-xs'
              >
                Clear All
              </Button>
            </div>
          )}

          <div className='flex gap-6'>
            {/* Filters Sidebar */}
            {showFilters && viewMode !== 'map' && (
              <aside className='w-80 shrink-0'>
                <Card className='sticky top-24'>
                  <CardHeader className='flex flex-row items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <SlidersHorizontal className='w-5 h-5' />
                      <CardTitle>Filters</CardTitle>
                    </div>
                    <Button variant='ghost' size='sm' onClick={clearAllFilters}>Clear All</Button>
                  </CardHeader>
                  <CardContent className='space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto'>
                    {/* Price Range */}
                    <div>
                      <Label className='mb-3 block font-semibold'>Price Range</Label>
                      <div className='space-y-4'>
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          min={0}
                          max={30000000}
                          step={100000}
                          className='mb-2'
                        />
                        <div className='flex justify-between text-sm text-muted-foreground'>
                          <span>AED {new Intl.NumberFormat('en-US').format(priceRange[0])}</span>
                          <span>AED {new Intl.NumberFormat('en-US').format(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>

                    {/* Areas */}
                    <div>
                      <Label className='mb-3 block font-semibold'>Areas</Label>
                      <div className='space-y-2 max-h-48 overflow-y-auto'>
                        {areas.slice(0, 10).map(area => (
                          <div key={area} className='flex items-center space-x-2'>
                            <Checkbox
                              id={area}
                              checked={selectedAreas.includes(area)}
                              onCheckedChange={() => toggleArrayFilter(area, selectedAreas, setSelectedAreas)}
                            />
                            <label htmlFor={area} className='text-sm cursor-pointer'>
                              {area}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Property Type */}
                    <div>
                      <Label className='mb-3 block font-semibold'>Property Type</Label>
                      <div className='space-y-2'>
                        {['Apartment', 'House', 'Townhouse', 'Penthouse'].map(type => (
                          <div key={type} className='flex items-center space-x-2'>
                            <Checkbox
                              id={type}
                              checked={selectedPropertyTypes.includes(type)}
                              onCheckedChange={() => toggleArrayFilter(type, selectedPropertyTypes, setSelectedPropertyTypes)}
                            />
                            <label htmlFor={type} className='text-sm cursor-pointer'>
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div>
                      <Label className='mb-3 block font-semibold'>Bedrooms</Label>
                      <div className='space-y-2'>
                        {['Studio', '1', '2', '3', '4+'].map(bed => (
                          <div key={bed} className='flex items-center space-x-2'>
                            <Checkbox
                              id={`bed-${bed}`}
                              checked={selectedBedrooms.includes(bed)}
                              onCheckedChange={() => toggleArrayFilter(bed, selectedBedrooms, setSelectedBedrooms)}
                            />
                            <label htmlFor={`bed-${bed}`} className='text-sm cursor-pointer'>
                              {bed} {bed === 'Studio' ? '' : bed === '4+' ? 'Bedrooms' : bed === '1' ? 'Bedroom' : 'Bedrooms'}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <Label className='mb-3 block font-semibold'>Amenities</Label>
                      <div className='space-y-2 max-h-48 overflow-y-auto'>
                        {allAmenities.slice(0, 10).map(amenity => (
                          <div key={amenity} className='flex items-center space-x-2'>
                            <Checkbox
                              id={amenity}
                              checked={selectedAmenities.includes(amenity)}
                              onCheckedChange={() => toggleArrayFilter(amenity, selectedAmenities, setSelectedAmenities)}
                            />
                            <label htmlFor={amenity} className='text-sm cursor-pointer'>
                              {amenity}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            )}

            {/* Main Content */}
            <div className='flex-1'>
              {viewMode === 'map' ? (
                <div>
                  <PropertyMap properties={filteredProperties} height='calc(100vh - 300px)' />
                </div>
              ) : filteredProperties.length === 0 ? (
                <Card className='p-12 text-center'>
                  <p className='text-lg font-semibold mb-2'>No properties found</p>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Try adjusting your filters or search criteria
                  </p>
                  <Button onClick={clearAllFilters}>Clear All Filters</Button>
                </Card>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'space-y-6'}>
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} view={viewMode} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><p>Loading...</p></div>}>
      <PropertiesPageContent />
    </Suspense>
  );
}

