import React from 'react';
import PropTypes from 'prop-types';

interface AlertProps {
  message: string;
  type?: 'info' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const background = type === 'error' ? '#f8d7da' : '#d1ecf1';
  const color = type === 'error' ? '#721c24' : '#0c5460';

  return (
    <div style={{
      padding: '10px 20px',
      backgroundColor: background,
      color: color,
      borderRadius: '4px',
      margin: '10px 0'
    }}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error'])
};

export default Alert;
