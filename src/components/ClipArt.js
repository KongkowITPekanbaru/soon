import Head from "next/head";

function Dot() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.553468 5.78252C0.55284 6.80247 0.854761 7.79969 1.42103 8.64801C1.98729 9.49634 2.79246 10.1576 3.73466 10.5482C4.67686 10.9388 5.71375 11.0412 6.71414 10.8424C7.71453 10.6436 8.63346 10.1524 9.35468 9.43121C10.0759 8.70999 10.567 7.79107 10.7658 6.79068C10.9647 5.79029 10.8623 4.75344 10.4717 3.81124C10.0811 2.86905 9.41975 2.06386 8.57143 1.49759C7.7231 0.931323 6.72589 0.629378 5.70593 0.630006C4.33993 0.631686 3.03036 1.17508 2.06445 2.14099C1.09854 3.1069 0.555148 4.41652 0.553468 5.78252Z"
        fill="#00BB62"
      />
    </svg>
  );
}
function Cloud() {
  return (
    <svg
      style={{ zIndex: -1 }}
      width="70"
      height="34"
      viewBox="0 0 70 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.95733 23.6994H16.362C16.8811 23.6994 17.3789 23.4931 17.746 23.1261C18.1131 22.759 18.3193 22.2611 18.3193 21.742C18.3193 21.2229 18.1131 20.7251 17.746 20.358C17.3789 19.9909 16.8811 19.7847 16.362 19.7847H1.95733C1.43821 19.7847 0.940347 19.9909 0.573277 20.358C0.206206 20.7251 0 21.2229 0 21.742C0 22.2611 0.206206 22.759 0.573277 23.1261C0.940347 23.4931 1.43821 23.6994 1.95733 23.6994Z"
        fill="#00BB62"
      />
      <path
        d="M16.3621 28.3084H9.15911C8.63999 28.3084 8.14215 28.5146 7.77508 28.8817C7.40801 29.2488 7.20178 29.7466 7.20178 30.2657C7.20178 30.7849 7.40801 31.2827 7.77508 31.6498C8.14215 32.0169 8.63999 32.2231 9.15911 32.2231H16.3621C16.8812 32.2231 17.379 32.0169 17.7461 31.6498C18.1132 31.2827 18.3194 30.7849 18.3194 30.2657C18.3194 29.7466 18.1132 29.2488 17.7461 28.8817C17.379 28.5146 16.8812 28.3084 16.3621 28.3084Z"
        fill="#00BB62"
      />
      <path
        d="M27.4902 8.04057H30.1913C30.7104 8.04057 31.2082 7.83437 31.5753 7.4673C31.9424 7.10022 32.1486 6.60236 32.1486 6.08324C32.1486 5.56413 31.9424 5.06628 31.5753 4.69921C31.2082 4.33214 30.7104 4.12592 30.1913 4.12592H27.4902C26.971 4.12592 26.4732 4.33214 26.1061 4.69921C25.739 5.06628 25.5328 5.56413 25.5328 6.08324C25.5328 6.60236 25.739 7.10022 26.1061 7.4673C26.4732 7.83437 26.971 8.04057 27.4902 8.04057Z"
        fill="#00BB62"
      />
      <path
        d="M18.1367 15.5842H22.3971C21.1498 17.1767 20.3757 19.088 20.1631 21.0997C19.9506 23.1114 20.3082 25.1422 21.1952 26.9603C22.0822 28.7783 23.4627 30.3102 25.179 31.3808C26.8953 32.4515 28.8782 33.0177 30.9011 33.0148H58.3454C61.0382 33.0149 63.6338 32.0087 65.623 30.1936C67.6121 28.3786 68.8512 25.8858 69.0971 23.2043C69.3431 20.5227 68.5781 17.8461 66.9522 15.6995C65.3264 13.553 62.9571 12.0914 60.3093 11.6017C59.6487 8.38647 57.9012 5.49677 55.3607 3.41847C52.8201 1.34017 49.6414 0.200026 46.359 0.189767C43.0767 0.179508 39.8909 1.29977 37.3374 3.36214C34.7839 5.42452 33.0184 8.30323 32.3377 11.5142C31.8621 11.449 31.3825 11.4164 30.9024 11.4164C30.1283 11.4179 29.3565 11.5028 28.6006 11.6695H18.138C17.6189 11.6695 17.121 11.8757 16.754 12.2428C16.3869 12.6099 16.1807 13.1077 16.1807 13.6268C16.1807 14.146 16.3869 14.6438 16.754 15.0109C17.121 15.3779 17.6189 15.5842 18.138 15.5842H18.1367ZM33.3112 15.7747C33.6004 15.8831 33.9112 15.9215 34.2182 15.8868C34.5251 15.8521 34.8195 15.7452 35.0772 15.5749C35.3349 15.4046 35.5487 15.1758 35.701 14.907C35.8533 14.6383 35.9399 14.3373 35.9536 14.0287C36.0661 11.3981 37.175 8.90877 39.0554 7.06572C40.9359 5.22268 43.447 4.16396 46.0793 4.10436C48.7117 4.04476 51.2682 4.98875 53.2301 6.7448C55.192 8.50084 56.4125 10.9374 56.6439 13.5603C56.6862 14.0381 56.9026 14.4838 57.2519 14.8126C57.6011 15.1415 58.059 15.3306 58.5385 15.3441C60.3463 15.3939 62.0617 16.1535 63.3136 17.4586C64.5655 18.7636 65.2532 20.5091 65.2278 22.3174C65.2024 24.1256 64.466 25.8512 63.178 27.1206C61.8899 28.39 60.1538 29.1011 58.3454 29.1002H30.9011C29.8914 29.1033 28.8935 28.8843 27.9779 28.4587C27.0623 28.0331 26.2515 27.4114 25.603 26.6375C24.9545 25.8636 24.4842 24.9566 24.2254 23.9807C23.9665 23.0048 23.9255 21.9839 24.1052 20.9903C24.2849 19.9968 24.6809 19.0549 25.2652 18.2315C25.8495 17.4081 26.6077 16.7233 27.4862 16.2256C28.3647 15.7279 29.3418 15.4295 30.3485 15.3516C31.3551 15.2737 32.3666 15.4181 33.3112 15.7747Z"
        fill="#00BB62"
      />
    </svg>
  );
}

