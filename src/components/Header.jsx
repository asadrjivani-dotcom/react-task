import React, { useState } from "react";

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>⬡</span>
        <span style={styles.logoText}>NEXUS</span>
      </div>

      <nav style={styles.nav}>
        {["Dashboard", "Projects", "Analytics", "Settings"].map((item) => (
          <a key={item} href="#" style={styles.navLink}
            onMouseEnter={e => e.target.style.color = "#f0c674"}
            onMouseLeave={e => e.target.style.color = "#c5c8c6"}
          >
            {item}
          </a>
        ))}
      </nav>

      <div style={styles.actions}>
        <button style={styles.notifBtn}>🔔</button>
        <div style={styles.avatar}>JD</div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    height: "64px",
    background: "#1d1f21",
    borderBottom: "1px solid #373b41",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoIcon: {
    fontSize: "1.6rem",
    color: "#f0c674",
    lineHeight: 1,
  },
  logoText: {
    fontFamily: "'Courier New', monospace",
    fontWeight: "800",
    fontSize: "1.2rem",
    letterSpacing: "0.25em",
    color: "#f0c674",
  },
  nav: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#c5c8c6",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    transition: "color 0.2s",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  notifBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    padding: "4px",
  },
  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f0c674, #de935f)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Courier New', monospace",
    fontWeight: "700",
    fontSize: "0.75rem",
    color: "#1d1f21",
    cursor: "pointer",
    letterSpacing: "0.05em",
  },
};
