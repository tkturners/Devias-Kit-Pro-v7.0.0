import * as React from 'react';
import { useTheme } from '@mui/material/styles';

export function useMediaQuery(fn, start, end) {
  const theme = useTheme();
  const [matches, setMatches] = React.useState(false);

  let mq;

  if (['up', 'down'].includes(fn) && start) {
    mq = theme.breakpoints[fn](start);
  } else if (fn === 'between' && start && end) {
    mq = theme.breakpoints[fn](start, end);
  } else if (['only', 'not'].includes(fn) && start) {
    mq = theme.breakpoints[fn](start);
  } else {
    throw new Error('Invalid useMediaQuery params');
  }

  mq = mq.replace(/^@media(?: ?)/m, '');

  React.useEffect(() => {
    setMatches(window.matchMedia(mq).matches);

    function handler(event) {
      setMatches(event.matches);
    }

    const mediaQueryList = window.matchMedia(mq);

    mediaQueryList.addEventListener('change', handler);

    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, [mq]);

  return matches;
}
