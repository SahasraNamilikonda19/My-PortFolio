import useFadeIn from "../hooks/useFadeIn"
const skills = [
  { name: "HTML & CSS", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "C", level: "Intermediate" },
  { name: "C++", level: "Intermediate" },
  { name: "Git & GitHub", level: "Beginner" },
]

function Skills() {
  const [ref, visible] = useFadeIn()
  return (

    <section id="skills" style={{ backgroundColor: "#0b0b0b", padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Section Label */}
        <p style={{ color: "#f5a623", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontFamily: "DM Mono, monospace" }}>
          Skills
        </p>

        {/* Heading */}
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 5vw, 52px)", color: "#e8e2d6", fontWeight: "700", marginBottom: "60px", lineHeight: "1.2" }}>
          What I work with.
        </h2>

        {/* Skills Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {skills.map((skill) => (
            <div key={skill.name} style={{
              backgroundColor: "#161616",
              border: "1px solid #2a2a2a",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              cursor: "default",
              transition: "border-color 0.2s"
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#f5a623"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}
            >
              <span style={{ color: "#e8e2d6", fontSize: "15px", fontFamily: "DM Mono, monospace", fontWeight: "500" }}>
                {skill.name}
              </span>
              <span style={{ color: "#f5a623", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "DM Mono, monospace" }}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills