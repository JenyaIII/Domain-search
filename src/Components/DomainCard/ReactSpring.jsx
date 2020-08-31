/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSpring, animated } from 'react-spring/web.cjs';
import PropTypes from 'prop-types';

const Fade = React.forwardRef((props, ref) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default Fade;

Fade.defaultProps = {
  onEnter: () => {},
  onExited: () => {},

};

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};
