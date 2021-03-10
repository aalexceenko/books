import PropTypes from 'prop-types';
const {shape} = PropTypes;

export const bookType = shape({
  id: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  releaseYear: PropTypes.number.isRequired,
  description: PropTypes.array.isRequired,
  isbn: PropTypes.number.isRequired,
});
