import PropTypes from 'prop-types';
import { NotificationArea, NotificationTitle } from './Notification.styled';

export default function Notification({ message }) {
  return (
    <NotificationArea>
      <NotificationTitle>{message}</NotificationTitle>
    </NotificationArea>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
