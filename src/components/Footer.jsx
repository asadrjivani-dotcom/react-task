import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <span style={styles.logo}>⬡ NEXUS</span>
        <span style={styles.sep}>|</span>
        <span style={styles.copy}>© 2026 Nexus Inc. All rights reserved.</span>
      </div>

      <div style={styles.links}>
        {["Privacy", "Terms", "Support", "Status"].map((link) => (
          <a key={link} href="#" style={styles.link}
            onMouseEnter={e => e.target.style.color = "#f0c674"}
            onMouseLeave={e => e.target.style.color = "#5a5f65"}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={styles.right}>
        <span style={styles.statusDot} />
        <span style={styles.statusText}>All systems operational</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    height: "48px",
    background: "#1d1f21",
    borderTop: "1px solid #373b41",
    flexShrink: 0,
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  logo: {
    fontFamily: "'Courier New', monospace",
    fontWeight: "800",
    fontSize: "0.78rem",
    letterSpacing: "0.2em",
    color: "#f0c674",
  },
  sep: {
    color: "#373b41",
    fontSize: "0.9rem",
  },
  copy: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.7rem",
    color: "#5a5f65",
    letterSpacing: "0.05em",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.7rem",
    color: "#5a5f65",
    textDecoration: "none",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    transition: "color 0.2s",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#b5bd68",
    boxShadow: "0 0 6px #b5bd6888",
  },
  statusText: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.68rem",
    color: "#5a5f65",
    letterSpacing: "0.08em",
  },
};
