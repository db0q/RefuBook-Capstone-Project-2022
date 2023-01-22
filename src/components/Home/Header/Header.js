import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserAuth } from '../../../context/authContext';

export default function Header() {
  const { t } = useTranslation();
  const { user } = UserAuth();
  return (
    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div className="mt-12 lg:mt-0 lg:text-left">
            <h1 className="text-prim text-7xl font-black">
              {' '}
              {t('home.hero.appTitle')}
            </h1>
            <h3 className="text-lightRed text-6xl font-medium">
              {t('home.hero.subtitle1')} <br /> {t('home.hero.subtitle2')}
            </h3>
            <p className="text-gray-500">{t('home.hero.content')}</p>
            {!user ? (
              <button className="bg-prim px-4 py-2 rounded-full text-white font-medium">
                {t('home.hero.button')}
              </button>
            ) : (
              false
            )}
          </div>
          <div className="mb-12 lg:mb-0">
            <svg
              className="w-full"
              viewBox="0 0 517 472"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_55_209)">
                <path
                  d="M209.44 461.333C209.461 466.749 179.108 471.299 141.557 471.447C104.005 471.595 73.6174 467.284 73.596 461.869C73.5747 456.454 103.928 451.903 141.479 451.755C179.031 451.607 209.418 455.754 209.44 461.333Z"
                  fill="#AEE4ED"
                />
                <path
                  d="M448.195 455.469C486.12 455.319 516.852 451.892 516.835 447.813C516.819 443.735 486.062 440.55 448.136 440.7C410.211 440.849 379.479 444.277 379.495 448.355C379.512 452.433 410.269 455.618 448.195 455.469Z"
                  fill="#AEE4ED"
                />
                <path
                  d="M23.1001 366.397L15.0212 366.429L14.9863 357.567L9.89962 357.587L9.93457 366.449L1.85575 366.481L1.87775 372.06L9.95658 372.028L9.99153 380.89L15.0782 380.869L15.0432 372.008L23.1221 371.976L23.1001 366.397Z"
                  fill="#30C5CC"
                />
                <path
                  d="M30.3668 350.122C30.3784 353.076 28.144 355.546 25.4511 355.557C22.7581 355.567 20.5043 353.115 20.4926 350.161C20.481 347.207 22.7154 344.737 25.4083 344.726C28.1006 344.552 30.3545 347.004 30.3668 350.122Z"
                  fill="#3D9CFF"
                />
                <path
                  d="M447.903 419.367L67.5995 420.867C52.3395 420.928 39.8683 407.356 39.8023 390.618L38.5306 68.1625C38.4645 51.4244 50.8283 37.7552 66.0883 37.695L446.391 36.1951C461.651 36.1349 474.123 49.7062 474.189 66.4443L475.46 388.9C475.526 405.638 463.163 419.307 447.903 419.367Z"
                  fill="#30C5CC"
                />
                <path
                  d="M70.9867 407.234C61.1126 407.272 52.9989 398.443 52.9561 387.612L51.7083 71.2285C51.6656 60.3979 59.7095 51.5047 69.5836 51.4658L443.005 49.993C452.879 49.9541 460.993 58.7836 461.035 69.6141L462.283 385.998C462.326 396.829 454.282 405.722 444.408 405.761L70.9867 407.234Z"
                  fill="#0B9B9B"
                />
                <path
                  d="M440.029 395.44L75.2846 396.878C68.8515 396.904 63.5925 391.181 63.5647 384.124L62.3435 74.4686C62.3156 67.4124 67.5292 61.6482 73.9624 61.6229L438.706 60.1843C445.139 60.159 450.398 65.8818 450.426 72.9381L451.648 382.758C451.526 389.815 446.462 395.414 440.029 395.44Z"
                  fill="#C6F4FF"
                />
                <path
                  d="M13.6436 396.465C22.3829 412.184 38.2834 422.788 56.386 422.717L459.28 421.128C477.233 421.057 493.049 410.328 501.814 394.54L13.6436 396.465Z"
                  fill="#0B9B9B"
                />
                <path
                  d="M18.9102 404.157L496.459 402.273C498.394 399.804 500.179 397.336 501.664 394.54L13.6436 396.465C15.1506 399.249 16.9556 401.703 18.9102 404.157Z"
                  fill="#30C5CC"
                />
                <path
                  d="M202.065 260.502L93.5993 260.929L93.8621 327.554L202.328 327.126L202.065 260.502Z"
                  fill="#DB5A28"
                />
                <path
                  d="M239.991 89.85L199.148 90.011L199.173 96.2468L240.016 96.0858L239.991 89.85Z"
                  fill="#30C5CC"
                />
                <path
                  d="M171.172 90.1214L146.337 90.2194L146.362 96.4552L171.196 96.3572L171.172 90.1214Z"
                  fill="#30C5CC"
                />
                <path
                  d="M138.856 90.2488L89.4859 90.4435L89.5105 96.6793L138.881 96.4846L138.856 90.2488Z"
                  fill="#30C5CC"
                />
                <path
                  d="M189.873 90.0476L179.101 90.0901L179.126 96.3259L189.897 96.2834L189.873 90.0476Z"
                  fill="#30C5CC"
                />
                <path
                  d="M275.149 89.7113L250.314 89.8093L250.339 96.0451L275.174 95.9471L275.149 89.7113Z"
                  fill="#30C5CC"
                />
                <path
                  d="M214.48 108.002L199.22 108.062L199.244 114.298L214.504 114.238L214.48 108.002Z"
                  fill="#30C5CC"
                />
                <path
                  d="M235.873 107.917L220.614 107.978L220.638 114.213L235.898 114.153L235.873 107.917Z"
                  fill="#30C5CC"
                />
                <path
                  d="M145.81 108.273L120.975 108.371L120.999 114.606L145.834 114.508L145.81 108.273Z"
                  fill="#30C5CC"
                />
                <path
                  d="M113.943 108.398L89.5571 108.495L89.5817 114.73L113.968 114.634L113.943 108.398Z"
                  fill="#30C5CC"
                />
                <path
                  d="M193.834 108.083L152.841 108.245L152.866 114.481L193.858 114.319L193.834 108.083Z"
                  fill="#30C5CC"
                />
                <path
                  d="M162.867 450.194C160.288 441.179 155.05 402.799 153.943 387.706C153.632 384.59 121.711 370.931 121.711 370.931C103.008 370.513 93.4649 378.591 93.4649 378.591L138.413 394.988C138.5 417.142 155.837 450.55 155.837 450.55L162.867 450.194Z"
                  fill="#2F2F8E"
                />
                <path
                  d="M124.217 399.475L111.103 450.398L118.74 452.173C121.984 440.181 140.971 398.916 141.551 393.991C141.692 391.857 141.685 390.216 140.935 389.727C140.185 389.073 118.735 375.045 112.446 373.593C104.059 371.493 91.6288 368.26 91.6288 368.26C91.6288 368.26 84.629 376.328 86.0272 389.451C87.2752 402.41 124.217 399.475 124.217 399.475Z"
                  fill="#4C49A2"
                />
                <path
                  d="M105.761 309.948C105.761 309.948 91.1057 311.483 90.524 315.752C89.9431 320.185 97.6818 347.723 97.6818 347.723L90.2869 369.414C90.2869 369.414 111.404 375.074 121.561 370.767C122.61 371.256 124.164 347.947 124.164 347.947L127.709 336.446L132.415 353.658L143.102 370.026L150.109 363.763L142.27 348.86C142.27 348.86 130.183 318.877 127.028 315.444C121.019 309.231 105.761 309.948 105.761 309.948Z"
                  fill="white"
                />
                <path
                  d="M117.435 311.051L116.174 294.645L105.252 294.688L105.313 310.114C103.967 310.283 106.858 322.579 115.685 322.545C115.685 322.545 119.718 320.888 117.435 311.051Z"
                  fill="#E67750"
                />
                <path
                  d="M95.2538 339.035C96.6197 343.953 97.5322 347.724 97.5322 347.724L90.1372 369.414C90.1372 369.414 106.162 373.618 117.077 371.934C116.027 371.117 103.123 361.65 102.508 357.55C101.277 348.858 95.2538 339.035 95.2538 339.035Z"
                  fill="#EFEFEF"
                />
                <path
                  d="M127.03 278.028C126.115 273.765 120.126 272.64 110.556 273.827C104.126 274.672 102.656 281.242 102.525 286.002C102.376 286.002 102.376 286.002 102.226 286.003C99.9851 286.832 98.4981 289.136 98.5084 291.761C98.5136 293.074 98.9669 294.221 99.8685 295.202C100.772 296.675 102.122 297.655 103.769 297.976C104.218 297.975 104.667 297.973 105.116 297.971C107.833 304.032 112.8 311.725 119.678 310.714C129.821 302.961 127.03 278.028 127.03 278.028Z"
                  fill="#FD9E71"
                />
                <path
                  d="M105.38 289.109C105.38 289.109 103.263 283.537 108.036 279.744C112.808 275.787 113.13 281.529 118.07 282.33C123.01 283.131 127.946 282.62 127.511 286.231C130.471 278.015 126.114 273.437 121.167 270.831C116.219 268.225 108.585 267.27 103.368 272.05C98.1509 276.993 98.7953 288.642 98.7953 288.642C102.229 286.659 103.132 288.133 105.38 289.109Z"
                  fill="#201251"
                />
                <path
                  d="M103.218 272.05C103.218 272.05 98.8284 259.104 90.4633 262.419C82.0982 265.734 85.9109 284.098 85.045 292.143C84.1791 300.187 78.9441 300.536 76.9849 296.933C73.5724 304.167 87.2159 311.498 91.6769 304.588C96.1373 297.514 93.5248 279.966 96.3602 278.149C99.1956 276.333 102.047 278.619 102.047 278.619L103.218 272.05Z"
                  fill="#201251"
                />
                <path
                  d="M90.9677 314.437C87.5358 316.748 81.0573 343.194 81.0748 347.625C81.0922 352.055 112.296 373.594 112.296 373.594C112.296 373.594 113.771 368.173 117.058 367.175C116.459 366.849 93.7746 343.308 93.7746 343.308L99.6858 324.741C99.5355 324.578 99.474 308.988 90.9677 314.437Z"
                  fill="white"
                />
                <path
                  d="M109.915 376.885L141.628 375.611L162.157 383.9L127.307 386.17L109.915 376.885Z"
                  fill="#30C5CC"
                />
                <path
                  d="M127.307 386.17L109.923 378.854L109.915 376.885L128.795 384.195L127.307 386.17Z"
                  fill="#0B9B9B"
                />
                <path
                  d="M127.307 386.17L137.656 354.786L172.372 356.618L162.16 384.72L127.307 386.17Z"
                  fill="#0B9B9B"
                />
                <path
                  d="M148.482 368.528C147.444 370.829 147.752 373.29 149.251 373.94C150.601 374.755 152.69 373.434 153.729 371.297C154.767 368.995 154.458 366.535 152.96 365.885C151.61 365.069 149.52 366.226 148.482 368.528Z"
                  fill="#30C5CC"
                />
                <path
                  d="M116.908 367.011C116.908 367.011 129.518 377.957 128.175 378.618C126.831 379.28 121.146 379.302 118.146 377.509C115.147 375.716 111.996 373.431 111.996 373.431C111.996 373.431 113.319 367.354 116.908 367.011Z"
                  fill="#FD9E71"
                />
                <path
                  d="M119.029 449.547C121.283 451.999 128.928 455.743 132.672 456.713C136.716 457.846 135.982 461.459 133.139 461.47C127.305 461.493 114.585 460.723 108.151 460.748C107.091 457.47 108.869 453.033 110.802 450.071C111.398 449.413 118.579 449.22 119.029 449.547Z"
                  fill="#201251"
                />
                <path
                  d="M164.36 449.368C166.614 451.82 174.259 455.565 178.003 456.534C182.047 457.667 181.313 461.28 178.47 461.292C172.636 461.315 159.916 460.544 153.483 460.57C152.422 457.292 154.2 452.854 156.134 449.892C156.729 449.234 164.059 449.041 164.36 449.368Z"
                  fill="#201251"
                />
                <path
                  d="M124.466 234.88L94.0955 234.999L94.1317 244.189L124.502 244.069L124.466 234.88Z"
                  fill="#31D0A8"
                />
                <path
                  d="M201.963 234.574L171.592 234.694L171.629 243.883L201.999 243.763L201.963 234.574Z"
                  fill="#31D0A8"
                />
                <path
                  d="M163.214 234.727L132.844 234.846L132.88 244.036L163.25 243.916L163.214 234.727Z"
                  fill="#31D0A8"
                />
                <path
                  d="M291.92 56.9529L195.689 83.2377L204.643 122.568L300.874 96.2835L291.92 56.9529Z"
                  fill="#FEBA40"
                />
                <path
                  d="M272.938 67.7943L201.962 87.1807L203.194 92.5946L274.17 73.2082L272.938 67.7943Z"
                  fill="#FEDB9B"
                />
                <path
                  d="M263.455 80.7326L204.236 96.9078L205.468 102.322L264.687 86.1465L263.455 80.7326Z"
                  fill="#FEDB9B"
                />
                <path
                  d="M234.81 99.7825L206.652 107.474L207.885 112.888L236.043 105.196L234.81 99.7825Z"
                  fill="#FEDB9B"
                />
                <path
                  d="M281.588 75.911L266.493 80.0341L267.725 85.448L282.821 81.3249L281.588 75.911Z"
                  fill="white"
                />
                <path
                  d="M200.793 127.584L92.6262 128.011L93.0081 224.829L201.175 224.403L200.793 127.584Z"
                  fill="white"
                />
                <path
                  d="M421.984 182.506L209.092 183.346L209.264 226.996L422.156 226.157L421.984 182.506Z"
                  fill="#4CB0DD"
                />
                <path
                  d="M415.725 188.931L358.126 189.158L358.249 220.173L415.848 219.946L415.725 188.931Z"
                  fill="white"
                />
                <path
                  d="M350.055 190.995L216.904 191.52L216.927 197.428L350.078 196.903L350.055 190.995Z"
                  fill="#75D5EF"
                />
                <path
                  d="M350.097 201.662L216.946 202.187L216.969 208.094L350.12 207.569L350.097 201.662Z"
                  fill="#75D5EF"
                />
                <path
                  d="M306.603 212.5L216.988 212.853L217.011 218.761L306.626 218.407L306.603 212.5Z"
                  fill="#75D5EF"
                />
                <path
                  d="M414.051 257.532L209.537 258.339L209.952 363.691L414.466 362.884L414.051 257.532Z"
                  fill="white"
                />
                <path
                  d="M414.051 257.532L209.537 258.339L209.606 275.733L414.119 274.927L414.051 257.532Z"
                  fill="#FDBE44"
                />
                <path
                  d="M332.831 300.027L214.64 300.493L214.675 309.354L332.865 308.888L332.831 300.027Z"
                  fill="#98DBE5"
                />
                <path
                  d="M320.626 315.993L214.703 316.411L214.738 325.272L320.66 324.854L320.626 315.993Z"
                  fill="#98DBE5"
                />
                <path
                  d="M286.278 331.882L214.765 332.164L214.8 341.025L286.313 340.743L286.278 331.882Z"
                  fill="#98DBE5"
                />
                <path
                  d="M257.222 285.884L214.583 286.052L214.618 294.914L257.257 294.745L257.222 285.884Z"
                  fill="#98DBE5"
                />
                <path
                  d="M405.93 284.805L344.142 285.049L344.409 352.822L406.197 352.578L405.93 284.805Z"
                  fill="#86D2E8"
                />
                <path
                  d="M381.526 318.378C382.418 316.898 383.009 315.09 383.002 313.285L382.982 308.034C382.963 303.275 379.357 299.351 375.018 299.368C370.679 299.385 367.104 303.338 367.123 308.097L367.144 313.348C367.152 315.317 367.758 317.284 368.811 318.757C361.641 321.575 356.434 329.144 356.469 338.005L395.367 337.852C395.666 337.687 394.109 322.267 381.526 318.378Z"
                  fill="#F6FFFA"
                />
                <path
                  d="M220.063 271.918C222.294 271.909 224.095 269.918 224.085 267.471C224.076 265.024 222.259 263.048 220.028 263.056C217.797 263.065 215.997 265.056 216.006 267.503C216.016 269.95 217.832 271.927 220.063 271.918Z"
                  fill="#DB5A28"
                />
                <path
                  d="M232.93 271.867C235.16 271.858 236.961 269.867 236.951 267.42C236.942 264.973 235.125 262.997 232.895 263.006C230.664 263.014 228.863 265.005 228.873 267.452C228.882 269.899 230.699 271.876 232.93 271.867Z"
                  fill="#FFE780"
                />
                <path
                  d="M247.89 271.808C250.121 271.799 251.922 269.808 251.912 267.361C251.903 264.914 250.086 262.938 247.855 262.947C245.624 262.955 243.824 264.946 243.833 267.393C243.843 269.84 245.659 271.817 247.89 271.808Z"
                  fill="#1FB288"
                />
                <path
                  d="M415.465 85.0554L343.803 85.338L344.113 163.942L415.775 163.659L415.465 85.0554Z"
                  fill="#DB5A28"
                />
                <path
                  d="M445.417 433.982C445.417 433.982 446.024 436.113 440.2 438.926C434.377 441.903 428.388 440.778 426.902 443.245C425.415 445.712 425.125 448.011 425.125 448.011L458.039 447.881C458.039 447.881 457.7 437.872 453.943 433.456C454.395 434.439 445.417 433.982 445.417 433.982Z"
                  fill="#9E472D"
                />
                <path
                  d="M481.173 433.841C481.173 433.841 481.779 435.808 476.255 438.62C470.73 441.431 464.892 440.47 463.405 442.773C461.918 445.076 461.628 447.375 461.628 447.375L493.195 447.25C493.195 447.25 492.858 437.734 489.251 433.481C489.852 434.299 481.173 433.841 481.173 433.841Z"
                  fill="#9E472D"
                />
                <path
                  d="M438.236 244.309L414.316 248.998L397.405 209.68L423.129 207.281L438.236 244.309Z"
                  fill="white"
                />
                <path
                  d="M454.401 170.235C454.401 170.235 451.286 177.139 451.311 183.539C451.329 187.97 451.803 194.368 452.116 197.813C452.27 199.125 453.321 199.942 454.516 199.445L459.147 197.785L458.878 205.335L472.042 204.955L474.765 174.749C474.916 174.913 463.792 161.665 454.401 170.235Z"
                  fill="#FD9E71"
                />
                <path
                  d="M455.511 186.148C455.511 186.148 456.235 180.074 460.279 181.371C464.474 182.667 459.709 188.593 459.709 188.593L463.63 196.291C466.477 197.428 469.768 197.415 472.754 195.927C472.754 195.927 477.035 181.305 477.017 176.71C476.999 172.115 473.097 169.012 473.097 169.012C473.097 169.012 462.752 163.474 457.368 163.823C451.833 164.173 451.408 170.247 451.408 170.247C451.408 170.247 449.332 174.85 451.434 176.811C453.687 178.935 455.511 186.148 455.511 186.148Z"
                  fill="#201251"
                />
                <path
                  d="M472.774 201.014L472.192 205.118L458.578 205.172C458.578 205.172 461.253 200.567 472.774 201.014Z"
                  fill="#6AA5CC"
                />
                <path
                  d="M414.873 238.329C414.873 238.329 415.758 235.043 412.01 233.089C412.156 232.268 411.243 228.497 410.343 227.68C409.591 226.863 409.012 231.788 409.012 231.788C409.012 231.788 405.243 224.418 404.203 226.392C403.313 228.2 412.795 242.604 412.947 243.26C413.398 243.75 414.873 238.329 414.873 238.329Z"
                  fill="#FD9E71"
                />
                <path
                  d="M450.367 285.615L441.574 369.998L443.627 435.466L455.144 434.6C455.144 434.6 458.299 400.126 458.415 391.593C458.68 382.894 456.235 369.776 456.235 369.776L467.549 317.547L469.495 317.867L470.296 369.228L481.026 434.498L490.603 434.953C490.603 434.953 490.77 401.311 489.839 392.946C489.058 384.58 484.803 367.858 484.803 367.858L488.782 314.673C488.782 314.673 492.916 300.708 485.374 284.984C484.476 284.988 450.367 285.615 450.367 285.615Z"
                  fill="#201251"
                />
                <path
                  d="M458.578 205.172C458.578 205.172 442.293 210.98 439.314 214.274C436.335 217.568 427.94 251.242 427.94 251.242L415.018 237.18L411.019 247.37C411.019 247.37 426.226 271.925 430.867 272.563C435.657 273.365 446.154 241.488 446.154 241.488C446.154 241.488 447.12 258.879 449.099 267.568C451.233 277.57 450.218 285.615 450.218 285.615C464.741 288.512 477.156 287.806 485.373 284.82L489.28 251.328C489.28 251.328 494.818 251.962 496.605 249.822C498.392 247.682 490.177 213.089 488.37 210.306C486.565 207.687 472.042 204.955 472.042 204.955L458.578 205.172Z"
                  fill="#96C4EA"
                />
                <path
                  d="M474.527 228.248C474.375 227.592 473.478 227.759 473.481 228.416C473.987 242.855 473.593 256.969 471.555 271.254C471.41 272.239 472.758 272.726 472.903 271.577C475.69 257.453 476.379 242.517 474.527 228.248Z"
                  fill="#6AA5CC"
                />
                <path
                  d="M489.53 238.855C489.379 238.363 488.781 238.53 488.783 239.022C488.666 247.392 487.8 255.436 486.337 263.811C485.02 271.201 483.852 278.59 484.33 285.973C484.334 286.958 485.831 287.116 485.826 285.967C485.493 277.271 487.105 268.895 488.418 260.357C489.587 253.296 490.755 245.907 489.53 238.855Z"
                  fill="#6AA5CC"
                />
                <path
                  d="M447.789 238.692C443.462 241.827 441.84 247.741 440.214 252.834C437.997 259.735 435.78 266.472 430.863 271.579C430.118 272.402 431.17 273.547 431.914 272.723C441.005 263.662 440.499 249.059 448.239 239.182C448.388 239.017 448.087 238.526 447.789 238.692Z"
                  fill="#6AA5CC"
                />
                <path
                  d="M485.662 282.357C485.662 282.357 463.682 285.562 450.349 281.02C450.648 281.019 450.367 285.614 450.367 285.614C450.367 285.614 467.301 292.604 486.728 286.948C486.578 286.949 485.662 282.357 485.662 282.357Z"
                  fill="#9E472D"
                />
                <path
                  d="M258.048 381.552C258.048 381.552 256.27 385.99 253.131 386.659C249.992 387.328 241.772 389.493 240.43 390.647C239.088 391.965 239.101 395.247 239.101 395.247L265.283 395.144C265.283 395.144 265.248 386.447 263.585 381.859C264.333 381.856 258.048 381.552 258.048 381.552Z"
                  fill="#1A133A"
                />
                <path
                  d="M308.765 381.352C308.765 381.352 306.987 385.79 303.848 386.459C300.709 387.128 292.489 389.293 291.147 390.447C289.805 391.765 289.818 395.047 289.818 395.047L316.149 394.944C316.149 394.944 316.115 386.246 314.451 381.658C315.05 381.656 308.765 381.352 308.765 381.352Z"
                  fill="#1A133A"
                />
                <path
                  d="M304.354 97.6371C304.354 97.6371 297.015 95.5328 296.572 96.8473C296.128 98.1619 307.962 101.89 307.962 101.89L318.712 134.175L314.713 144.529L322.078 153.198C322.078 153.198 329.961 141.351 330.695 137.902C331.28 134.454 311.694 99.7415 311.694 99.7415C311.694 99.7415 307.751 86.3007 307.15 85.6467C306.549 84.9926 299.519 85.5127 298.023 85.5186C296.377 85.5251 302.688 92.3925 302.688 92.3925L304.354 97.6371Z"
                  fill="#E79673"
                />
                <path
                  d="M276.023 121.708C276.023 121.708 272.604 127.137 271.879 132.883C271.153 138.63 272.222 144.041 272.222 144.041L278.654 143.851L278.68 150.415L291.397 150.365C291.397 150.365 291.677 145.441 292.114 142.649C292.552 139.858 296.123 134.757 296.123 134.757L290.368 117.056L282.136 116.268L276.023 121.708Z"
                  fill="#E79673"
                />
                <path
                  d="M279.198 130.064C279.198 130.064 281.42 124.312 284.121 126.435C286.822 128.557 283.4 133.33 283.4 133.33C283.4 133.33 285.227 141.2 288.223 142.337C291.22 143.473 291.22 143.473 291.22 143.473C291.22 143.473 298.969 135.566 300.156 133.264C301.345 131.126 298.153 118.503 295.899 115.886C293.644 113.105 283.92 113.472 283.167 112.162C282.414 110.852 279.861 108.4 277.471 109.394C275.081 110.388 275.566 119.576 275.566 119.576C275.566 119.576 278.72 122.518 278.877 124.486C279.035 126.619 277.7 129.414 277.7 129.414L279.198 130.064Z"
                  fill="#201251"
                />
                <path
                  d="M267.311 150.788C267.311 150.788 280.02 148.769 287.35 148.412C294.68 148.219 306.216 152.276 306.216 152.276L314.555 142.397L325.371 153.513C325.371 153.513 316.303 168.318 313.324 171.776C310.346 175.234 308.315 191.488 307.587 196.414C307.008 201.339 305.326 230.064 305.326 230.064C305.326 230.064 297.586 240.269 265.526 229.236C265.225 228.909 266.789 208.062 266.619 202.975C266.45 197.889 262.193 180.675 261.428 176.411C260.514 172.312 247.315 163.831 247.315 163.831C247.315 163.831 245.629 153.663 251.744 148.716C252.644 149.533 267.311 150.788 267.311 150.788Z"
                  fill="#201251"
                />
                <path
                  d="M237.524 109.224C237.524 109.224 232.756 114.166 232.465 116.136C232.174 118.106 239.145 140.889 239.145 140.889L251.894 149.044L247.466 164.159C247.466 164.159 233.66 153.711 231.554 150.601C229.596 147.491 225.884 116.654 225.884 116.654C225.884 116.654 221.371 110.436 221.066 108.796C220.76 107.157 219.691 101.745 220.436 100.758C221.18 99.7703 226.243 93.8426 226.998 95.6448C227.753 97.4469 230.495 109.908 230.495 109.908C230.495 109.908 236.319 106.931 237.524 109.224Z"
                  fill="#E79673"
                />
                <path
                  d="M265.676 229.235L258.788 303.765L255.36 382.876L267.779 383.319C267.779 383.319 275.352 330.776 275.32 322.736C275.438 314.694 275.101 305.178 275.101 305.178L282.873 265.27L287.362 265.252L296.842 317.071L306.521 381.361L316.546 381.814C316.546 381.814 317.885 341.768 316.356 333.569C314.828 325.37 312.553 317.502 312.553 317.502L307.852 263.695C307.852 263.695 311.816 244.643 305.473 229.571C304.267 227.278 265.676 229.235 265.676 229.235Z"
                  fill="#4C49A2"
                />
                <path
                  d="M189.34 144.696L181.261 144.728L181.226 135.866L176.14 135.886L176.175 144.748L168.096 144.78L168.118 150.359L176.197 150.327L176.232 159.188L181.318 159.168L181.283 150.307L189.362 150.275L189.34 144.696Z"
                  fill="#FDBE44"
                />
                <path
                  d="M114.357 213.422C107.326 213.45 101.616 207.236 101.586 199.688C101.556 191.975 107.217 185.881 114.249 185.853C121.28 185.826 126.84 192.04 126.87 199.588C127.049 207.136 121.389 213.394 114.357 213.422ZM114.276 192.91C110.985 192.923 108.304 195.887 108.318 199.497C108.332 203.107 111.037 206.051 114.328 206.038C117.62 206.025 120.301 203.06 120.287 199.45C120.423 196.003 117.568 192.897 114.276 192.91Z"
                  fill="#30C5CC"
                />
                <path
                  d="M502.536 84.5479L494.458 84.5797L494.423 75.7183L489.336 75.7384L489.371 84.5998L481.292 84.6316L481.314 90.211L489.393 90.1792L489.428 99.0405L494.514 99.0205L494.48 90.1591L502.558 90.1272L502.536 84.5479Z"
                  fill="#30C5CC"
                />
                <path
                  d="M461.903 24.1545C461.915 27.1083 459.681 29.5786 456.988 29.5892C454.295 29.5999 452.041 27.1472 452.029 24.1934C452.018 21.2396 454.252 18.7693 456.945 18.7587C459.638 18.748 461.892 21.2007 461.903 24.1545Z"
                  fill="#3D9CFF"
                />
                <path
                  d="M364.739 120.866C357.707 120.893 351.998 114.68 351.968 107.131C351.938 99.4187 357.599 93.3246 364.63 93.2969C371.662 93.2692 377.222 99.4831 377.252 107.032C377.431 114.58 371.771 120.838 364.739 120.866ZM364.658 100.353C361.367 100.366 358.685 103.331 358.7 106.941C358.714 110.551 361.418 113.494 364.71 113.481C368.001 113.468 370.683 110.504 370.668 106.894C370.804 103.283 367.949 100.34 364.658 100.353Z"
                  fill="#FEBA40"
                />
                <path
                  d="M431.551 28.869C424.52 28.8968 418.81 22.6834 418.78 15.1348C418.75 7.42215 424.411 1.32804 431.442 1.30031C438.474 1.27258 444.034 7.48653 444.064 15.0351C444.243 22.5831 438.583 28.8413 431.551 28.869ZM431.47 8.35659C428.179 8.36957 425.498 11.334 425.512 14.9442C425.526 18.5544 428.231 21.4975 431.522 21.4846C434.813 21.4716 437.495 18.5072 437.48 14.897C437.466 11.2868 434.762 8.34361 431.47 8.35659Z"
                  fill="#FEBA40"
                />
              </g>
              <defs>
                <clipPath id="clip0_55_209">
                  <rect
                    width="514.655"
                    height="469"
                    fill="white"
                    transform="translate(0.42218 3.00024) rotate(-0.22597)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
