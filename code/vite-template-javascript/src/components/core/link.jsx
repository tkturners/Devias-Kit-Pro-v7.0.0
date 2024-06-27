import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * This is an adapted for `react-router-dom/link` component.
 * We use this to help us maintain consistency between React-Router and Next.js Router
 */
export const RouterLink = React.forwardRef(function RouterLink(props, ref) {
  const { href, ...other } = props;

  return <Link ref={ref} to={href} {...other} />;
});
