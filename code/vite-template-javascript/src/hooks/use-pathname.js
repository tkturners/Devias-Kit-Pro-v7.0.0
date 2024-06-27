import { useLocation } from 'react-router-dom';

export function usePathname() {
  const location = useLocation();

  return location.pathname;
}
