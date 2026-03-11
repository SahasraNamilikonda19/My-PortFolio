import useFadeIn from "../hooks/useFadeIn"
function About() {
  const [refLeft, visibleLeft] = useFadeIn()
const [refRight, visibleRight] = useFadeIn()
  return (
    <section id="about" style={{ backgroundColor: "#0e0e0e", padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Section Label */}
        <p style={{ color: "#f5a623", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontFamily: "DM Mono, monospace" }}>
          About
        </p>

        {/* Section Heading */}
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 5vw, 52px)", color: "#e8e2d6", fontWeight: "700", marginBottom: "48px", lineHeight: "1.2" }}>
          A developer who sweats<br /> the details.
        </h2>

        {/* Two Column Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "60px", alignItems: "center" }}>

          {/* Left — Text */}
          <div>
            <p style={{ color: "#7a7570", fontSize: "15px", fontFamily: "DM Mono, monospace", lineHeight: "1.9", marginBottom: "20px" }}>
              Hi, I'm <span style={{ color: "#e8e2d6" }}>Sahasra</span> — a passionate full-stack developer based in Hyderabad, India. I love building things that live on the internet and care deeply about clean code, smart design, and great user experiences.
            </p>
            <p style={{ color: "#7a7570", fontSize: "15px", fontFamily: "DM Mono, monospace", lineHeight: "1.9", marginBottom: "32px" }}>
              When I'm not coding, I'm probably exploring new technologies, reading, or overengineering a side project just for fun.
            </p>

            {/* Quick Facts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                ["Location", "Hyderabad, India"],
                ["Focus", "Coding"],
                ["Status", "Open to opportunities"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "16px", fontSize: "13px", fontFamily: "DM Mono, monospace" }}>
                  <span style={{ color: "#f5a623", minWidth: "80px" }}>{label}</span>
                  <span style={{ color: "#e8e2d6" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hover Photo Box */}
<div style={{ position: "relative" }}>
  <div
    className="photo-box"
    style={{
      width: "100%",
      aspectRatio: "4/5",
      backgroundColor: "#161616",
      border: "2px solid #f5a623",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      borderRadius: "50%",
      aspectRatio: "1/1",
    }}
  >
    {/* NS Letters — fades out on hover */}
    <span
      className="ns-text"
      style={{
        fontFamily: "Fraunces, serif",
        fontSize: "clamp(80px, 12vw, 140px)",
        fontWeight: "700",
        color: "#f5a623",
opacity: "1",
        letterSpacing: "-4px",
        userSelect: "none",
        position: "absolute",
        transition: "opacity 0.4s ease"
      }}
    >
      NS
    </span>

    {/* Photo — fades in on hover */}
    <img
      className="hover-photo"
      src="/public/FormalPhoto.jpeg"
      alt="Sahasra"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0,
        transition: "opacity 0.4s ease"
      }}
    />
  </div>

  {/* Decorative border offset */}
  <div style={{
    position: "absolute",
    top: "12px",
    left: "12px",
    right: "-12px",
    bottom: "-12px",
    border: "1px solid #f5b323",
    zIndex: -1
  }} />
</div>

        </div>
      </div>
    </section>
  )
}

export default About