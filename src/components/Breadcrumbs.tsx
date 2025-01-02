import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setBreadcrumbs } from '../redux/slice/breadcrumbsSlice';
import { IBreadcrumb } from '../types/breadcrumbs.types';

const routes: { [key: string]: string } = {
  '/': 'Главная',
  '/batteries': 'Аккумуляторы',
  '/oils': 'Масла',
  '/sparkplugs': 'Свечи накаливания',
  '/about': 'О компании',
  '/license': 'Лицензии',
  '/partners': 'Партнеры',
  '/reviews': 'Отзывы клиентов',
  '/catalog': 'Каталог'
};

const Breadcrumbs = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { breadcrumbs } = useAppSelector(state => state.breadcrumbs);

  useEffect(() => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const newBreadcrumbs: IBreadcrumb[] = [{ path: '/', label: 'Главная' }];

    pathnames.forEach((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      if (routes[path]) {
        newBreadcrumbs.push({ path, label: routes[path] });
      }
    });

    dispatch(setBreadcrumbs(newBreadcrumbs));
  }, [location.pathname, dispatch]);

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1640px] mx-auto px-4 py-2">
        <div className="flex items-center text-gray-600">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.path} className="flex items-center">
              {index > 0 && <span className="mx-2">&gt;</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-my-red">{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-my-red">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs; 