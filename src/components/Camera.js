import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import style from './Camera.module.scss';
import { assignStreamToCamera } from '../redux/camerasReducer';

const Camera = (props) => {
  const { id, title, url } = props;
  const [timeLeft, setTimeLeft] = useState(3);
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'camera',
    drop: (item) => {
      dispatch(assignStreamToCamera(item.id, id));
      setTimeLeft(3);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className={style.container}>
      <iframe
        id="UstreamIframe"
        title={title}
        src={`${url}?mute=1&html5ui&autoplay=1&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0`}
        allowFullScreen
        webkitallowfullscreen
        className={style.iframe}
      />
      <div
        className={style.overlay}
        ref={drop}
        // eslint-disable-next-line no-nested-ternary
        style={{ backgroundColor: isOver ? '#040473a3' : timeLeft ? '#040473ff' : '' }}
      >
        {isOver && <h1>Drop here</h1>}
        {timeLeft > 0 && (
          <h1>
            {`Loading ${title}`}
            <br />
            {timeLeft}
          </h1>
        )}
      </div>
    </div>
  );
};

Camera.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Camera;
