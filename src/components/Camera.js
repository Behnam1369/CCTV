import React from 'react';
import PropTypes from 'prop-types';

const Camera = (props) => {
  const { title, url } = props;
  return (
    <>
      <iframe
        id="UstreamIframe"
        title={title}
        src={`${url}?html5ui&autoplay=1`}
        allowFullScreen
        webkitallowfullscreen
      />
    </>
  );
};

Camera.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Camera;
