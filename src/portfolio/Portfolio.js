import React from 'react';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Profile Avatar"
          style={styles.avatar}
        />
        <h1>Jiocoders</h1>
        <p>📍 Based in Delhi NCR & Mumbai | From Prayagraj, UP</p>
        <p>🎓 Qualification: MCA</p>
        <p>☎️ Mobile: 8888899999</p>
        <p>🧑‍💼 Available for: Part-time, Hybrid, Onsite Full-time (Any Location)</p>
      </header>

      <section style={styles.section}>
        <h2>👨‍💻 Experience</h2>
        <ul>
          <li>📱 Android Development (Java/Kotlin) – 5 years</li>
          <li>📱 Flutter – 4 years</li>
          <li>⚙️ Spring Boot Microservices – 5 years</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>📱 Flutter Mobile App</h2>
        <p>
          A beautiful cross-platform mobile application built with Flutter. It features smooth UI animations, state management with Provider, and integration with REST APIs.
        </p>
        <ul>
          <li>Built with Flutter & Dart</li>
          <li>Uses Provider for state management</li>
          <li>Connects to backend via REST API</li>
          <li>Deployed to Android and iOS</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>💻 Spring Boot + PostgreSQL Backend</h2>
        <p>
          A robust backend RESTful API built with Spring Boot and PostgreSQL for data persistence.
        </p>
        <ul>
          <li>Spring Boot (Java)</li>
          <li>PostgreSQL for database</li>
          <li>JWT-based authentication</li>
          <li>Secure API endpoints</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 Jiocoders | Mobile & Backend Developer</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '2rem',
    color: 'white',
    textAlign: 'center',
  },
  avatar: {
    width: '120px',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  section: {
    padding: '2rem',
    borderBottom: '1px solid #ccc',
  },
  footer: {
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
    backgroundColor: '#f1f1f1',
  },
};

export default App;
