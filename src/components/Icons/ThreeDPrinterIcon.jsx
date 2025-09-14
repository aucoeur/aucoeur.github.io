import "./ThreeDPrinterIcon.css";

export default function ThreeDPrinterIcon() {
  return (
    <div className="animation">
      <div className="threedp">
        <div className="box">
          <div className="inner">
            <svg
              viewBox="-55.5 -40 150 130"
              xmlns="http://www.w3.org/2000/svg"
              className="threedpsvg"
            >
              <path d="M 20 0 V 8 H 32 Q 36 12 32 16 H 4 Q 0 20 4 24 H 64 Q 68 28 64 32 H -28 Q -32 36 -28 40 H 64 Q 68 44 64 48 H -28 Q -32 52 -28 56 H 64 Q 68 60 64 64 H -30" />
            </svg>
            <div className="hotend"></div>
            <div className="bars"></div>
          </div>
          <div className="bed"></div>
        </div>
        <div className="spool"></div>
      </div>
    </div>
  );
}
