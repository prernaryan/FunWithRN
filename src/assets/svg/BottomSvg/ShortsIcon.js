import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
const ShortsIcon = ({width, height, isFocues, Colors}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="navigate" clip-path="url(#clip0_131_11333)">
        {isFocues ? (
          <Path
            id="Subtract"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.55583 7.24555C4.64266 8.35012 3.98715 10.7965 5.09172 12.7097C5.46612 13.3581 5.99505 13.8622 6.60477 14.2021L6.30584 14.3747C4.39267 15.4793 3.73717 17.9257 4.84174 19.8388C5.94631 21.752 8.39267 22.4075 10.3058 21.3029L18.1001 16.8029C20.0132 15.6984 20.6687 13.252 19.5642 11.3388C19.1898 10.6904 18.6608 10.1863 18.0511 9.84634L18.3501 9.67375C20.2632 8.56918 20.9187 6.12282 19.8142 4.20965C18.7096 2.29648 16.2632 1.64098 14.3501 2.74555L6.55583 7.24555ZM11.0002 14.5979L15.5002 11.9999L11.0002 9.40178L11.0002 14.5979Z"
            fill={Colors.text}
          />
        ) : (
          <Path
            id="Union (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.05551 8.11172C5.62063 8.94014 5.129 10.7749 5.95743 12.2098C6.38808 12.9557 7.0898 13.4465 7.86769 13.6299C8.06721 13.6769 8.2178 13.841 8.24763 14.0438C8.27745 14.2466 8.18047 14.4471 8.00295 14.5496L6.80552 15.2409C5.37065 16.0693 4.87902 17.9041 5.70745 19.339C6.53588 20.7738 8.37065 21.2655 9.80552 20.437L17.5998 15.937C19.0346 15.1086 19.5263 13.2738 18.6978 11.839C18.2672 11.0931 17.5655 10.6023 16.7876 10.4189C16.5881 10.3718 16.4375 10.2078 16.4076 10.005C16.3778 9.80216 16.4748 9.6017 16.6523 9.4992L17.8497 8.80787C19.2846 7.97944 19.7762 6.14467 18.9478 4.70979C18.1194 3.27491 16.2846 2.78329 14.8497 3.61172L7.05551 8.11172ZM5.0914 12.7098C3.98684 10.7966 4.64234 8.35026 6.55551 7.24569L14.3497 2.74569C16.2629 1.64112 18.7093 2.29662 19.8138 4.20979C20.9184 6.12296 20.2629 8.56932 18.3497 9.67389L18.0508 9.84648C18.6605 10.1864 19.1895 10.6905 19.5639 11.339C20.6684 13.2521 20.0129 15.6985 18.0998 16.8031L10.3055 21.3031C8.39235 22.4076 5.94599 21.7521 4.84142 19.839C3.73685 17.9258 4.39235 15.4794 6.30552 14.3749L6.60445 14.2023C5.99473 13.8624 5.4658 13.3583 5.0914 12.7098Z"
            fill={Colors.text}
          />
        )}
        <Path
          id="Polygon 5"
          d="M15.5 11.9999L11 14.598L11 9.40186L15.5 11.9999Z"
          fill={!isFocues ? Colors.text : Colors.primary}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_131_11333">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ShortsIcon;
