const projects = [
  {
    num: "01",
    title: "A Dual Deep Learning Approach for Enhanced Retinal Lesion Detection",
    description: "A deep learning–based system that detects and classifies the severity of Diabetic Retinopathy from retinal images using CycleGAN for image enhancement and ResNet-50 for feature extraction and classification.",
    tags: ["ResNet-50", "CNN"],
    status:"Completed",
    link: "https://github.com/SahasraNamilikonda19/DiabeticRetinopathyDetection"
  },
  {
    num: "02",
    title: "SkillSphere",
    description: "A peer-to-peer web platform where students can exchange and learn skills from each other for free, enabling collaborative learning and knowledge sharing without any payment.",
    tags: ["JavaScript", "React.js", "Node.js","Express","MongoDB"],
    link: "#"
  },
]

function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "#0e0e0e", padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Section Label */}
        <p style={{ color: "#f5a623", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontFamily: "DM Mono, monospace" }}>
          Projects
        </p>

        {/* Heading */}
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 5vw, 52px)", color: "#e8e2d6", fontWeight: "700", marginBottom: "60px", lineHeight: "1.2" }}>
          Selected Work.
        </h2>

        {/* Projects List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {projects.map((project) => (
            <div key={project.num} style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", padding: "40px", display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "32px", alignItems: "start" }}>

              {/* Number */}
              <span style={{ fontFamily: "Fraunces, serif", fontSize: "36px", color: "#2a2a2a", fontWeight: "700", lineHeight: "1" }}>
                {project.num}
              </span>

              {/* Content */}
              <div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "22px", color: "#e8e2d6", fontWeight: "700", marginBottom: "12px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#7a7570", fontSize: "14px", fontFamily: "DM Mono, monospace", lineHeight: "1.8", marginBottom: "20px", maxWidth: "480px" }}>
                  {project.description}
                </p>
                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ border: "1px solid #2a2a2a", color: "#f5a623", fontSize: "11px", padding: "4px 10px", fontFamily: "DM Mono, monospace", letterSpacing: "1px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a href={project.link} style={{ color: "#f5a623", fontSize: "13px", fontFamily: "DM Mono, monospace", textDecoration: "none", whiteSpace: "nowrap", marginTop: "4px" }}>
                View →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects