'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  images: string[];
  location: { lat: number; lng: number };
  verified?: boolean;
}

interface PropertyMapProps {
  properties: Property[];
  height?: string;
}

export default function PropertyMap({ properties, height = '600px' }: PropertyMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map centered on Dubai (zoom level 12 = 2x closer than 11)
    const map = L.map(mapContainerRef.current).setView([25.2048, 55.2708], 12);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Create custom icon for property markers
    const createCustomIcon = (price: number, type: string) => {
      const priceStr = new Intl.NumberFormat('en-US').format(price);
      const displayPrice = price > 1000000
        ? Math.round(price / 1000000) + 'M'
        : price > 1000
          ? Math.round(price / 1000) + 'K'
          : priceStr;

      const bgColor = type === 'sale' ? '#000000' : '#374151';

      const html = '<div style="background:' + bgColor + ';color:white;padding:6px 12px;border-radius:20px;font-weight:600;font-size:13px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid white;cursor:pointer;transition:transform 0.2s;" onmouseover="this.style.transform=\'scale(1.1)\'" onmouseout="this.style.transform=\'scale(1)\'">AED ' + displayPrice + '</div>';

      return L.divIcon({
        className: 'custom-marker',
        html: html,
        iconSize: [80, 32],
        iconAnchor: [40, 16],
      });
    };

    // Add markers for each property
    properties.forEach((property) => {
      if (!property.location) return;

      const marker = L.marker([property.location.lat, property.location.lng], {
        icon: createCustomIcon(property.price, property.type),
      });

      // Create popup content
      const priceStr = new Intl.NumberFormat('en-US').format(property.price);
      const rentSuffix = property.type === 'rent' ? '<span style="font-size:13px;font-weight:400;color:#666;">/year</span>' : '';
      const verifiedBadge = property.verified ? '<span style="background:black;color:white;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;display:flex;align-items:center;gap:4px;">✓ Verified</span>' : '';

      const popupContent = '<div style="width:280px;font-family:system-ui,-apple-system,sans-serif;">' +
        '<div style="position:relative;width:100%;height:180px;border-radius:8px;overflow:hidden;margin-bottom:12px;">' +
        '<img src="' + property.images[0] + '" alt="' + property.title + '" style="width:100%;height:100%;object-fit:cover;">' +
        '<div style="position:absolute;top:8px;left:8px;display:flex;gap:6px;">' +
        '<span style="background:black;color:white;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;">For ' + (property.type === 'sale' ? 'Sale' : 'Rent') + '</span>' +
        verifiedBadge +
        '</div></div>' +
        '<div style="padding:0 4px;">' +
        '<h3 style="font-size:16px;font-weight:700;margin:0 0 6px 0;color:#000;line-height:1.3;">' + property.title + '</h3>' +
        '<p style="font-size:12px;color:#666;margin:0 0 10px 0;display:flex;align-items:center;gap:4px;">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' +
        property.address + '</p>' +
        '<div style="font-size:20px;font-weight:700;margin-bottom:10px;color:#000;">AED ' + priceStr + rentSuffix + '</div>' +
        '<div style="display:flex;gap:16px;margin-bottom:12px;font-size:13px;color:#666;">' +
        '<div style="display:flex;align-items:center;gap:4px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' + property.bedrooms + ' Beds</div>' +
        '<div style="display:flex;align-items:center;gap:4px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0l-1 1a1.5 1.5 0 0 0 0 1L7 9"></path><path d="M12 12a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3z"></path></svg>' + property.bathrooms + ' Baths</div>' +
        '<div style="display:flex;align-items:center;gap:4px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>' + property.sqft + ' sqft</div>' +
        '</div>' +
        '<a href="/property/' + property.id + '" style="display:block;width:100%;background:black;color:white;text-align:center;padding:10px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;transition:background 0.2s;" onmouseover="this.style.background=\'#333\'" onmouseout="this.style.background=\'#000\'">View Details</a>' +
        '</div></div>';

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup',
      });

      marker.addTo(map);
      markersRef.current.push(marker);
    });

    // Fit map to show all markers
    if (markersRef.current.length > 0) {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.1));
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = [];
      }
    };
  }, [properties]);

  return (
    <>
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          padding: 0;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
          width: 280px !important;
        }
        .custom-popup .leaflet-popup-tip-container {
          display: none;
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
      <div ref={mapContainerRef} style={{ width: '100%', height }} className="rounded-lg overflow-hidden border border-muted" />
    </>
  );
}
