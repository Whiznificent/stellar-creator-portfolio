/**
 * Design tokens — mirrors the web app's Stellar brand palette.
 * Used across all native screens for consistent rendering.
 */

export const Colors = {
  // Brand
  primary:        '#6366f1', // indigo-500
  primaryDark:    '#4f46e5', // indigo-600
  primaryLight:   '#a5b4fc', // indigo-300
  accent:         '#f59e0b', // amber-500
  accentLight:    '#fde68a', // amber-200

  // Semantic
  success:        '#22c55e',
  successLight:   '#bbf7d0',
  warning:        '#f59e0b',
  warningLight:   '#fef3c7',
  error:          '#ef4444',
  errorLight:     '#fee2e2',
  info:           '#3b82f6',
  infoLight:      '#dbeafe',

  // Neutrals — light mode
  background:     '#ffffff',
  surface:        '#f8fafc',
  surfaceElevated:'#f1f5f9',
  border:         '#e2e8f0',
  borderStrong:   '#cbd5e1',
  text:           '#0f172a',
  textSecondary:  '#475569',
  textTertiary:   '#94a3b8',
  textInverse:    '#ffffff',
  placeholder:    '#94a3b8',

  // Neutrals — dark mode
  dark: {
    background:     '#0f172a',
    surface:        '#1e293b',
    surfaceElevated:'#334155',
    border:         '#334155',
    borderStrong:   '#475569',
    text:           '#f8fafc',
    textSecondary:  '#cbd5e1',
    textTertiary:   '#64748b',
    textInverse:    '#0f172a',
    placeholder:    '#64748b',
  },

  // Star rating
  starFilled:     '#f59e0b',
  starEmpty:      '#e2e8f0',
  starHalf:       '#fcd34d',

  // Activity event type colours
  eventBounty:    '#6366f1',
  eventReview:    '#f59e0b',
  eventPayment:   '#22c55e',
  eventMessage:   '#3b82f6',
  eventDispute:   '#ef4444',
  eventMatch:     '#8b5cf6',
  eventProfile:   '#06b6d4',
} as const;

export const Spacing = {
  xs:   4,
  sm:   8,
  md:   12,
  base: 16,
  lg:   20,
  xl:   24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
} as const;

export const Radius = {
  sm:   4,
  md:   8,
  lg:   12,
  xl:   16,
  '2xl': 20,
  full: 9999,
} as const;

export const FontSize = {
  xs:   11,
  sm:   13,
  base: 15,
  md:   16,
  lg:   18,
  xl:   20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const;

export const FontWeight = {
  regular:   '400' as const,
  medium:    '500' as const,
  semibold:  '600' as const,
  bold:      '700' as const,
  extrabold: '800' as const,
};

export const Shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;

export const STAR_COUNT = 5;
