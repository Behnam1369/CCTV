/* eslint-disable */
import React, { useState } from 'react';
import rawDate from '../data';
import style from './Main.module.scss';
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go';
import Camera from './Camera';

const Main = () => {
  const [data, setData] = useState(rawDate);
  const [searchValue, setSearchValue] = useState('');
  const [tilesQty, setTilesQty] = useState(64);
  const tiles = [1, 4, 16, 64];
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

  const activeTileStyle = {
    borderColor: 'yellow', 
    color: 'yellow',
  }

  const camsStyle={
    gridTemplateColumns: `repeat(${Math.sqrt(tilesQty)}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${Math.sqrt(tilesQty)}, minmax(0, 1fr))`,
  }

  const footerStrle = {
    gridColumn: `1/${Math.sqrt(tilesQty) + 1 }`,
  }

  return (
    <div className={style.container}>
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
                  <GoTriangleDown
                    onClick={() => nodeToggle(floor.id)}
                    className={style.nodeIcon}
                  />
                ) : (
                  <GoTriangleRight
                    onClick={() => nodeToggle(floor.id)}
                    className={style.nodeIcon}
                  />
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
        <div className={style.cams} style={camsStyle}>
          {[...new Set([].concat(...data.map((el) => [...el.cams])))]
            .filter((el, i) => i < tilesQty)
            .map((cam) => {
              return <Camera key={cam.id} title={cam.title} url={cam.url} />;
            })}
          <footer style={footerStrle}>
            {tiles.map((qty) => (
              <span
                style={tilesQty === qty ? activeTileStyle : {}}
                onClick={() => setTilesQty(qty)}
              >
                {qty}
              </span>
            ))}
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Main;
