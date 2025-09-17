import React, { useEffect, useRef, useState } from 'react'

const NaverMapContainer = ({ 
  center = [37.5665, 126.9780], // Seoul coordinates [lat, lng]
  zoom = 13,
  properties = [],
  onCenterChange,
  onZoomChange,
  onPropertyClick,
  className = ""
}) => {
  const mapElement = useRef(null)
  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState([])
  
  // Naver Maps Client ID - Replace with your actual client ID
  const NAVER_CLIENT_ID = 'YOUR_NAVER_CLIENT_ID'
  
  useEffect(() => {
    // Load Naver Maps API
    const loadNaverMaps = () => {
      if (window.naver && window.naver.maps) {
        initializeMap()
        return
      }
      
      const script = document.createElement('script')
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}&submodules=geocoder`
      script.onload = () => initializeMap()
      script.onerror = () => {
        console.error('Failed to load Naver Maps API. Please check your client ID.')
        // Fallback to a placeholder
        showMapPlaceholder()
      }
      document.head.appendChild(script)
    }
    
    const initializeMap = () => {
      if (!mapElement.current) return
      
      const mapOptions = {
        center: new window.naver.maps.LatLng(center[0], center[1]),
        zoom: zoom,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: window.naver.maps.MapTypeControlStyle.BUTTON,
          position: window.naver.maps.Position.TOP_LEFT
        },
        scaleControl: true,
        logoControl: false,
        mapDataControl: false,
        zoomControl: false // We'll create custom controls
      }
      
      const naverMap = new window.naver.maps.Map(mapElement.current, mapOptions)
      setMap(naverMap)
      
      // Map event listeners
      window.naver.maps.Event.addListener(naverMap, 'center_changed', () => {
        const newCenter = naverMap.getCenter()
        onCenterChange && onCenterChange([newCenter.lat(), newCenter.lng()])
      })
      
      window.naver.maps.Event.addListener(naverMap, 'zoom_changed', () => {
        const newZoom = naverMap.getZoom()
        onZoomChange && onZoomChange(newZoom)
      })
    }
    
    const showMapPlaceholder = () => {
      if (mapElement.current) {
        mapElement.current.innerHTML = `
          <div style="
            width: 100%; 
            height: 100%; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            display: flex; 
            flex-direction: column;
            align-items: center; 
            justify-content: center;
            color: #64748b;
            font-family: system-ui, -apple-system, sans-serif;
          ">
            <div style="text-align: center; padding: 2rem;">
              <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: #475569;">
                Naver Maps Integration Ready
              </h3>
              <p style="font-size: 0.875rem; color: #64748b; max-width: 400px; line-height: 1.5;">
                To display the interactive map, please configure your Naver Cloud Platform client ID in the component.
              </p>
              <div style="
                margin-top: 1.5rem; 
                padding: 1rem; 
                background: rgba(255,255,255,0.7); 
                border-radius: 8px;
                font-size: 0.75rem;
                color: #374151;
              ">
                <strong>Next Steps:</strong><br>
                1. Sign up for Naver Cloud Platform<br>
                2. Create Maps API application<br>
                3. Replace 'YOUR_NAVER_CLIENT_ID' with your actual client ID
              </div>
            </div>
          </div>
        `
      }
    }
    
    loadNaverMaps()
  }, [])
  
  // Update map center when prop changes
  useEffect(() => {
    if (map && center) {
      map.setCenter(new window.naver.maps.LatLng(center[0], center[1]))
    }
  }, [map, center])
  
  // Update map zoom when prop changes
  useEffect(() => {
    if (map && zoom) {
      map.setZoom(zoom)
    }
  }, [map, zoom])
  
  // Update markers when properties change
  useEffect(() => {
    if (!map || !window.naver) return
    
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null))
    
    // Create new markers
    const newMarkers = properties.map((property) => {
      // Create custom price cluster marker content
      const createPriceClusterContent = (properties, count) => {
        if (count === 1) {
          const property = properties[0]
          const colors = {
            '월세': '#3B82F6', // Blue
            '전세': '#10B981', // Green  
            '매매': '#EF4444'  // Red
          }
          
          return `
            <div style="
              background-color: ${colors[property.type] || '#3B82F6'};
              color: white;
              padding: 8px 12px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: bold;
              white-space: nowrap;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              border: 3px solid white;
              cursor: pointer;
              transform: translate(-50%, -100%);
              font-family: system-ui, -apple-system, sans-serif;
            ">
              ${property.price}
            </div>
          `
        } else {
          return `
            <div style="
              background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
              color: white;
              padding: 10px 14px;
              border-radius: 25px;
              font-size: 14px;
              font-weight: bold;
              white-space: nowrap;
              box-shadow: 0 6px 16px rgba(0,0,0,0.4);
              border: 3px solid white;
              cursor: pointer;
              transform: translate(-50%, -100%);
              font-family: system-ui, -apple-system, sans-serif;
              min-width: 50px;
              text-align: center;
            ">
              ${count}개 매물
            </div>
          `
        }
      }
      
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(property.coordinates[0], property.coordinates[1]),
        map: map,
        icon: {
          content: createPriceClusterContent([property], 1),
          anchor: new window.naver.maps.Point(0, 0)
        }
      })
      
      // Add click event listener
      window.naver.maps.Event.addListener(marker, 'click', () => {
        onPropertyClick && onPropertyClick(property)
        
        // Create enhanced info window with maintenance fee
        const infoWindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding: 16px; min-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
              <h3 style="font-weight: bold; font-size: 15px; margin-bottom: 6px; color: #1f2937;">${property.title}</h3>
              <p style="font-size: 12px; color: #6b7280; margin-bottom: 10px;">${property.location}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-size: 18px; font-weight: bold; color: #1A237E;">${property.price}</span>
                <span style="
                  padding: 3px 10px; 
                  border-radius: 12px; 
                  font-size: 11px; 
                  font-weight: 600;
                  background-color: ${property.type === '월세' ? '#dbeafe' : property.type === '전세' ? '#d1fae5' : '#fee2e2'};
                  color: ${property.type === '월세' ? '#1d4ed8' : property.type === '전세' ? '#047857' : '#dc2626'};
                ">
                  ${property.type}
                </span>
              </div>
              <div style="font-size: 12px; color: #6b7280; line-height: 1.4;">
                <div style="margin-bottom: 4px;">📏 ${property.size} | 🛌 ${property.rooms} | 🏢 ${property.floor}</div>
                <div style="color: #059669; font-weight: 500;">🛠️ ${property.maintenance || '관리비 정보 없음'}</div>
              </div>
            </div>
          `,
          borderWidth: 0,
          disableAutoPan: false,
          backgroundColor: 'white',
          borderColor: '#e5e7eb',
          borderRadius: '10px',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.15)'
        })
        
        infoWindow.open(map, marker)
      })
      
      return marker
    })
    
    setMarkers(newMarkers)
  }, [map, properties])
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div 
        ref={mapElement} 
        className="w-full h-full rounded-lg overflow-hidden"
        style={{ minHeight: '400px' }}
      />
    </div>
  )
}

export default NaverMapContainer