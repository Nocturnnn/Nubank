import type { SVGProps } from 'react'

import type { IconName } from '../types/theme'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 1.8,
}

export function Icon({ name, className, ...props }: IconProps) {
  switch (name) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <path
            {...strokeProps}
            d="M12 3.5 5.5 6v5.2c0 4.2 2.7 8.1 6.5 9.3 3.8-1.2 6.5-5.1 6.5-9.3V6L12 3.5Z"
          />
          <path {...strokeProps} d="m9.5 12 1.7 1.7L15 10" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <path {...strokeProps} d="M4.5 18.5h15" />
          <path {...strokeProps} d="M6.5 15.5 10 12l3 2.5 4.5-6" />
          <circle cx="6.5" cy="15.5" r="1" fill="currentColor" />
          <circle cx="10" cy="12" r="1" fill="currentColor" />
          <circle cx="13" cy="14.5" r="1" fill="currentColor" />
          <circle cx="17.5" cy="8.5" r="1" fill="currentColor" />
        </svg>
      )
    case 'world':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <circle {...strokeProps} cx="12" cy="12" r="8.5" />
          <path {...strokeProps} d="M4.5 12h15" />
          <path
            {...strokeProps}
            d="M12 3.5c2.8 2.4 4.5 5.4 4.5 8.5S14.8 18.1 12 20.5C9.2 18.1 7.5 15.1 7.5 12S9.2 5.9 12 3.5Z"
          />
        </svg>
      )
    case 'orbit':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <circle {...strokeProps} cx="12" cy="12" r="2.2" />
          <ellipse {...strokeProps} cx="12" cy="12" rx="8.5" ry="4.2" />
          <ellipse
            {...strokeProps}
            cx="12"
            cy="12"
            rx="4.2"
            ry="8.5"
            transform="rotate(26 12 12)"
          />
        </svg>
      )
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <path
            {...strokeProps}
            d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Z"
          />
          <path
            {...strokeProps}
            d="M18.5 4.5 19 6l1.5.5L19 7l-.5 1.5L18 7l-1.5-.5L18 6l.5-1.5Z"
          />
          <path
            {...strokeProps}
            d="M5 15.5 5.6 17l1.4.5-1.4.5L5 19.5l-.6-1.5-1.4-.5 1.4-.5L5 15.5Z"
          />
        </svg>
      )
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <rect
            {...strokeProps}
            x="5.5"
            y="10.5"
            width="13"
            height="9"
            rx="2.5"
          />
          <path {...strokeProps} d="M8.5 10.5V8.7a3.5 3.5 0 1 1 7 0v1.8" />
          <circle cx="12" cy="14.8" r="1.1" fill="currentColor" />
        </svg>
      )
    case 'flash':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <path
            {...strokeProps}
            d="M13.2 3.5 6.5 13h4.1l-.8 7.5 7.7-10h-4.2l-.1-7Z"
          />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <rect
            {...strokeProps}
            x="4.5"
            y="7.5"
            width="15"
            height="11"
            rx="2.5"
          />
          <path
            {...strokeProps}
            d="M9 7.5V6.2c0-.9.7-1.7 1.7-1.7h2.6c1 0 1.7.8 1.7 1.7v1.3"
          />
          <path {...strokeProps} d="M4.5 11.5h15" />
        </svg>
      )
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <path {...strokeProps} d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" />
          <path {...strokeProps} d="m6 12 6 3.5 6-3.5" />
          <path {...strokeProps} d="m6 15.5 6 3.5 6-3.5" />
        </svg>
      )
    case 'vault':
      return (
        <svg viewBox="0 0 24 24" className={className} {...props}>
          <rect
            {...strokeProps}
            x="4.5"
            y="5.5"
            width="15"
            height="13"
            rx="2.5"
          />
          <circle {...strokeProps} cx="13.5" cy="12" r="2.4" />
          <path {...strokeProps} d="M13.5 9.6v4.8M11.1 12h4.8M7.5 8.5h2" />
        </svg>
      )
  }
}
