import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapContainer.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([71.468300, 30.191830]),
        zoom: 8
      })
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div ref={mapContainer} className="w-full h-[500px]" />
  );
};

export default MapComponent;
