import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

function CameraListItem(props) {
  const { id, title } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'camera',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={drag}
      id={id}
      style={{
        border: isDragging ? 'solid 1px yellow' : 'solid 1px transparent',
      }}
    >
      {title}
    </li>
  );
}

CameraListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default CameraListItem;
