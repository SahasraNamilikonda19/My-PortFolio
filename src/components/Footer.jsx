function Footer() {
  return (
    <footer style={{ backgroundColor: "#0e0e0e", borderTop: "1px solid #2a2a2a", padding: "24px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <p style={{ color: "#7a7570", fontSize: "12px", fontFamily: "DM Mono, monospace", letterSpacing: "1px" }}>
          Designed & Built by <span style={{ color: "#e8e2d6" }}>Sahasra</span>
        </p>
        <p style={{ color: "#7a7570", fontSize: "12px", fontFamily: "DM Mono, monospace", letterSpacing: "1px" }}>
          © 2026 — All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer