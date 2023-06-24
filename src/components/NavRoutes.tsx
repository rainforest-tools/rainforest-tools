import clsx from 'clsx';
import { useState } from 'react';

export interface IRoute {
  name: string;
  href?: string;
  routes?: IRoute[];
}

interface IProps {
  routes: IRoute[];
}

const NavRoutes = ({ routes }: IProps) => {
  const [open, setOpen] = useState(true);

  const createRouteItem = (route: IRoute, depth: number, recursive = true) => {
    if (route.routes) {
      return (
        <li key={route.name}>
          <a
            href={route.href}
            className={clsx(!route.href && 'pointer-events-none')}
          >
            {route.name}
          </a>
          {recursive && (
            <ul>
              {route.routes.map((route) => createRouteItem(route, depth + 1))}
            </ul>
          )}
        </li>
      );
    }
    return (
      <li key={route.name} className={clsx(!route.href && 'disabled')}>
        <a href={route.href}>{route.name}</a>
      </li>
    );
  };

  return (
    <ul className='menu menu-horizontal'>
      {routes.map((route) => createRouteItem(route, 0, open))}
    </ul>
  );
};

export default NavRoutes;
