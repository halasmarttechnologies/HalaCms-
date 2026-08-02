import React from 'react'
import { NavbarProps } from 'sanity'

export function CustomNavbar(props: NavbarProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Top Custom Header Bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #334155',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '18px',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(37,99,235,0.4)',
            }}
          >
            H
          </div>
          <div>
            <div
              style={{
                fontWeight: '700',
                fontSize: '16px',
                letterSpacing: '-0.02em',
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Hala CMS Portal
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>
              Smart Technologies Official Dashboard
            </div>
          </div>
        </div>

        {/* Action Badges & Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '600',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
              }}
            />
            Live Sanity Engine
          </span>

          <a
            href="https://halatechnologies.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#38bdf8',
              fontSize: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              transition: 'all 0.2s ease',
            }}
          >
            Main Website ↗
          </a>
        </div>
      </div>

      {/* Render Default Sanity Studio Header */}
      {props.renderDefault(props)}
    </div>
  )
}
