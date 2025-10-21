import { readFileSync, writeFileSync } from 'fs';

// Fix landing page (page.tsx)
const pagePath = './app/page.tsx';
let pageContent = readFileSync(pagePath, 'utf-8');

// Replace hero section for mobile responsiveness
pageContent = pageContent.replace(
  `      {/* Hero Section */}
      <section className='relative pt-20 pb-32 bg-muted/30'>`,
  `      {/* Hero Section */}
      <section className='relative pt-20 pb-48 md:pb-32 bg-muted/30'>`
);

pageContent = pageContent.replace(
  `            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center px-4'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>`,
  `            <div className='absolute top-0 left-0 right-0 h-40 md:h-auto md:bottom-0 flex flex-col justify-center items-center text-center px-4'>
              <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4'>`
);

pageContent = pageContent.replace(
  `              <p className='text-lg md:text-xl text-white/90 max-w-2xl'>`,
  `              <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl'>`
);

pageContent = pageContent.replace(
  `            <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
              <div className='bg-white dark:bg-card rounded-2xl shadow-2xl p-6'>
                <Tabs defaultValue='rent' onValueChange={setSearchType}>
                  <TabsList className='grid w-full max-w-md grid-cols-3 mb-6'>
                    <TabsTrigger value='rent'>Rent</TabsTrigger>
                    <TabsTrigger value='buy'>Buy</TabsTrigger>
                    <TabsTrigger value='sell'>Sell</TabsTrigger>
                  </TabsList>
                  <TabsContent value={searchType}>
                    <div className='grid grid-cols-1 md:grid-cols-11 gap-4 items-end'>
                      <div className='md:col-span-2'>
                        <label className='text-sm font-medium mb-2 block'>City</label>
                        <Select value={selectedCity} onValueChange={setSelectedCity}>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Select City' /></SelectTrigger>`,
  `            <div className='absolute bottom-0 left-0 right-0 p-3 md:p-8'>
              <div className='bg-white dark:bg-card rounded-2xl shadow-2xl p-3 md:p-6'>
                <Tabs defaultValue='rent' onValueChange={setSearchType}>
                  <TabsList className='grid w-full max-w-md grid-cols-3 mb-3 md:mb-6 h-9 md:h-10'>
                    <TabsTrigger value='rent' className='text-xs md:text-sm'>Rent</TabsTrigger>
                    <TabsTrigger value='buy' className='text-xs md:text-sm'>Buy</TabsTrigger>
                    <TabsTrigger value='sell' className='text-xs md:text-sm'>Sell</TabsTrigger>
                  </TabsList>
                  <TabsContent value={searchType} className='mt-0'>
                    <div className='grid grid-cols-2 md:grid-cols-11 gap-2 md:gap-4 items-end'>
                      <div className='col-span-1 md:col-span-2'>
                        <label className='text-xs md:text-sm font-medium mb-1 md:mb-2 block'>City</label>
                        <Select value={selectedCity} onValueChange={setSelectedCity}>
                          <SelectTrigger className='h-9 md:h-12 text-xs md:text-sm'><SelectValue placeholder='City' /></SelectTrigger>`
);

pageContent = pageContent.replace(
  `                      <div className='md:col-span-3'>
                        <label className='text-sm font-medium mb-2 block'>Area</label>
                        <Select value={selectedArea} onValueChange={setSelectedArea}>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Select Area' /></SelectTrigger>`,
  `                      <div className='col-span-1 md:col-span-3'>
                        <label className='text-xs md:text-sm font-medium mb-1 md:mb-2 block'>Area</label>
                        <Select value={selectedArea} onValueChange={setSelectedArea}>
                          <SelectTrigger className='h-9 md:h-12 text-xs md:text-sm'><SelectValue placeholder='Area' /></SelectTrigger>`
);

pageContent = pageContent.replace(
  `                      <div className='md:col-span-2'>
                        <label className='text-sm font-medium mb-2 block'>Property Type</label>
                        <Select value={selectedPropertyType} onValueChange={setSelectedPropertyType}>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Type' /></SelectTrigger>`,
  `                      <div className='col-span-1 md:col-span-2'>
                        <label className='text-xs md:text-sm font-medium mb-1 md:mb-2 block'>Type</label>
                        <Select value={selectedPropertyType} onValueChange={setSelectedPropertyType}>
                          <SelectTrigger className='h-9 md:h-12 text-xs md:text-sm'><SelectValue placeholder='Type' /></SelectTrigger>`
);

