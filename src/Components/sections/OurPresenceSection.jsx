import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';


const OurPresenceSection = () => {
  // Pink dot locations (approximate positions for visual effect)
  const locations = [
    { top: '35%', left: '15%', name: 'North America' },
    { top: '45%', left: '48%', name: 'Middle East' },
    { top: '50%', left: '52%', name: 'India' },
    { top: '55%', left: '50%', name: 'South Asia' },
    { top: '52%', left: '54%', name: 'East Asia' },
    { top: '58%', left: '51%', name: 'Southeast Asia' },
    { top: '60%', left: '48%', name: 'West Asia' },
    { top: '65%', left: '52%', name: 'Africa' },
    { top: '68%', left: '50%', name: 'Central Africa' },
    { top: '70%', left: '53%', name: 'East Africa' },
    { top: '73%', left: '51%', name: 'South Africa' },
    { top: '75%', left: '49%', name: 'Madagascar' },
    { top: '78%', left: '54%', name: 'Southern Africa' },
    { top: '82%', left: '52%', name: 'Cape Region' },
    { top: '62%', left: '88%', name: 'Australia' },
  ];

  return (
    <section style={{ position: 'relative', padding: '100px 0', background: '#0a0d14', overflow: 'hidden' }}>
      
      
      {/* Animated Background Grid */}
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.03 }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 10 }}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '48px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '80px' }}
        >
          Our Global Presence
        </motion.h2>

        {/* World Map Container */}
        <div style={{ position: 'relative', width: '100%', height: '600px', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', overflow: 'hidden' }}>
          
          {/* Continents SVG Paths (Simplified representation) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }} viewBox="0 0 1000 600">
            <path d="M 100 200 Q 150 150 250 180 L 300 250 Q 280 300 200 280 Z" fill="#818cf8" />
            <path d="M 400 250 Q 500 200 600 280 L 650 350 Q 600 400 500 370 L 450 320 Z" fill="#818cf8" />
            <path d="M 800 350 Q 900 320 950 400 L 920 480 Q 850 500 800 450 Z" fill="#818cf8" />
          </svg>

          {/* Animated Pink Dots */}
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ position: 'absolute', top: location.top, left: location.left, cursor: 'pointer' }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#ec4899',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px #ec4899'
                }}
              />
              
              {/* Tooltip on hover */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.8)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                color: 'white',
                whiteSpace: 'nowrap',
                opacity: 0,
                pointerEvents: 'none',
                transition: 'opacity 0.3s'
              }}
              className="location-tooltip">
                {location.name}
              </div>
            </motion.div>
          ))}

          {/* Connection Lines Animation */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {locations.slice(0, -1).map((loc, index) => {
              const nextLoc = locations[index + 1];
              return (
                <motion.line
                  key={index}
                  x1={`${parseFloat(loc.left)}%`}
                  y1={`${parseFloat(loc.top)}%`}
                  x2={`${parseFloat(nextLoc.left)}%`}
                  y2={`${parseFloat(nextLoc.top)}%`}
                  stroke="#ec4899"
                  strokeWidth="1"
                  opacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <style jsx>{`
        .location-tooltip {
          opacity: 0;
        }
        div:hover .location-tooltip {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default OurPresenceSection;
