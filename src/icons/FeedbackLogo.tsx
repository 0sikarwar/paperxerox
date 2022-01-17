import React from 'react';
import Svg, {Path} from 'react-native-svg';
import svgProps from './svgType';

const FeedbackLogo: React.FC<svgProps> = ({width, height, color}) => {
  return (
    <Svg
      width={width || 22}
      height={height || 22}
      viewBox="0 0 22 22"
      fill="none">
      <Path
        d="M11.3438 18.562H4.09635C3.92162 18.562 3.75403 18.4926 3.63047 18.369C3.50691 18.2455 3.4375 18.0779 3.4375 17.9032V10.6557C3.4375 9.61748 3.642 8.58939 4.03933 7.63016C4.43665 6.67093 5.01902 5.79936 5.75318 5.06519C6.48734 4.33103 7.35892 3.74866 8.31815 3.35134C9.27738 2.95401 10.3055 2.74951 11.3437 2.74951H11.3438C12.382 2.74951 13.4101 2.95401 14.3693 3.35134C15.3286 3.74867 16.2001 4.33104 16.9343 5.0652C17.6685 5.79936 18.2508 6.67094 18.6482 7.63017C19.0455 8.5894 19.25 9.6175 19.25 10.6558V10.6558C19.25 12.7526 18.417 14.7636 16.9343 16.2463C15.4516 17.729 13.4406 18.562 11.3438 18.562Z"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.59375 9.62451H13.75"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.59375 12.3745H13.75"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FeedbackLogo;
