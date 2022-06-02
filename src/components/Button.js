import PropTypes from 'prop-types';
import '../index.css';

const Button = ({ id, onClick, className }) => (
  <>
    <button type="button" id={id} onClick={onClick} className={className}>
      {id}
    </button>
  </>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
