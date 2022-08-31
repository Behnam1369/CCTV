/* eslint-disable */
import React, { useState } from 'react';
import rawDate from '../data';
import style from './Main.module.scss';
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go';

const Main = () => {
  const [data, setData] = useState(rawDate);
  const [searchValue, setSearchValue] = useState('');
  const search = (val) => {
    setData(
      data.map((el) => {
        return { ...el, isOpen: true };
      })
    );
    setSearchValue(val);
  };

  const nodeToggle = (id) => {
    setData(
      data.map((el) => {
        return el.id !== id ? { ...el } : { ...el, isOpen: !el.isOpen };
      })
    );
  };
  return (
    <div class={style.container}>
      <header>
        <h1>HOOSHE NO</h1>
      </header>
      <main>
        <div className={style.list}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => search(e.target.value)}
          />
          <ul>
            {data.map((floor) => (
              <li key={floor.id}>
                {floor.isOpen ? (
                  <GoTriangleDown onClick={() => nodeToggle(floor.id)} />
                ) : (
                  <GoTriangleRight onClick={() => nodeToggle(floor.id)} />
                )}
                {floor.title}
                {floor.isOpen && (
                  <ul>
                    {floor.cams
                      .filter((cam) =>
                        cam.title
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      )
                      .map((cam) => (
                        <li key={cam.id}>{cam.title}</li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="cams" />
      </main>
    </div>
  );
};

export default Main;
