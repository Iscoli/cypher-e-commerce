import {Spinner} from 'react-bootstrap';

import './DisplaySpinner.css'


const DisplaySpinner = () => {
  return (
    <div className="spinner-container">
     <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      
      </div>

      
  );
};
export default DisplaySpinner;