import React from 'react';
import Svg, {Path} from 'react-native-svg';
import svgProps from './svgType';

const UserLogo: React.FC<svgProps> = ({width, height, color, isFill}) => {
  return (
    <Svg
      width={width || '32'}
      height={height || '32'}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M21.3332 9.33333C21.3332 10.7478 20.7713 12.1044 19.7711 13.1046C18.7709 14.1048 17.4143 14.6667 15.9998 14.6667C14.5853 14.6667 13.2288 14.1048 12.2286 13.1046C11.2284 12.1044 10.6665 10.7478 10.6665 9.33333C10.6665 7.91885 11.2284 6.56229 12.2286 5.5621C13.2288 4.5619 14.5853 4 15.9998 4C17.4143 4 18.7709 4.5619 19.7711 5.5621C20.7713 6.56229 21.3332 7.91885 21.3332 9.33333ZM15.9998 18.6667C13.5245 18.6667 11.1505 19.65 9.40017 21.4003C7.64983 23.1507 6.6665 25.5246 6.6665 28H25.3332C25.3332 25.5246 24.3498 23.1507 22.5995 21.4003C20.8492 19.65 18.4752 18.6667 15.9998 18.6667Z"
        fill={isFill ? color || '#32B768' : undefined}
        stroke={isFill ? undefined : '#4B5563'}
      />
    </Svg>
  );
};

export default UserLogo;
