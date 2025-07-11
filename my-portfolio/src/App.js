// src/App.js
import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.profileSection}>
          <img src="/profile.jpg" alt="Rich Layne" style={styles.profileImage} />
          <div style={styles.headerText}>
            <h1 style={styles.title}>Rich Layne</h1>
            <p style={styles.tagline}>Computer Science Student | Help Desk Technician | Tech Support Specialist</p>
            <p style={styles.contact}>
              <span style={styles.contactInfo}>(916) 217-6003</span> | 
              <span style={styles.contactInfo}> richardlayne13@gmail.com</span>
            </p>
          </div>
        </div>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.aboutContent}>
          <p style={styles.aboutText}>
            Hello! I'm Rich Layne, a Computer Science student at Western Governors University, 
            pursuing my Bachelor's degree. Currently working as a Help Desk Technician at Visions In Education, 
            where I provide comprehensive technical support and device management services.
          </p>
          <p style={styles.aboutText}>
            With hands-on experience in troubleshooting various devices, customer service, and technical support, 
            I combine my academic knowledge with practical skills to solve complex technical problems. 
            I'm passionate about technology and committed to delivering exceptional user experiences.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>Technical Support</h3>
            <ul style={styles.skillList}>
              <li>PC Hardware Support</li>
              <li>Remote Desktop Support</li>
              <li>Device Troubleshooting</li>
              <li>Security Awareness</li>
              <li>Software Installation</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>Operating Systems</h3>
            <ul style={styles.skillList}>
              <li>Windows (All Versions)</li>
              <li>Chrome OS</li>
              <li>macOS</li>
              <li>Linux Systems</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>Programming</h3>
            <ul style={styles.skillList}>
              <li>C++</li>
              <li>Data Structures</li>
              <li>Algorithm Design</li>
              <li>Object-Oriented Programming</li>
              <li>React & JavaScript</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>Software & Tools</h3>
            <ul style={styles.skillList}>
              <li>Microsoft Office Suite</li>
              <li>Google Workspace</li>
              <li>CRM Software</li>
              <li>POS Systems</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <div style={styles.projectsGrid}>
          <div style={styles.projectCard}>
            <div style={styles.projectPreview}>
              <img 
                src="/ronsmithey-screenshot.png" 
                alt="Ron Smithey Financial Website Screenshot"
                style={styles.projectScreenshot}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{...styles.screenshotFallback, display: 'none'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#667eea"/>
                </svg>
                <span style={styles.fallbackText}>Financial Website</span>
              </div>
            </div>
            <h3 style={styles.projectTitle}>Ron Smithey Financial Website</h3>
            <p style={styles.projectDescription}>
              A professional financial services website built for a client, featuring modern design 
              and responsive layout. Deployed on Netlify for optimal performance.
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>React</span>
              <span style={styles.techTag}>CSS</span>
              <span style={styles.techTag}>Netlify</span>
            </div>
            <a 
              href="https://polite-shortbread-02e4e8.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.projectLink}
            >
              View Project →
            </a>
          </div>
          <div style={styles.projectCard}>
            <div style={styles.projectPreview}>
              <img 
                src="/golf-swing-analyzer-screenshot.png" 
                alt="Golf Swing Analyzer Screenshot"
                style={styles.projectScreenshot}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{...styles.screenshotFallback, display: 'none'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" fill="#667eea"/>
                </svg>
                <span style={styles.fallbackText}>Golf Swing Analyzer</span>
              </div>
            </div>
            <h3 style={styles.projectTitle}>Golf Swing Analyzer</h3>
            <p style={styles.projectDescription}>
              An interactive web and mobile application that analyzes golf swing mechanics using computer vision 
              and machine learning. Features real-time swing analysis and performance feedback.
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>JavaScript</span>
              <span style={styles.techTag}>Computer Vision</span>
              <span style={styles.techTag}>ML</span>
              <span style={styles.techTag}>Netlify</span>
            </div>
            <a 
              href="https://golfswinganalyzer.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.projectLink}
            >
              View Project →
            </a>
          </div>
          <div style={styles.projectCard}>
            <div style={styles.projectPreview}>
              <img 
                src="/portfolio-screenshot.png" 
                alt="Personal Portfolio Screenshot"
                style={styles.projectScreenshot}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{...styles.screenshotFallback, display: 'none'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="#667eea"/>
                </svg>
                <span style={styles.fallbackText}>Portfolio Site</span>
              </div>
            </div>
            <h3 style={styles.projectTitle}>Personal Portfolio</h3>
            <p style={styles.projectDescription}>
              A responsive portfolio website showcasing my skills, projects, and experience. 
              Built with React and modern web technologies.
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>React</span>
              <span style={styles.techTag}>JavaScript</span>
              <span style={styles.techTag}>CSS</span>
            </div>
            <span style={styles.projectLink}>You're viewing it now!</span>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <div style={styles.experienceCard}>
          <h3 style={styles.experienceTitle}>Help Desk Technician</h3>
          <p style={styles.experienceCompany}>Visions In Education, Carmichael, CA</p>
          <p style={styles.experienceDate}>January 2025 - Present</p>
          <ul style={styles.experienceList}>
            <li>Provide phone, remote, and in-person technical support to students and staff</li>
            <li>Troubleshoot Chromebooks, MacBooks, and Windows devices</li>
            <li>Manage device inventory including shipping, receiving, and quality control</li>
            <li>Refurbish and reimage returned laptops for redeployment</li>
            <li>Perform hardware repairs and component replacements</li>
          </ul>
        </div>
        <div style={styles.experienceCard}>
          <h3 style={styles.experienceTitle}>Member Services Representative</h3>
          <p style={styles.experienceCompany}>Crunch Fitness LLC, Sacramento, CA</p>
          <p style={styles.experienceDate}>September 2022 - December 2023</p>
          <ul style={styles.experienceList}>
            <li>Delivered high-quality customer service and resolved member inquiries</li>
            <li>Managed CRM software for member activity tracking and billing</li>
            <li>Promoted gym services and helped increase membership retention</li>
            <li>Maintained front desk operations and ensured smooth daily workflows</li>
          </ul>
        </div>
        <div style={styles.experienceCard}>
          <h3 style={styles.experienceTitle}>Point-of-Sale Associate</h3>
          <p style={styles.experienceCompany}>Target Corporation, Sacramento, CA</p>
          <p style={styles.experienceDate}>April 2021 - August 2022</p>
          <ul style={styles.experienceList}>
            <li>Operated cash register systems and processed digital payments</li>
            <li>Troubleshot technical issues and minimized system downtime</li>
            <li>Used POS and Linux systems for pricing validation</li>
            <li>Ensured data accuracy and compliance with company policies</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.educationGrid}>
          <div style={styles.educationCard}>
            <h3 style={styles.educationTitle}>Bachelor of Science in Computer Science</h3>
            <p style={styles.educationSchool}>Western Governors University</p>
            <p style={styles.educationDate}>Currently Enrolled</p>
          </div>
          <div style={styles.educationCard}>
            <h3 style={styles.educationTitle}>Associate of Science</h3>
            <p style={styles.educationSchool}>Los Rios Community College</p>
            <p style={styles.educationDate}>May 2024</p>
            <p style={styles.educationMajor}>Math and Physical Science</p>
            <div style={styles.coursework}>
              <h4 style={styles.courseworkTitle}>Relevant Coursework:</h4>
              <ul style={styles.courseworkList}>
                <li>Object Oriented Programming with C++</li>
                <li>Data Structures</li>
                <li>Algorithm Design and Implementation</li>
                <li>Discrete Structures for Computer Science</li>
                <li>Introduction to Structured Programming</li>
                <li>Mechanics of Solids and Fluids</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <div style={styles.contactGrid}>
          <div style={styles.contactItem}>
            <h3 style={styles.contactLabel}>Email</h3>
            <a href="mailto:richardlayne13@gmail.com" style={styles.contactLink}>
              richardlayne13@gmail.com
            </a>
          </div>
          <div style={styles.contactItem}>
            <h3 style={styles.contactLabel}>Let's Connect</h3>
            <p style={styles.contactText}>
              I'm always open to discussing new opportunities, collaborations, 
              or just having a chat about technology and development.
            </p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Rich Layne. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 1000,
    margin: "0 auto",
    padding: 20,
    color: "#333",
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    marginBottom: 50,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "60px 40px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
    border: "4px solid rgba(255,255,255,0.3)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    filter: "contrast(0.85) brightness(1.08) saturate(0.9) blur(0.5px)",
  },
  headerText: {
    textAlign: "left",
    maxWidth: "600px",
  },
  "@media (max-width: 768px)": {
    profileSection: {
      flexDirection: "column",
      gap: "20px",
    },
    headerText: {
      textAlign: "center",
    },
  },
  title: {
    fontSize: "3.5rem",
    margin: 0,
    fontWeight: "700",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  tagline: {
    fontSize: "1.4rem",
    color: "#f0f0f0",
    margin: "20px 0 10px 0",
    fontWeight: "300",
  },
  contact: {
    fontSize: "1.1rem",
    color: "#e0e0e0",
    margin: "15px 0 0 0",
  },
  contactInfo: {
    fontWeight: "400",
  },
  section: {
    marginBottom: 50,
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    border: "1px solid #e0e0e0",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    color: "#2c3e50",
    marginBottom: "30px",
    borderBottom: "3px solid #667eea",
    paddingBottom: "10px",
    fontWeight: "600",
  },
  aboutContent: {
    fontSize: "1.1rem",
  },
  aboutText: {
    marginBottom: "20px",
    color: "#555",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  skillCategory: {
    background: "#f8f9fa",
    padding: "25px",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  },
  skillCategoryTitle: {
    fontSize: "1.3rem",
    color: "#495057",
    marginBottom: "15px",
    fontWeight: "600",
  },
  skillList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  projectCard: {
    background: "#f8f9fa",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #e9ecef",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  "projectCard:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
  "projectCard:hover .projectScreenshot": {
    transform: "scale(1.05)",
  },
  projectPreview: {
    position: "relative",
    marginBottom: "20px",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#f8f9fa",
    border: "1px solid #e9ecef",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  projectScreenshot: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
    filter: "contrast(0.8) brightness(1.05) saturate(0.9) blur(0.6px)",
  },
  screenshotFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "180px",
    gap: "10px",
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    color: "#6c757d",
  },
  fallbackText: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#495057",
  },
  websiteIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e9ecef",
  },
  previewLabel: {
    fontSize: "1rem",
    color: "#495057",
    fontWeight: "600",
  },
  projectTitle: {
    fontSize: "1.4rem",
    color: "#2c3e50",
    marginBottom: "15px",
    fontWeight: "600",
  },
  projectDescription: {
    color: "#666",
    marginBottom: "20px",
    fontSize: "1rem",
  },
  projectTech: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px",
  },
  techTag: {
    background: "#667eea",
    color: "white",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  projectLink: {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    display: "inline-block",
    transition: "color 0.3s ease",
  },
  experienceCard: {
    background: "#f8f9fa",
    padding: "30px",
    borderRadius: "10px",
    border: "1px solid #e9ecef",
    marginBottom: "25px",
  },
  experienceTitle: {
    fontSize: "1.5rem",
    color: "#2c3e50",
    marginBottom: "8px",
    fontWeight: "600",
  },
  experienceCompany: {
    color: "#667eea",
    fontWeight: "600",
    fontSize: "1.1rem",
    marginBottom: "5px",
  },
  experienceDate: {
    color: "#666",
    fontWeight: "500",
    marginBottom: "15px",
    fontSize: "1rem",
  },
  experienceDescription: {
    color: "#666",
    marginBottom: "20px",
    fontSize: "1rem",
  },
  experienceList: {
    color: "#555",
    paddingLeft: "20px",
  },
  educationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  educationCard: {
    background: "#f8f9fa",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #e9ecef",
  },
  educationTitle: {
    fontSize: "1.4rem",
    color: "#2c3e50",
    marginBottom: "10px",
    fontWeight: "600",
  },
  educationSchool: {
    color: "#667eea",
    fontWeight: "600",
    fontSize: "1.1rem",
    marginBottom: "5px",
  },
  educationDate: {
    color: "#666",
    fontWeight: "500",
    marginBottom: "15px",
    fontSize: "1rem",
  },
  educationMajor: {
    color: "#555",
    fontSize: "1rem",
    fontStyle: "italic",
  },
  coursework: {
    marginTop: "15px",
  },
  courseworkTitle: {
    fontSize: "1.1rem",
    color: "#495057",
    marginBottom: "10px",
    fontWeight: "600",
  },
  courseworkList: {
    color: "#555",
    paddingLeft: "20px",
    fontSize: "0.95rem",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  contactItem: {
    background: "#f8f9fa",
    padding: "25px",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
    textAlign: "center",
  },
  contactLabel: {
    fontSize: "1.3rem",
    color: "#2c3e50",
    marginBottom: "15px",
    fontWeight: "600",
  },
  contactLink: {
    color: "#667eea",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    display: "block",
    transition: "color 0.3s ease",
  },
  contactText: {
    color: "#666",
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #ccc",
    paddingTop: 30,
    color: "#888",
    marginTop: 40,
    fontSize: "0.95rem",
  },
};

export default App;
