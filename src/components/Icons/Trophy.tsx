"use client";
import React from "react";
import { IconProps } from "./types";
import { keyframes, styled } from "@mui/material";

const flipTrophy = keyframes`
  from {
    transform: rotateZ(16deg) translateY(-1rem) scale(1.1);
  }
  50% {
    transform: rotateZ(0) translateY(0) scale(0.9);
  }
  to {
    transform: rotateZ(-16deg)  translateY(-1rem) scale(1.1);
  }
`;

const TrophySVG = styled("svg")`
  animation: ${flipTrophy} alternate 1s infinite ease-in-out;
`;

function TrophyIcon({ size = 159 }: IconProps) {
  return (
    <TrophySVG
      width={size}
      height={size + 8}
      viewBox={`0 0 ${size} ${size + 8}`}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M153.548 11.1628H125.385L118.185 72.0793H128.152C145.057 72.0793 158.761 58.4427 158.761 41.621V16.3503C158.761 13.4853 156.427 11.1628 153.548 11.1628ZM146.69 20.6539H125.478L122.883 62.5651L130.249 60.5112C140.441 57.6696 147.71 48.7219 148.367 38.2097L149.291 23.4085C149.295 23.3549 149.297 23.3013 149.297 23.2476C149.297 21.8151 148.13 20.6539 146.69 20.6539Z"
        fill="#FFC300"
      />
      <g filter="url(#filter0_i_3279_47)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.45226 11.1628H33.6148L40.8147 72.0793H30.8478C13.9431 72.0793 0.23914 58.4427 0.23914 41.621V16.3503C0.23914 13.4853 2.57313 11.1628 5.45226 11.1628ZM12.3101 20.6539H33.5221L36.1172 62.5651L28.7507 60.5112C18.5587 57.6696 11.2896 48.7219 10.633 38.2097L9.70851 23.4085C9.70517 23.3549 9.70349 23.3013 9.70349 23.2476C9.70349 21.8151 10.8705 20.6539 12.3101 20.6539Z"
          fill="#FFC300"
        />
      </g>
      <rect
        x="28.6721"
        y="151.438"
        width="101.656"
        height="3.89062"
        rx="1.94531"
        fill="#FFC300"
      />
      <g filter="url(#filter1_i_3279_47)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.4668 0.653107H79.4815H79.7747H122.789C124.225 0.653107 125.389 1.81717 125.389 3.25311V46.1463C125.389 46.1463 125.389 65.0088 111.162 81.5253C107.031 86.3211 102.878 89.8393 99.182 92.9706C91.1018 99.8156 85.2036 104.812 86.4859 117.266L79.7747 117.32V117.322L79.6281 117.321L79.4815 117.322V117.32L72.7704 117.266C74.0526 104.812 68.1544 99.8156 60.0742 92.9706C56.3779 89.8393 52.2249 86.3211 48.0939 81.5253C33.8668 65.0088 33.8668 46.1463 33.8668 46.1463V3.25311C33.8668 1.81717 35.0308 0.653107 36.4668 0.653107Z"
          fill="#FFC300"
        />
      </g>
      <rect
        x="11.7295"
        y="163.109"
        width="24.7623"
        height="3.89062"
        rx="1.94531"
        fill="#FFC300"
      />
      <rect
        x="46.918"
        y="116.719"
        width="65.1639"
        height="35.0156"
        fill="#EC610A"
      />
      <rect
        x="57.3443"
        y="124.5"
        width="44.3115"
        height="19.4531"
        fill="#FFC300"
      />
      <rect
        x="50.8279"
        y="163.109"
        width="19.5492"
        height="3.89062"
        rx="1.94531"
        fill="#FFC300"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.5 55.1172L64.9451 62.7316L67.7249 46.6041L55.9497 35.1825L72.2226 32.8295L79.5 18.1562L86.7775 32.8295L103.05 35.1825L91.2752 46.6041L94.0549 62.7316L79.5 55.1172Z"
        fill="#EC610A"
      />
      <path
        d="M43.7294 36.5996C43.7294 36.5996 44.7783 54.8276 49.6025 64.5243"
        stroke="#EC610A"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.6982 72.7344C53.6982 72.7344 57.268 78.0203 59.5866 80.284"
        stroke="#EC610A"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="78.1967"
        y="163.109"
        width="13.0328"
        height="3.89062"
        rx="1.94531"
        fill="#FFC300"
      />
      <rect
        x="104.262"
        y="163.109"
        width="53.4344"
        height="3.89062"
        rx="1.94531"
        fill="#FFC300"
      />
      <defs>
        <filter
          id="filter0_i_3279_47"
          x="0.239136"
          y="11.1628"
          width="40.5756"
          height="60.9165"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_3279_47"
          />
        </filter>
        <filter
          id="filter1_i_3279_47"
          x="33.8668"
          y="0.653107"
          width="91.5227"
          height="116.669"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_3279_47"
          />
        </filter>
      </defs>
    </TrophySVG>
  );
}

export default TrophyIcon;
