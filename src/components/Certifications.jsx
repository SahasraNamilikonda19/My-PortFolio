import { useState } from "react"

const certifications = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2025",
    image: "/certificates/java.png"
  },
  {
    id: 2,
    title: "The Joy of Computing in Ptyhon",
    issuer: "NPTEL",
    date: "2024",
    image: "/certificates/python.png"
  },
  {
    id: 3,
    title: "Smart Coder",
    issuer: "Smart Interviews",
    date: "2024",
    image: "/certificates/SI.png"
  },
  {
    id: 4,
    title: "HTML",
    issuer: "Scaler",
    date: "2024",
    image: "/certificates/html-scaler.png"
  },
]

function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" style={{ backgroundColor: "#0b0b0b", padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Section Label */}
        <p style={{ color: "#f5a623", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontFamily: "DM Mono, monospace" }}>
          Certifications
        </p>

        {/* Heading */}
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 5vw, 52px)", color: "#e8e2d6", fontWeight: "700", marginBottom: "60px", lineHeight: "1.2" }}>
          Certificates &<br />
          <em style={{ color: "#f5a623", fontStyle: "italic" }}>Achievements.</em>
        </h2>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelected(cert)}
              style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", padding: "28px", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#f5a623"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}
            >
              {/* Icon */}
              <div style={{ width: "40px", height: "40px", border: "1px solid #f5a623", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "#f5a623", fontSize: "18px" }}>
                ✦
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "17px", color: "#e8e2d6", fontWeight: "700", marginBottom: "10px", lineHeight: "1.4" }}>
                {cert.title}
              </h3>

              {/* Issuer & Date */}
              <p style={{ color: "#7a7570", fontSize: "12px", fontFamily: "DM Mono, monospace", letterSpacing: "1px", marginBottom: "20px" }}>
                {cert.issuer} · {cert.date}
              </p>

              {/* View button */}
              <span style={{ color: "#f5a623", fontSize: "12px", fontFamily: "DM Mono, monospace", letterSpacing: "1px" }}>
                View Certificate →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.9)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", padding: "32px", maxWidth: "800px", width: "100%", position: "relative" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "1px solid #2a2a2a", color: "#e8e2d6", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              ✕
            </button>

            {/* Certificate Title */}
            <p style={{ color: "#f5a623", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "DM Mono, monospace", marginBottom: "8px" }}>
              {selected.issuer} · {selected.date}
            </p>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "24px", color: "#e8e2d6", fontWeight: "700", marginBottom: "24px" }}>
              {selected.title}
            </h3>

            {/* Certificate Image */}
            <img
              src={selected.image}
              alt={selected.title}
              style={{ width: "100%", height: "600px", objectFit: "contain", border: "1px solid #2a2a2a", display: "block", backgroundColor: "#0e0e0e" }}
              onError={e => {
                e.target.style.display = "none"
                e.target.nextSibling.style.display = "flex"
              }}
            />

            {/* Fallback if image not found */}
            <div style={{ display: "none", width: "100%", height: "300px", backgroundColor: "#0e0e0e", border: "1px solid #2a2a2a", alignItems: "center", justifyContent: "center", color: "#7a7570", fontFamily: "DM Mono, monospace", fontSize: "13px" }}>
              Add your certificate image to /public/certificates/
            </div>

          </div>
        </div>
      )}

    </section>
  )
}

export default Certifications