pageContent = pageContent.replace(
  `                      <div className='md:col-span-3'>
                        <label className='text-sm font-medium mb-2 block'>Price Range</label>
                        <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                          <SelectTrigger className='h-12'><SelectValue placeholder='Choose Price Range' /></SelectTrigger>
                          <SelectContent>
                            {searchType === 'rent' ? (
                              <>
                                <SelectItem value='0-100k'>Up to AED 100K/yr</SelectItem>
                                <SelectItem value='100k-200k'>AED 100K - 200K/yr</SelectItem>
                                <SelectItem value='200k-500k'>AED 200K - 500K/yr</SelectItem>
                                <SelectItem value='500k-plus'>AED 500K+/yr</SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value='0-2m'>Up to AED 2M</SelectItem>
                                <SelectItem value='2m-5m'>AED 2M - 5M</SelectItem>
                                <SelectItem value='5m-10m'>AED 5M - 10M</SelectItem>
                                <SelectItem value='10m-plus'>AED 10M+</SelectItem>`,
  `                      <div className='col-span-1 md:col-span-3'>
                        <label className='text-xs md:text-sm font-medium mb-1 md:mb-2 block'>Price</label>
                        <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                          <SelectTrigger className='h-9 md:h-12 text-xs md:text-sm'><SelectValue placeholder='Price' /></SelectTrigger>
                          <SelectContent>
                            {searchType === 'rent' ? (
                              <>
                                <SelectItem value='0-100k'>Up to 100K</SelectItem>
                                <SelectItem value='100k-200k'>100K - 200K</SelectItem>
                                <SelectItem value='200k-500k'>200K - 500K</SelectItem>
                                <SelectItem value='500k-plus'>500K+</SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value='0-2m'>Up to 2M</SelectItem>
                                <SelectItem value='2m-5m'>2M - 5M</SelectItem>
                                <SelectItem value='5m-10m'>5M - 10M</SelectItem>
                                <SelectItem value='10m-plus'>10M+</SelectItem>`
);

pageContent = pageContent.replace(
  `                      <div className='md:col-span-1'>
                        <Link href={\`/properties?type=\${searchType}&city=\${selectedCity}&area=\${selectedArea}&propertyType=\${selectedPropertyType}&price=\${selectedPriceRange}\`}>
                          <Button className='w-full h-12'><Search className='w-5 h-5' /></Button>`,
  `                      <div className='col-span-2 md:col-span-1'>
                        <Link href={\`/properties?type=\${searchType}&city=\${selectedCity}&area=\${selectedArea}&propertyType=\${selectedPropertyType}&price=\${selectedPriceRange}\`} className='block'>
                          <Button className='w-full h-9 md:h-12 text-xs md:text-sm'><Search className='w-3.5 md:w-5 h-3.5 md:h-5' /></Button>`
);

writeFileSync(pagePath, pageContent);
console.log('✅ Fixed landing page (page.tsx) for mobile responsiveness');

// Fix properties page
const propertiesPath = './app/properties/page.tsx';
let propertiesContent = readFileSync(propertiesPath, 'utf-8');

// Hide filters sidebar on mobile - add conditional rendering
propertiesContent = propertiesContent.replace(
  `          <div className='flex gap-6'>
            {/* Filters Sidebar */}
            {showFilters && viewMode !== 'map' && (
              <aside className='w-80 shrink-0'>`,
  `          <div className='flex gap-6'>
            {/* Filters Sidebar - Hidden on mobile */}
            {showFilters && viewMode !== 'map' && (
              <aside className='hidden lg:block w-80 shrink-0'>`
);

// Update search and controls to be more mobile-friendly
propertiesContent = propertiesContent.replace(
  `          {/* Search and Controls */}
          <div className='mb-6 flex flex-col md:flex-row gap-4'>`,
  `          {/* Search and Controls */}
          <div className='mb-6 flex flex-col gap-3 md:gap-4'>`
);

propertiesContent = propertiesContent.replace(
  `            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className='w-full md:w-48 h-12'>`,
  `            <div className='flex gap-2'>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className='flex-1 md:w-48 h-12 text-xs md:text-sm'>`
);

propertiesContent = propertiesContent.replace(
  `              </SelectContent>
            </Select>
            <div className='flex gap-2'>`,
  `              </SelectContent>
              </Select>
            </div>
            <div className='flex gap-2 justify-center'>`
);

propertiesContent = propertiesContent.replace(
  `              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size='icon'
                className='h-12 w-12'`,
  `              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size='icon'
                className='h-10 md:h-12 w-10 md:w-12'`
);

propertiesContent = propertiesContent.replace(
  `              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size='icon'
                className='h-12 w-12'`,
  `              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size='icon'
                className='h-10 md:h-12 w-10 md:w-12'`
);

propertiesContent = propertiesContent.replace(
  `              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size='icon'
                className='h-12 w-12'`,
  `              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size='icon'
                className='h-10 md:h-12 w-10 md:w-12'`
);

// Make Type Tabs more compact on mobile
propertiesContent = propertiesContent.replace(
  `          {/* Type Tabs */}
          <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as any)} className='mb-6'>
            <TabsList className='grid w-full max-w-md grid-cols-3'>`,
  `          {/* Type Tabs */}
          <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as any)} className='mb-6'>
            <TabsList className='grid w-full max-w-md grid-cols-3 h-9 md:h-10'>`
);

propertiesContent = propertiesContent.replace(
  `              <TabsTrigger value='all'>All ({mockProperties.length})</TabsTrigger>
              <TabsTrigger value='sale'>For Sale ({mockProperties.filter(p => p.type === 'sale').length})</TabsTrigger>
              <TabsTrigger value='rent'>For Rent ({mockProperties.filter(p => p.type === 'rent').length})</TabsTrigger>`,
  `              <TabsTrigger value='all' className='text-xs md:text-sm'>All ({mockProperties.length})</TabsTrigger>
              <TabsTrigger value='sale' className='text-xs md:text-sm'>Sale ({mockProperties.filter(p => p.type === 'sale').length})</TabsTrigger>
              <TabsTrigger value='rent' className='text-xs md:text-sm'>Rent ({mockProperties.filter(p => p.type === 'rent').length})</TabsTrigger>`
);

writeFileSync(propertiesPath, propertiesContent);
console.log('✅ Fixed properties page for mobile responsiveness');

console.log('\n✅ All mobile responsiveness improvements applied successfully!');
