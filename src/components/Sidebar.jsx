import React, { useState } from "react";

const menuItems = [
  { icon: "⊞", label: "Overview", badge: null },
  { icon: "◈", label: "Projects", badge: "12" },
  { icon: "◉", label: "Tasks", badge: "3" },
  { icon: "◎", label: "Calendar", badge: null },
  { icon: "◇", label: "Reports", badge: null },
  { icon: "◆", label: "Team", badge: null },
];

export default function Sidebar() {
  const [active, setActive] = useState("Overview");

  return (
    <aside style={styles.sidebar}>
      <div style={styles.section}>
        <p style={styles.sectionLabel}>WORKSPACE</p>
        {menuItems.map(({ icon, label, badge }) => (
          <button
            key={label}
            style={{
              ...styles.menuItem,
              ...(active === label ? styles.menuItemActive : {}),
            }}
            onClick={() => setActive(label)}
            onMouseEnter={e => {
              if (active !== label) e.currentTarget.style.background = "#282a2e";
            }}
            onMouseLeave={e => {
              if (active !== label) e.currentTarget.style.background = "transparent";
            }}
          >
            <span style={styles.icon}>{icon}</span>
            <span style={styles.label}>{label}</span>
            {badge && <span style={styles.badge}>{badge}</span>}
          </button>
        ))}
      </div>

      <div style={styles.divider} />

      <div style={styles.section}>
        <p style={styles.sectionLabel}>RECENT</p>
        {["Alpha Release", "UI Redesign", "API Docs"].map((proj) => (
          <button key={proj} style={styles.recentItem}
            onMouseEnter={e => e.currentTarget.style.color = "#f0c674"}
            onMouseLeave={e => e.currentTarget.style.color = "#969896"}
          >
            <span style={styles.dot}>▸</span>
            {proj}
          </button>
        ))}
      </div>

      <div style={styles.userCard}>
        <div style={styles.userAvatar}>JD</div>
        <div>
          <p style={styles.userName}>Jane Doe</p>
          <p style={styles.userRole}>Admin</p>
        </div>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    minWidth: "220px",
    background: "#1d1f21",
    borderRight: "1px solid #373b41",
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem 0",
    gap: "0.25rem",
    overflowY: "auto",
  },
  section: {
    padding: "0 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  sectionLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.65rem",
    color: "#5a5f65",
    letterSpacing: "0.2em",
    margin: "0.5rem 0.5rem 0.5rem",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "6px",
    background: "transparent",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    transition: "background 0.15s",
  },
  menuItemActive: {
    background: "#282a2e",
    boxShadow: "inset 2px 0 0 #f0c674",
  },
  icon: {
    fontSize: "1rem",
    color: "#f0c674",
    width: "18px",
    textAlign: "center",
  },
  label: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.82rem",
    color: "#c5c8c6",
    flex: 1,
    letterSpacing: "0.05em",
  },
  badge: {
    background: "#373b41",
    color: "#f0c674",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.65rem",
    padding: "1px 6px",
    borderRadius: "10px",
    letterSpacing: "0.05em",
  },
  divider: {
    height: "1px",
    background: "#373b41",
    margin: "1rem 1.5rem",
  },
  recentItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.35rem 0.75rem",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.78rem",
    color: "#969896",
    width: "100%",
    textAlign: "left",
    transition: "color 0.15s",
    letterSpacing: "0.03em",
  },
  dot: {
    color: "#5a5f65",
    fontSize: "0.7rem",
  },
  userCard: {
    marginTop: "auto",
    padding: "1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    borderTop: "1px solid #373b41",
  },
  userAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f0c674, #de935f)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Courier New', monospace",
    fontWeight: "700",
    fontSize: "0.7rem",
    color: "#1d1f21",
    flexShrink: 0,
  },
  userName: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.8rem",
    color: "#c5c8c6",
    margin: 0,
    letterSpacing: "0.05em",
  },
  userRole: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.65rem",
    color: "#5a5f65",
    margin: 0,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
};
