function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#0b0b0b", padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <p style={{ color: "#f5a623", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontFamily: "DM Mono, monospace" }}>Contact</p>

        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 5vw, 52px)", color: "#e8e2d6", fontWeight: "700", marginBottom: "24px", lineHeight: "1.2" }}>
          Let's work<br />
          <em style={{ color: "#f5a623", fontStyle: "italic" }}>together.</em>
        </h2>

        <p style={{ color: "#7a7570", fontSize: "15px", fontFamily: "DM Mono, monospace", lineHeight: "1.9", marginBottom: "48px", maxWidth: "480px" }}>
          Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open. I'll get back to you as soon as possible!
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "60px" }}>
  <a href="mailto:namilikondasahasra@gmail.com" style={{ backgroundColor: "#f5a623", color: "#0e0e0e", padding: "16px 36px", fontSize: "14px", fontFamily: "DM Mono, monospace", textDecoration: "none", fontWeight: "500", letterSpacing: "1px", display: "inline-block", width: "fit-content" }}>
    Send Me an Email →
  </a>
</div>

        <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>

          <div style={{ display: "flex", gap: "32px" }}>
            <a href="https://github.com/Namilikonda-Sahasra" target="_blank" rel="noreferrer" style={{ color: "#7a7570", fontSize: "13px", fontFamily: "DM Mono, monospace", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>GitHub ↗</a>
            <a href="https://www.linkedin.com/in/namilikonda-sahasra-91a43328a" target="_blank" rel="noreferrer" style={{ color: "#7a7570", fontSize: "13px", fontFamily: "DM Mono, monospace", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>LinkedIn ↗</a>
            <a href="https://leetcode.com/u/R8Uqz7qh5x/" target="_blank" rel="noreferrer" style={{ color: "#7a7570", fontSize: "13px", fontFamily: "DM Mono, monospace", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>LeetCode ↗</a>
            <a href="https://www.codechef.com/users/a05l9" target="_blank" rel="noreferrer" style={{ color: "#7a7570", fontSize: "13px", fontFamily: "DM Mono, monospace", textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase" }}>CodeChef ↗</a>

          </div>

          <a href="#home" style={{ color: "#f5a623", fontSize: "13px", fontFamily: "DM Mono, monospace", textDecoration: "none", letterSpacing: "1px" }}>
            Back to Top ↑
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact