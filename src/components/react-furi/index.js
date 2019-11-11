import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './style.css';
import { combineFuri } from './utils';

const styles = {
  wrapper : {
    display: "flex",
  },

  pair : {
    display: "inline-flex",
    fontSize: 24,
    height: 1,
    align: "center",
    alignself: "flex-end",
  },

  furi: {
    fontSize: 12,
    margin: "0.1em",
    opacity: "0.9",
  },
}

function ReactFuri({ word, reading, furi, showFuri, render, ...props }) {
  const pairs = combineFuri(word, reading, furi);

  return render ? (
    render({ pairs })
  ) : (
    <span className="react-furi-wrapper">
      {pairs.map(([furiText, text], index) => (
        // "list" is static, index is fine
        // eslint-disable-next-line react/no-array-index-key
        <span className="react-furi-pair" key={index}>
          {showFuri && 
            <span className="react-furi-furigana">{furiText}</span>
          }
          <span className="react-fury-text">{text}</span>
        </span>
      ))}
    </span>
  );
}

ReactFuri.propTypes = {
  word: PropTypes.string.isRequired,
  reading: PropTypes.string,
  furi: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  showFuri: PropTypes.bool,
  render: PropTypes.func, // eslint-disable-line react/require-default-props
};

ReactFuri.defaultProps = {
  reading: '',
  furi: '',
  showFuri: true,
};

// ReactFuri.Wrapper = Wrapper;
// ReactFuri.Pair = Pair;
// ReactFuri.Furi = Furi;
// ReactFuri.Text = Text;

export default ReactFuri;
