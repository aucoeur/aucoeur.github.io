import './Icon.css'

export default function Icon() {
  return (
    <div className="animation">
      <div className="threedp">
        <div className="box">
          <div className="hotend">
          </div>
          <div className="fan-case">
            <div className="fan"></div>
          </div>
          <div className="nozzle"></div>
          <div className="bars"></div>
          <div className="bed"></div>
          <svg
            viewBox="-35 -25 110 110"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 0 V 8 H 32 Q 36 12 32 16 H 4 Q 0 20 4 24 H 64 Q 68 28 64 32 H -28 Q -32 36 -28 40 H 64 Q 68 44 64 48 H -28 Q -32 52 -28 56 H 64 Q 68 60 64 64 H -30" />
          </svg>
        </div>
        <div className="spool"></div>
      </div>
    </div>
  )
}
