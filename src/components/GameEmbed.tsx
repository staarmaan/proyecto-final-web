export default function GameEmbed() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
      <iframe
        src="/dist/index.html"
        style={{
          width: "min(1200px, 95vw)",
          height: "min(600px, 47.5vw)",
          border: "none",
        }}
        title="Love2D Game"
        allow="cross-origin-isolated"
        allowFullScreen
      />
    </div>
  );
}
