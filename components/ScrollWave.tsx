export function ScrollWave({
  topColor = "#1a3a2a",
  bottomColor = "#faf7f2",
}: {
  topColor?: string;
  bottomColor?: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0]"
      style={{ backgroundColor: topColor, marginTop: -1 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px] md:h-[100px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,112 480,16 720,48 C960,80 1200,112 1440,64 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
