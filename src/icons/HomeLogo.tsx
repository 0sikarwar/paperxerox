import React from 'react';
import Svg, {Path} from 'react-native-svg';
import svgProps from './svgType';

const HomeLogo: React.FC<svgProps> = ({width, height, color, isFill}) => {
  return (
    <Svg
      width={width || '36'}
      height={height || '36'}
      viewBox="0 0 36 36"
      fill="none">
      <Path
        d="M28.4999 13.0651L20.5004 6.84314C19.7984 6.297 18.9344 6.00049 18.0449 6.00049C17.1555 6.00049 16.2914 6.297 15.5894 6.84314L7.58842 13.0651C7.10759 13.4391 6.71856 13.9179 6.45106 14.4652C6.18355 15.0124 6.04463 15.6135 6.04492 16.2226V27.0226C6.04492 27.8183 6.36099 28.5814 6.9236 29.144C7.48621 29.7066 8.24927 30.0226 9.04492 30.0226H27.0449C27.8406 30.0226 28.6036 29.7066 29.1662 29.144C29.7289 28.5814 30.0449 27.8183 30.0449 27.0226V16.2226C30.0449 14.9881 29.4749 13.8226 28.4999 13.0651Z"
        fill={isFill ? color || '#32B768' : undefined}
        stroke={isFill ? undefined : '#4B5563'}
      />
      <Path
        d="M24 22.5C20.685 24.4995 15.312 24.4995 12 22.5"
        stroke={isFill ? 'white' : '#4B5563'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeLogo;
