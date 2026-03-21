const breakpointSize = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export type Breakpoints = (typeof breakpointSize)[number];
