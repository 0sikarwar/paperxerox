import React from 'react';
import Svg, {Path} from 'react-native-svg';
import svgProps from './svgType';

const LangLogo: React.FC<svgProps> = ({width, height, color}) => {
  return (
    <Svg
      width={width || 19}
      height={height || 17}
      viewBox="0 0 19 17"
      fill="none">
      <Path
        d="M1 2C1 1.44772 1.44772 1 2 1H17C17.5523 1 18 1.44772 18 2V11.8182C18 12.3705 17.5523 12.8182 17 12.8182H12.486C12.1792 12.8182 11.8893 12.9591 11.6997 13.2004L10.2863 14.9992C9.88594 15.5088 9.11406 15.5088 8.71368 14.9992L7.30028 13.2004C7.1107 12.9591 6.82083 12.8182 6.51396 12.8182H2C1.44772 12.8182 1 12.3705 1 11.8182V2Z"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Path
        d="M6 10L6.83916 7.84615M12 10L10.9091 7.84615M6.83916 7.84615L8.55423 3.44414C8.6186 3.27894 8.85017 3.27297 8.92296 3.43464L10.9091 7.84615M6.83916 7.84615H10.9091"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LangLogo;
