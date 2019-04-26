import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div>
      <style jsx>{`
        .keg {
          color: goldenrod;
          text-align: center;
          font-family: sans-serif;
          font-weight: lighter;
          font-size: 16px;
        }
      `}</style>
      <div className="keg">
        <p>Brewer: {props.brewer}</p>
        <p>Price: {props.price}</p>
        <p>ABV: {props.abv}</p>
        <p>Pints Remaining: {props.pintsRemaining}</p>
        <p>Style of beer: {props.style}</p>
        <hr/>
      </div>
    </div>
  );
}

Keg.propTypes = {
  brewer: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired
}

export default Keg;