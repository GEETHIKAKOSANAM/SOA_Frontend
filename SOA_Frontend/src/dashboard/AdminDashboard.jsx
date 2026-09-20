import "./AdminDashboard.css";

function AdminDashboard({ onLogout }) {
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <img src="/src/assets/logo.png" alt="VoltGrid" />
        </div>

        <nav className="sidebar-nav">

          <p className="nav-title">MAIN</p>

          <button className="nav-item active">
            <span>▦</span>
            Dashboard
          </button>


          <p className="nav-title">NETWORK</p>

          <button className="nav-item">
            <span>⚡</span>
            Stations
          </button>

          <button className="nav-item">
            <span>◉</span>
            Grid Monitor
          </button>


          <p className="nav-title">OPERATIONS</p>

          <button className="nav-item">
            <span>🔌</span>
            Charging Sessions
          </button>

          <button className="nav-item">
            <span>₹</span>
            Billing
          </button>


          <p className="nav-title">MANAGEMENT</p>

          <button className="nav-item">
            <span>♙</span>
            Users
          </button>


          <p className="nav-title">SYSTEM</p>

          <button className="nav-item">
            <span>⚠</span>
            Alerts
          </button>

          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>

        </nav>

      </aside>


      {/* Main Content */}
      <main className="main-content">

        {/* Top Bar */}
        <header className="topbar">

          <div>
            <h1>Dashboard</h1>
            <p>VoltGrid Infrastructure Management</p>
          </div>

          <div className="admin-profile">

            <div className="notification">
              🔔
              <span className="notification-dot"></span>
            </div>

            <div className="profile-avatar">
              A
            </div>

            <div className="profile-info">
              <strong>Administrator</strong>
              <span>Admin</span>
            </div>

            {/* Logout Button */}
            <button
              className="top-logout-button"
              onClick={onLogout}
            >
              Logout
            </button>

          </div>

        </header>


        {/* Welcome */}
        <section className="welcome-section">

          <div>
            <h2>Welcome back, Administrator</h2>

            <p>
              Here's what's happening across your EV charging network today.
            </p>
          </div>

          <div className="system-status">
            <span></span>
            All Systems Operational
          </div>

        </section>


        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon station-icon">
              ⚡
            </div>

            <div>
              <p>Total Stations</p>
              <h3>248</h3>
              <span className="stat-positive">
                ↑ 8.2% this month
              </span>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon session-icon">
              🔌
            </div>

            <div>
              <p>Active Sessions</p>
              <h3>73</h3>
              <span className="stat-positive">
                ↑ 12.4% today
              </span>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon energy-icon">
              ◉
            </div>

            <div>
              <p>Energy Consumed</p>
              <h3>18.4 MWh</h3>
              <span className="stat-positive">
                ↑ 6.7% today
              </span>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon revenue-icon">
              ₹
            </div>

            <div>
              <p>Total Revenue</p>
              <h3>₹2.84L</h3>
              <span className="stat-positive">
                ↑ 9.3% this month
              </span>
            </div>

          </div>

        </section>


        {/* Middle Section */}
        <section className="dashboard-grid">

          {/* Station Status */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h3>Station Status</h3>
                <p>Current network availability</p>
              </div>

              <button>View All</button>

            </div>


            <div className="station-status-grid">

              <div className="status-box">
                <span className="status-dot online"></span>
                <strong>214</strong>
                <p>Online</p>
              </div>

              <div className="status-box">
                <span className="status-dot warning"></span>
                <strong>21</strong>
                <p>Warning</p>
              </div>

              <div className="status-box">
                <span className="status-dot offline"></span>
                <strong>13</strong>
                <p>Offline</p>
              </div>

            </div>


            <div className="station-bar">

              <div
                className="online-bar"
                style={{ width: "86%" }}
              ></div>

            </div>

            <p className="availability-text">
              86.3% of charging stations are currently operational
            </p>

          </div>


          {/* Grid Load */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h3>Grid Load</h3>
                <p>Real-time power utilization</p>
              </div>

              <span className="live-badge">
                LIVE
              </span>

            </div>


            <div className="grid-load-content">

              <div className="load-circle">

                <div>
                  <strong>72%</strong>
                  <span>Current Load</span>
                </div>

              </div>


              <div className="load-details">

                <div>
                  <span>Current Consumption</span>
                  <strong>9.0 MW</strong>
                </div>

                <div>
                  <span>Total Capacity</span>
                  <strong>12.5 MW</strong>
                </div>

                <div>
                  <span>Available</span>
                  <strong className="available-power">
                    3.5 MW
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Recent Sessions */}
        <section className="dashboard-card sessions-card">

          <div className="card-header">

            <div>
              <h3>Recent Charging Sessions</h3>
              <p>Latest activity across the network</p>
            </div>

            <button>View All</button>

          </div>


          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Session ID</th>
                  <th>User</th>
                  <th>Station</th>
                  <th>Energy</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>


              <tbody>

                <tr>
                  <td>#SES1024</td>
                  <td>Rahul Kumar</td>
                  <td>ST-001</td>
                  <td>18.4 kWh</td>
                  <td>
                    <span className="table-status charging">
                      Charging
                    </span>
                  </td>
                  <td>2 min ago</td>
                </tr>


                <tr>
                  <td>#SES1023</td>
                  <td>Priya Sharma</td>
                  <td>ST-024</td>
                  <td>32.1 kWh</td>
                  <td>
                    <span className="table-status completed">
                      Completed
                    </span>
                  </td>
                  <td>8 min ago</td>
                </tr>


                <tr>
                  <td>#SES1022</td>
                  <td>Arjun Reddy</td>
                  <td>ST-014</td>
                  <td>12.7 kWh</td>
                  <td>
                    <span className="table-status charging">
                      Charging
                    </span>
                  </td>
                  <td>11 min ago</td>
                </tr>


                <tr>
                  <td>#SES1021</td>
                  <td>Sneha Rao</td>
                  <td>ST-008</td>
                  <td>24.3 kWh</td>
                  <td>
                    <span className="table-status completed">
                      Completed
                    </span>
                  </td>
                  <td>18 min ago</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* Alerts */}
        <section className="dashboard-card alerts-card">

          <div className="card-header">

            <div>
              <h3>System Alerts</h3>
              <p>Issues requiring administrator attention</p>
            </div>

            <button>View All</button>

          </div>


          <div className="alerts-list">

            <div className="alert-item critical">

              <div className="alert-icon">
                !
              </div>

              <div>
                <strong>Station ST-023 is offline</strong>
                <p>Station has been unavailable for 8 minutes.</p>
              </div>

              <span>8 min ago</span>

            </div>


            <div className="alert-item warning-alert">

              <div className="alert-icon">
                !
              </div>

              <div>
                <strong>High grid load detected</strong>
                <p>Zone 4 has reached 87% power utilization.</p>
              </div>

              <span>12 min ago</span>

            </div>


            <div className="alert-item info-alert">

              <div className="alert-icon">
                i
              </div>

              <div>
                <strong>Station ST-041 approaching capacity</strong>
                <p>Current load has reached 82%.</p>
              </div>

              <span>21 min ago</span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;