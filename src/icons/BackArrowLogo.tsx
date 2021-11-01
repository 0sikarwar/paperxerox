import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrowLogo = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M5.8335 14H22.1668"
        stroke="#2C3E50"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.8335 14L12.8335 21"
        stroke="#2C3E50"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.8335 14L12.8335 7"
        stroke="#2C3E50"
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BackArrowLogo;
