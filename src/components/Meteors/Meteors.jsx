import "./Meteors.css";

export default function Meteors({ number = 12 }) {
  return (
    <div className="meteors-container">
      {Array.from({ length: number }).map((_, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${2 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}