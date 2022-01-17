import React from 'react';
import Svg, {Path} from 'react-native-svg';
import svgProps from './svgType';

const RightArrowLogo: React.FC<svgProps> = ({width, height, color}) => {
  return (
    <Svg
      width={width || 12}
      height={height || 12}
      viewBox="0 0 7 12"
      fill="none">
      <Path
        d="M1.25 1.625L5.625 6L1.25 10.375"
        stroke={color || '#9CA3AF'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightArrowLogo;
