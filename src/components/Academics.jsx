function Academic() {
  return (
    <section id="academic" style={{ backgroundColor: "#0e0e0e", padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Section Label */}
        <p style={{ color: "#f5a623", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontFamily: "DM Mono, monospace" }}>
           Academic
        </p>

        {/* Heading */}
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 5vw, 52px)", color: "#e8e2d6", fontWeight: "700", marginBottom: "60px", lineHeight: "1.2" }}>
          Education &<br />
          <em style={{ color: "#f5a623", fontStyle: "italic" }}>Academics.</em>
        </h2>

        {/* Education Card */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", padding: "40px", marginBottom: "24px", position: "relative" }}>

          {/* Accent line */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", backgroundColor: "#f5a623" }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "22px", color: "#e8e2d6", fontWeight: "700", marginBottom: "8px" }}>
                Bachelor of Technology
              </h3>
              <p style={{ color: "#f5a623", fontSize: "13px", fontFamily: "DM Mono, monospace", letterSpacing: "1px", marginBottom: "6px" }}>
                Computer Science & Engineering
              </p>
              <p style={{ color: "#7a7570", fontSize: "13px", fontFamily: "DM Mono, monospace", letterSpacing: "1px" }}>
                B V Raju Institute of Technology — Narsapur,Telangana
              </p>
            </div>

            {/* Year Badge */}
            <div style={{ border: "1px solid #2a2a2a", padding: "8px 16px", textAlign: "center" }}>
              <p style={{ color: "#7a7570", fontSize: "11px", fontFamily: "DM Mono, monospace", letterSpacing: "2px", marginBottom: "4px" }}>YEAR</p>
              <p style={{ color: "#e8e2d6", fontSize: "14px", fontFamily: "DM Mono, monospace" }}>2023 — 2027</p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "24px", display: "flex", gap: "40px", flexWrap: "wrap" }}>

            {/* CGPA */}
            <div>
              <p style={{ color: "#7a7570", fontSize: "11px", fontFamily: "DM Mono, monospace", letterSpacing: "2px", marginBottom: "8px" }}>CGPA</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "36px", color: "#f5a623", fontWeight: "700" }}>8.99</span>
                <span style={{ color: "#7a7570", fontSize: "13px", fontFamily: "DM Mono, monospace" }}> / 10</span>
              </div>
            </div>

            {/* Status */}
            <div>
              <p style={{ color: "#7a7570", fontSize: "11px", fontFamily: "DM Mono, monospace", letterSpacing: "2px", marginBottom: "8px" }}>STATUS</p>
              <div style={{ display: "inline-block", border: "1px solid #f5a623", color: "#f5a623", fontSize: "12px", padding: "6px 14px", fontFamily: "DM Mono, monospace", letterSpacing: "1px" }}>
                ● Currently Pursuing
              </div>
            </div>

            {/* Semester */}
            <div>
              <p style={{ color: "#7a7570", fontSize: "11px", fontFamily: "DM Mono, monospace", letterSpacing: "2px", marginBottom: "8px" }}>SEMESTER</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "36px", color: "#e8e2d6", fontWeight: "700" }}>6th</span>
              </div>
            </div>

          </div>
        </div>

        {/* Relevant Coursework */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", padding: "32px" }}>
          <p style={{ color: "#f5a623", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "DM Mono, monospace", marginBottom: "20px" }}>
            Relevant Coursework
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              "Data Structures", "Algorithms", "Operating Systems",
              "Database Management", "Computer Networks", "Web Technologies",
              "Software Engineering", "Machine Learning"
            ].map((course) => (
              <span key={course} style={{ border: "1px solid #2a2a2a", color: "#e8e2d6", fontSize: "13px", padding: "6px 14px", fontFamily: "DM Mono, monospace" }}>
                {course}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Academic