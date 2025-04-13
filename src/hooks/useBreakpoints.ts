import { useState, useEffect } from 'react';

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface UseBreakpointResult {
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const defaultBreakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const useBreakpoint = (breakpoints: Breakpoints = defaultBreakpoints): UseBreakpointResult => {
  const [breakpoint, setBreakpoint] = useState<UseBreakpointResult['breakpoint']>('xs');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) {
        setBreakpoint('xs');
      } else if (width < breakpoints.md) {
        setBreakpoint('sm');
      } else if (width < breakpoints.lg) {
        setBreakpoint('md');
      } else if (width < breakpoints.xl) {
        setBreakpoint('lg');
      } else {
        setBreakpoint('xl');
      }
    };

    handleResize(); // Obtener el breakpoint inicial
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints]);

  return { breakpoint };
};