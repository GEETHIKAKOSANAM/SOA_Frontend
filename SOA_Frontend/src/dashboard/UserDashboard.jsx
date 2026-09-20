import "./UserDashboard.css";

function UserDashboard({ onLogout }) {
  return (
    <div className="user-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="user-sidebar">

        <div className="user-sidebar-logo">
          <img
            src="/src/assets/logo.png"
            alt="VoltGrid"
          />
        </div>

        <nav className="user-sidebar-nav">

          <p className="user-nav-title">MAIN</p>

          <button className="user-nav-item active">
            <span>▦</span>
            Dashboard
          </button>


          <p className="user-nav-title">CHARGING</p>

          <button className="user-nav-item">
            <span>⚡</span>
            Find Station
          </button>

          <button className="user-nav-item">
            <span>🔌</span>
            My Sessions
          </button>


          <p className="user-nav-title">ACTIVITY</p>

          <button className="user-nav-item">
            <span>◷</span>
            History
          </button>

          <button className="user-nav-item">
            <span>₹</span>
            Bills
          </button>


          <p className="user-nav-title">ACCOUNT</p>

          <button className="user-nav-item">
            <span>♙</span>
            Profile
          </button>

        </nav>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="user-main-content">

        {/* ================= TOP BAR ================= */}

        <header className="user-topbar">

          <div>
            <h1>Dashboard</h1>
            <p>VoltGrid EV Charging Network</p>
          </div>


          <div className="user-profile">

            <div className="user-notification">
              🔔
              <span></span>
            </div>

            <div className="user-avatar">
              U
            </div>

            <div className="user-profile-info">
              <strong>EV User</strong>
              <span>Customer</span>
            </div>

            <button
              className="user-logout-button"
              onClick={onLogout}
            >
              Logout
            </button>

          </div>

        </header>


        {/* ================= WELCOME ================= */}

        <section className="user-welcome-section">

          <div>
            <h2>Welcome back! 👋</h2>

            <p>
              Find a charging station and keep your journey moving.
            </p>
          </div>

          <div className="connection-status">
            <span></span>
            Network Online
          </div>

        </section>


        {/* ================= STATISTICS ================= */}

        <section className="user-stats-grid">

          <div className="user-stat-card">

            <div className="user-stat-icon station-stat-icon">
              ⚡
            </div>

            <div>
              <p>Nearby Stations</p>
              <h3>24</h3>
              <span>
                Available now
              </span>
            </div>

          </div>


          <div className="user-stat-card">

            <div className="user-stat-icon session-stat-icon">
              🔌
            </div>

            <div>
              <p>Active Session</p>
              <h3>1</h3>
              <span className="user-stat-active">
                Charging now
              </span>
            </div>

          </div>


          <div className="user-stat-card">

            <div className="user-stat-icon energy-stat-icon">
              ◉
            </div>

            <div>
              <p>Energy Consumed</p>
              <h3>84.6 kWh</h3>
              <span>
                This month
              </span>
            </div>

          </div>


          <div className="user-stat-card">

            <div className="user-stat-icon bill-stat-icon">
              ₹
            </div>

            <div>
              <p>Total Spent</p>
              <h3>₹1,284</h3>
              <span>
                This month
              </span>
            </div>

          </div>

        </section>


        {/* ================= ACTIVE SESSION ================= */}

        <section className="user-dashboard-grid">

          <div className="user-dashboard-card active-session-card">

            <div className="user-card-header">

              <div>
                <h3>Active Charging Session</h3>
                <p>Your vehicle is currently charging</p>
              </div>

              <span className="charging-live-badge">
                ● CHARGING
              </span>

            </div>


            <div className="active-session-content">

              <div className="charging-progress">

                <div className="charging-circle">

                  <div>
                    <strong>68%</strong>
                    <span>Battery</span>
                  </div>

                </div>

              </div>


              <div className="session-details">

                <div>
                  <span>Station</span>
                  <strong>VG-VJA-014</strong>
                </div>

                <div>
                  <span>Power</span>
                  <strong>42 kW</strong>
                </div>

                <div>
                  <span>Energy Delivered</span>
                  <strong>24.7 kWh</strong>
                </div>

                <div>
                  <span>Duration</span>
                  <strong>32 min</strong>
                </div>

              </div>

            </div>


            <button className="stop-charging-button">
              View Session
            </button>

          </div>


          {/* ================= QUICK ACTIONS ================= */}

          <div className="user-dashboard-card">

            <div className="user-card-header">

              <div>
                <h3>Quick Actions</h3>
                <p>Manage your charging</p>
              </div>

            </div>


            <div className="quick-actions">

              <button className="quick-action">

                <div className="quick-action-icon">
                  ⚡
                </div>

                <div>
                  <strong>Find Station</strong>
                  <span>Locate nearby chargers</span>
                </div>

              </button>


              <button className="quick-action">

                <div className="quick-action-icon">
                  🔌
                </div>

                <div>
                  <strong>Start Charging</strong>
                  <span>Begin a new session</span>
                </div>

              </button>


              <button className="quick-action">

                <div className="quick-action-icon">
                  ₹
                </div>

                <div>
                  <strong>View Bills</strong>
                  <span>Check your payments</span>
                </div>

              </button>

            </div>

          </div>

        </section>


        {/* ================= NEARBY STATIONS ================= */}

        <section className="user-dashboard-card nearby-card">

          <div className="user-card-header">

            <div>
              <h3>Nearby Charging Stations</h3>
              <p>Available charging stations near you</p>
            </div>

            <button className="user-view-button">
              View All
            </button>

          </div>


          <div className="station-list">

            <div className="user-station">

              <div className="station-info">

                <div className="station-icon">
                  ⚡
                </div>

                <div>
                  <strong>VG-VJA-014</strong>
                  <p>Vijayawada • 1.2 km away</p>
                </div>

              </div>

              <div className="station-meta">
                <span className="station-available">
                  Available
                </span>
                <span>60 kW</span>
                <span>CCS2</span>
              </div>

              <button className="charge-button">
                Charge Now
              </button>

            </div>


            <div className="user-station">

              <div className="station-info">

                <div className="station-icon">
                  ⚡
                </div>

                <div>
                  <strong>VG-VJA-021</strong>
                  <p>Vijayawada • 2.4 km away</p>
                </div>

              </div>

              <div className="station-meta">
                <span className="station-available">
                  Available
                </span>
                <span>120 kW</span>
                <span>CCS2</span>
              </div>

              <button className="charge-button">
                Charge Now
              </button>

            </div>


            <div className="user-station">

              <div className="station-info">

                <div className="station-icon">
                  ⚡
                </div>

                <div>
                  <strong>VG-VJA-008</strong>
                  <p>Vijayawada • 3.1 km away</p>
                </div>

              </div>

              <div className="station-meta">
                <span className="station-busy">
                  Busy
                </span>
                <span>60 kW</span>
                <span>Type 2</span>
              </div>

              <button className="charge-button disabled">
                Busy
              </button>

            </div>

          </div>

        </section>


        {/* ================= RECENT HISTORY ================= */}

        <section className="user-dashboard-card">

          <div className="user-card-header">

            <div>
              <h3>Recent Charging History</h3>
              <p>Your latest charging sessions</p>
            </div>

            <button className="user-view-button">
              View History
            </button>

          </div>


          <div className="user-table-container">

            <table>

              <thead>

                <tr>
                  <th>Session</th>
                  <th>Station</th>
                  <th>Energy</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>

              </thead>


              <tbody>

                <tr>
                  <td>#SES1023</td>
                  <td>VG-VJA-021</td>
                  <td>32.1 kWh</td>
                  <td>₹486</td>
                  <td>
                    <span className="history-completed">
                      Completed
                    </span>
                  </td>
                  <td>Today, 10:42 AM</td>
                </tr>


                <tr>
                  <td>#SES1019</td>
                  <td>VG-VJA-008</td>
                  <td>18.7 kWh</td>
                  <td>₹284</td>
                  <td>
                    <span className="history-completed">
                      Completed
                    </span>
                  </td>
                  <td>Yesterday, 6:18 PM</td>
                </tr>


                <tr>
                  <td>#SES1015</td>
                  <td>VG-GNT-012</td>
                  <td>27.4 kWh</td>
                  <td>₹412</td>
                  <td>
                    <span className="history-completed">
                      Completed
                    </span>
                  </td>
                  <td>18 Sep, 2:30 PM</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default UserDashboard;