import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { IRoute } from '../../interfaces/route.interface';

const Navbar: React.FC<any> = () => {
    return (
        <div className="bg-light">
            <div className='container mb-4 py-2 d-flex align-items-center justify-content-between'>
                <h2>React Boilerplate</h2>

                <ul className='d-flex list-unstyled'>
                    {
                        routes.map((r: IRoute, i: number) => {
                            return (
                                <li className='px-3' key={i}>
                                    <Link to={r.path}>{r.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;