function SmallCloud() {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.76198 15.428H5.71433V16.3804C5.71433 17.6434 6.21601 18.8546 7.10906 19.7476C8.0021 20.6407 9.21335 21.1424 10.4763 21.1424C11.7393 21.1424 12.9505 20.6407 13.8436 19.7476C14.7366 18.8546 15.2383 17.6434 15.2383 16.3804V15.428H16.1906C17.4536 15.428 18.6649 14.9263 19.5579 14.0333C20.4509 13.1402 20.9526 11.929 20.9526 10.6661C20.9526 9.4031 20.4509 8.19185 19.5579 7.2988C18.6649 6.40576 17.4536 5.90408 16.1906 5.90408H15.2383V4.95167C15.2383 3.68872 14.7366 2.47746 13.8436 1.58442C12.9505 0.691376 11.7393 0.189697 10.4763 0.189697C9.21335 0.189697 8.0021 0.691376 7.10906 1.58442C6.21601 2.47746 5.71433 3.68872 5.71433 4.95167V5.90408H4.76198C3.49902 5.90408 2.28777 6.40576 1.39472 7.2988C0.501679 8.19185 0 9.4031 0 10.6661C0 11.929 0.501679 13.1402 1.39472 14.0333C2.28777 14.9263 3.49902 15.428 4.76198 15.428Z"
        fill="#00BB62"
      />
    </svg>
  );
}

