import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = ["About","Academic", "Skills", "Projects","Certifications", "Contact"]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "#161616", borderBottom: "1px solid #f5a623", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

      <a href="#home" style={{ fontSize: "20px", fontWeight: "bold", color: "#e8e2d6", textDecoration: "none" }}>
        S<span style={{ color: "#f5a623" }}>.</span>
      </a>

      <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
        {navLinks.map((link) => (
          <li key={link}>
            <a href={"#" + link.toLowerCase()} style={{ color: "#7a7570", textDecoration: "none", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href="/public/FINALRESUME.pdf" style={{ border: "1px solid #f5a623", color: "#f5a623", fontSize: "13px", padding: "8px 16px", textDecoration: "none" }}>
        Resume ↗
      </a>

    </nav>
  )
}

export default Navbar