function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      backgroundColor: "#0e0e0e",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 40px",
      maxWidth: "900px",
      margin: "0 auto",
      position: "relative"
    }}>

      {/* Available Tag */}
      <div style={{ display: "inline-block", border: "1px solid #f5a623", color: "#f5a623", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", padding: "6px 14px", marginBottom: "32px", width: "fit-content" }}>
        ● Available for work
      </div>

      {/* Main Heading */}
      <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontFamily: "Fraunces, serif", fontWeight: "700", color: "#e8e2d6", lineHeight: "1.1", marginBottom: "24px" }}>
        I design &amp;<br />
        <em style={{ color: "#f5a623", fontStyle: "italic" }}>build things</em><br />
        for the web.
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: "16px", color: "#7a7570", fontFamily: "DM Mono, monospace", marginBottom: "40px", maxWidth: "480px", lineHeight: "1.8" }}>
        Full-stack developer based in Hyderabad, India. I craft clean,
        performant web experiences with modern technologies.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="#projects" style={{ backgroundColor: "#f5a623", color: "#0e0e0e", padding: "14px 28px", fontSize: "14px", fontFamily: "DM Mono, monospace", textDecoration: "none", fontWeight: "500", letterSpacing: "1px" }}>
          View My Work →
        </a>
        <a href="#contact" style={{ border: "1px solid #7a7570", color: "#e8e2d6", padding: "14px 28px", fontSize: "14px", fontFamily: "DM Mono, monospace", textDecoration: "none", letterSpacing: "1px" }}>
          Get In Touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "40px", fontSize: "12px", color: "#7a7570", letterSpacing: "2px", textTransform: "uppercase" }}>
        scroll ↓
      </div>

    </section>
  )
}

export default Hero