function ZigZag() {
  return (
    <svg
      width="88"
      height="20"
      viewBox="0 0 88 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5157 18.5534C17.9751 18.9353 18.5522 19.1441 19.1479 19.1441C19.7436 19.1441 20.3207 18.9353 20.78 18.5534L35.7054 6.14594L50.6239 18.5534C51.0833 18.9353 51.6604 19.1441 52.2561 19.1441C52.8518 19.1441 53.4289 18.9353 53.8882 18.5534L68.8204 6.14421L83.7509 18.5534C84.0089 18.7801 84.3095 18.9525 84.6348 19.0603C84.9601 19.1681 85.3036 19.2092 85.6449 19.1811C85.9863 19.1531 86.3186 19.0565 86.6222 18.897C86.9259 18.7375 87.1947 18.5184 87.4128 18.2526C87.6309 17.9867 87.7939 17.6796 87.8922 17.3493C87.9905 17.019 88.022 16.6722 87.9849 16.3294C87.9479 15.9867 87.843 15.6549 87.6764 15.3536C87.5099 15.0523 87.285 14.7877 87.0152 14.5753L70.4526 0.810228C69.9932 0.428402 69.4161 0.219547 68.8204 0.219547C68.2247 0.219547 67.6476 0.428402 67.1883 0.810228L52.2578 13.2177L37.3376 0.810228C36.8782 0.428402 36.3011 0.219547 35.7054 0.219547C35.1097 0.219547 34.5326 0.428402 34.0732 0.810228L19.1479 13.2177L4.23108 0.810228C3.97251 0.587309 3.67243 0.418502 3.34835 0.313592C3.02427 0.208682 2.68268 0.169803 2.34352 0.199226C2.00436 0.228649 1.67442 0.325754 1.37295 0.484931C1.07147 0.644108 0.804504 0.862171 0.587624 1.12634C0.370744 1.3905 0.208289 1.69552 0.10975 2.02357C0.0112102 2.35162 -0.0214429 2.69611 0.0136901 3.037C0.048823 3.3779 0.151035 3.70832 0.314374 4.00901C0.477713 4.3097 0.698913 4.57465 0.965043 4.78836L17.5157 18.5534Z"
        fill="#00BB62"
      />
    </svg>
  );
}

export default function ClipArt() {
  return (
    <div
      className="absolute z-0 flex  top-0 bg-transparent  h-screen w-screen "
      style={{ zIndex: 1 }}
    >
      <div className="clip-art rotating" style={{ top: "40vh" }}>
        <SmallCloud />
      </div>
      <div className="clip-art" style={{ top: "50vh" }}>
        <ZigZag />
      </div>
      <div className="clip-art" style={{ top: "80vh", left: "120px" }}>
        <Dot />
      </div>
      <div className="clip-art" style={{ top: "20vh", left: "130px" }}>
        <Dot />
      </div>
      <div className="clip-art" style={{ top: "55vh", left: "340px" }}>
        <Dot />
      </div>
      <div className="clip-art rotating" style={{ top: "15vh", left: "640px" }}>
        <SmallCloud />
      </div>
      <div className="clip-art" style={{ top: "12vh", left: "900px" }}>
        <Dot />
      </div>
      <div className="clip-art" style={{ top: "60vh", right: "400px" }}>
        <Dot />
      </div>

      <div className="clip-art" style={{ top: "15vh", right: "140px" }}>
        <Dot />
      </div>
      <div className="clip-art" style={{ top: "12vh", right: "-20px" }}>
        <ZigZag />
      </div>
      <div className="clip-art floating" style={{ top: "60vh", right: "20px" }}>
        <Cloud />
      </div>
      <div className="clip-art rotating" style={{ top: "70vh", right: "-6px" }}>
        <SmallCloud />
      </div>
      <div className="clip-art floating" style={{ top: "10vh", left: "20%" }}>
        <Cloud />
      </div>
    </div>
  );
}
