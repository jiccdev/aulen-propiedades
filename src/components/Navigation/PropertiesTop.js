import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { icons } from '../Icons';
import { paginationTopLimit } from '../../constants/consts/company';
import { PropertiesContext } from '../../context/properties/PropertiesContext';

const PropertiesTop = ({
  totalItems,
  isGrid,
  setIsGrid,
  isList,
  setIsList,
  properties,
}) => {
  const { contextData } = useContext(PropertiesContext);
  const { sortOrder, handleSortChange } = contextData;
  const { pathname } = useLocation();
  const { BsFillGridFill, FaThList, FaMapMarkerAlt } = icons;

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      case '/soy-inversionista/unidades-nuevas':
        return 'Unidades nuevas';
      default:
        return 'Aulen';
    }
  };

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className="py-5 px-3 mb-4 bg-white w-full">
      <div className="flex justify-between items-center my-4">
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-ligth">{getTitle(pathname)}</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="w-[200px] sm:flex hidden mr-5">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-2 py-1 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
              >
                <option value="">Ordenar por:</option>
                <option value="asc">Menor precio</option>
                <option value="desc">Mayor precio</option>
              </select>
            </li>

            <li
              onClick={() => {
                setIsGrid(true);
                setIsList(false);
              }}
              className={`${
                isGrid
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-500'
              } mx-1 p-2.5 cursor-pointer list-none`}
            >
              <BsFillGridFill />
            </li>
            <li
              onClick={() => {
                setIsList(true);
                setIsGrid(false);
              }}
              className={`${
                isList
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 cursor-pointer text-gray-500'
              } mx-1 p-2.5 cursor-pointer list-none`}
            >
              <FaThList />
            </li>
            <li className="mx-1 p-2.5 bg-gray-100 cursor-pointer text-gray-500 list-none">
              <Link to="/propiedades/propiedades-en-mapa">
                <FaMapMarkerAlt />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start items-center bg-gray-50 text-gray-500">
        <small className="text-sm p-1 rounded">
          Encontradas por página: {properties?.length ?? 0}
        </small>
        <span className="text-gray-300 mx-3">|</span>
        <small className="text-sm p-1 rounded">
          Total Propiedades: {totalItems ?? 0}
        </small>
        <span className="text-gray-300 mx-3">|</span>
        <small className="text-sm p-1 rounded">
          Por página: {paginationTopLimit.limit ?? 0}
        </small>
      </div>
    </div>
  );
};

export default PropertiesTop;
