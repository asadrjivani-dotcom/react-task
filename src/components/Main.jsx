import React from "react";

const stats = [
  { label: "Active Projects", value: "12", delta: "+2", up: true },
  { label: "Tasks Done", value: "84", delta: "+9", up: true },
  { label: "Team Members", value: "7", delta: "0", up: null },
  { label: "Avg. Velocity", value: "94%", delta: "-1%", up: false },
];

const tasks = [
  { name: "Finalize API schema", priority: "HIGH", status: "In Progress" },
  { name: "Write unit tests for auth module", priority: "MED", status: "Todo" },
  { name: "Deploy staging environment", priority: "HIGH", status: "Blocked" },
  { name: "Update design tokens", priority: "LOW", status: "Done" },
  { name: "Code review — PR #48", priority: "MED", status: "In Progress" },
];

const priorityColor = { HIGH: "#cc6666", MED: "#de935f", LOW: "#b5bd68" };
const statusColor = {
  "In Progress": "#81a2be",
  "Todo": "#969896",
  "Blocked": "#cc6666",
  "Done": "#b5bd68",
};

export default function Main() {
  return (
    <main style={styles.main}>
      {/* Page title */}
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Dashboard</h1>
          <p style={styles.pageSubtitle}>Sunday, April 5 — Sprint 14</p>
        </div>
        <button style={styles.ctaBtn}
          onMouseEnter={e => e.currentTarget.style.background = "#e0b764"}
          onMouseLeave={e => e.currentTarget.style.background = "#f0c674"}
        >
          + New Task
        </button>
      </div>

      {/* Stats row */}
      <div style={styles.statsGrid}>
        {stats.map(({ label, value, delta, up }) => (
          <div key={label} style={styles.statCard}>
            <p style={styles.statLabel}>{label}</p>
            <p style={styles.statValue}>{value}</p>
            <p style={{
              ...styles.statDelta,
              color: up === true ? "#b5bd68" : up === false ? "#cc6666" : "#969896",
            }}>
              {up === true ? "▲" : up === false ? "▼" : "●"} {delta}
            </p>
          </div>
        ))}
      </div>

      {/* Activity chart placeholder */}
      <div style={styles.chartCard}>
        <p style={styles.cardTitle}>Activity — Last 7 Days</p>
        <div style={styles.chartBars}>
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <div key={i} style={styles.barWrap}>
              <div style={{ ...styles.bar, height: `${h}%` }} />
              <span style={styles.barLabel}>{["M","T","W","T","F","S","S"][i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks table */}
      <div style={styles.tableCard}>
        <p style={styles.cardTitle}>Active Tasks</p>
        <table style={styles.table}>
          <thead>
            <tr>
              {["Task", "Priority", "Status"].map(h => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map(({ name, priority, status }) => (
              <tr key={name} style={styles.tr}
                onMouseEnter={e => e.currentTarget.style.background = "#282a2e"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <td style={styles.td}>{name}</td>
                <td style={styles.td}>
                  <span style={{ ...styles.pill, color: priorityColor[priority], border: `1px solid ${priorityColor[priority]}33` }}>
                    {priority}
                  </span>
                </td>
                <td style={styles.td}>
                  <span style={{ ...styles.pill, color: statusColor[status], border: `1px solid ${statusColor[status]}33` }}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const styles = {
  main: {
    flex: 1,
    background: "#282a2e",
    padding: "2rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  pageHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  pageTitle: {
    fontFamily: "'Courier New', monospace",
    fontSize: "1.8rem",
    color: "#e8e8e3",
    margin: 0,
    fontWeight: "800",
    letterSpacing: "0.05em",
  },
  pageSubtitle: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.78rem",
    color: "#5a5f65",
    margin: "4px 0 0",
    letterSpacing: "0.1em",
  },
  ctaBtn: {
    padding: "0.5rem 1.25rem",
    background: "#f0c674",
    color: "#1d1f21",
    border: "none",
    borderRadius: "6px",
    fontFamily: "'Courier New', monospace",
    fontWeight: "700",
    fontSize: "0.82rem",
    cursor: "pointer",
    letterSpacing: "0.05em",
    transition: "background 0.2s",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
  },
  statCard: {
    background: "#1d1f21",
    borderRadius: "10px",
    padding: "1.25rem",
    border: "1px solid #373b41",
  },
  statLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.7rem",
    color: "#5a5f65",
    margin: "0 0 0.5rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },
  statValue: {
    fontFamily: "'Courier New', monospace",
    fontSize: "2rem",
    fontWeight: "800",
    color: "#f0c674",
    margin: "0 0 0.25rem",
    lineHeight: 1,
  },
  statDelta: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.75rem",
    margin: 0,
    letterSpacing: "0.05em",
  },
  chartCard: {
    background: "#1d1f21",
    borderRadius: "10px",
    padding: "1.5rem",
    border: "1px solid #373b41",
  },
  cardTitle: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.72rem",
    color: "#5a5f65",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    margin: "0 0 1.25rem",
  },
  chartBars: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-end",
    height: "100px",
  },
  barWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    gap: "6px",
  },
  bar: {
    width: "100%",
    background: "linear-gradient(180deg, #f0c674, #de935f88)",
    borderRadius: "4px 4px 0 0",
    transition: "height 0.3s",
  },
  barLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.65rem",
    color: "#5a5f65",
    letterSpacing: "0.1em",
  },
  tableCard: {
    background: "#1d1f21",
    borderRadius: "10px",
    padding: "1.5rem",
    border: "1px solid #373b41",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.65rem",
    color: "#5a5f65",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    textAlign: "left",
    padding: "0.5rem 0.75rem",
    borderBottom: "1px solid #373b41",
  },
  tr: {
    transition: "background 0.15s",
    borderRadius: "6px",
    cursor: "default",
  },
  td: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.82rem",
    color: "#c5c8c6",
    padding: "0.65rem 0.75rem",
    letterSpacing: "0.03em",
  },
  pill: {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "0.7rem",
    letterSpacing: "0.08em",
    fontWeight: "700",
  },
};
