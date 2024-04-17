import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { IRoute } from '../../interfaces/route.interface';

const Navbar: React.FC<any> = () => {
  return (
    <div>
      <ul>
        {
            routes.map((r: IRoute, i: number) => {
                return(
                    <li>
                        <Link to={r.path} key={i}>{r.name}</Link>
                    </li>
                );
            })
        }
      </ul>
    </div>
  );
};

export default Navbar;