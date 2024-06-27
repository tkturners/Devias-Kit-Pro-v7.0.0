'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';

function styleCache() {
  return createCache({ key: 'rtl', prepend: true, stylisPlugins: [stylisRTLPlugin] });
}

export function Rtl({ children, direction = 'ltr' }) {
  React.useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === 'rtl') {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
