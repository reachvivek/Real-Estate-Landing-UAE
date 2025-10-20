'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface PropertyLocationMapProps {
  lat: number;
  lng: number;
  title: string;
  address: string;
  price: number;
}

export default function PropertyLocationMap({ lat, lng, title, address, price }: PropertyLocationMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map centered on property location
    const map = L.map(mapContainerRef.current).setView([lat, lng], 15);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Create custom marker icon
    const priceFormatted = new Intl.NumberFormat('en-US').format(price);
    const markerHtml = '<div style="background:#000000;color:white;padding:8px 16px;border-radius:24px;font-weight:600;font-size:14px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.2);">AED ' + priceFormatted + '</div>';

    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: markerHtml,
      iconSize: [120, 40],
      iconAnchor: [60, 40],
    });

    // Add marker for the property
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

    // Create popup content
    const popupContent = '<div style="min-width:250px;">' +
      '<div style="font-weight:700;font-size:16px;margin-bottom:8px;color:#000;">' + title + '</div>' +
      '<div style="color:#666;font-size:14px;margin-bottom:12px;">' + address + '</div>' +
      '<div style="font-weight:700;font-size:18px;color:#000;margin-bottom:12px;">AED ' + priceFormatted + '</div>' +
      '<a href="https://www.google.com/maps/dir/?api=1&destination=' + lat + ',' + lng + '" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#000;color:white;padding:8px 16px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">Get Directions</a>' +
      '</div>';

    marker.bindPopup(popupContent, {
      maxWidth: 300,
      className: 'custom-popup',
    }).openPopup();

    // Add circle to highlight the area
    L.circle([lat, lng], {
      color: '#000000',
      fillColor: '#000000',
      fillOpacity: 0.1,
      radius: 200,
    }).addTo(map);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, title, address, price]);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-border">
      <div ref={mapContainerRef} className="w-full h-full" />
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 4px;
        }
        .custom-popup .leaflet-popup-content {
          margin: 12px;
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
      `}</style>
    </div>
  );
}
