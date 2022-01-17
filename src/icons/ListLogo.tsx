import React from 'react';
import Svg, {Path} from 'react-native-svg';
import svgProps from './svgType';

const ListLogo: React.FC<svgProps> = ({width, height, color, isFill}) => {
  return (
    <Svg
      width={width || '36'}
      height={height || '36'}
      viewBox="0 0 36 36"
      fill="none">
      <Path
        d="M7.875 5.62598H28.125C28.4234 5.62598 28.7095 5.7445 28.9205 5.95548C29.1315 6.16646 29.25 6.45261 29.25 6.75098V28.126C29.25 29.0211 28.8944 29.8795 28.2615 30.5125C27.6286 31.1454 26.7701 31.501 25.875 31.501H10.125C9.22989 31.501 8.37145 31.1454 7.73851 30.5125C7.10558 29.8795 6.75 29.0211 6.75 28.126V6.75098C6.75 6.45261 6.86853 6.16646 7.07951 5.95548C7.29048 5.7445 7.57663 5.62598 7.875 5.62598Z"
        fill={isFill ? color || '#32B768' : undefined}
        stroke={isFill ? undefined : '#4B5563'}
      />
      <Path
        d="M13.5 18.001H22.5"
        stroke={isFill ? 'white' : '#4B5563'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 22.501H22.5"
        stroke={isFill ? 'white' : '#4B5563'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.25 3.37598V7.87598"
        stroke={isFill ? 'white' : '#4B5563'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 3.37598V7.87598"
        stroke={isFill ? 'white' : '#4B5563'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.75 3.37598V7.87598"
        stroke={isFill ? 'white' : '#4B5563'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ListLogo;
