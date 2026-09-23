import { useEffect } from 'react';
import './App.css';
import spiderManPhoto from './assets/Spider-man.png';
import resume from './assets/Imran-Resume.pdf';

function App() {

  useEffect(() => {
  const sections = document.querySelectorAll(
    '.about, .skills, .projects, .contact'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
        } else {
          entry.target.classList.remove('show-section');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    observer.disconnect();
  };
}, []);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          IMRAN<span>.</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        {/* White Spider Web Background */}
        <div className="web"></div>

        {/* Hanging Spider */}
        <div className="hanging-spider"></div>


        {/* HERO CONTENT */}

        <div className="hero-content">

          <p className="small-title">
            Welcome To My Spidey World
          </p>

          <h1>
            IMRAN <span>N</span>
          </h1>

          <h2>
            Data Analyst <span>|</span> Data Science <span>|</span> AI Automation Engineer
          </h2>

          <p>
            Turning data into meaningful insights and building practical
            technology solutions with Python, SQL, Power BI and AI.
          </p>


          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              VIEW PROJECTS
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              CONTACT ME
            </a>

            <a
              href={resume}
              download="Imran-N-Resume.pdf"
              className="btn btn-outline"
            >
              DOWNLOAD RESUME
            </a>

          </div>

        </div>


        {/* ================= PROFILE PHOTO ================= */}

        <div className="hero-image">

          <img
            src={spiderManPhoto}
            alt="Imran - Data Analyst"
          />

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about" id="about">

        <div className="section-web"></div>

        <p className="section-title">
          01 / ABOUT ME
        </p>

        <h2>
          Who I Am
        </h2>

        <p>
          B.Sc Computer Science graduate with a strong interest in
          Data Analytics, Data Science and AI Automation. Skilled in
          Python, SQL, Power BI, Tableau, Excel and Machine Learning,
          with hands-on experience building data-driven projects and
          analytical dashboards.
        </p>


        <div className="skill-card" style={{ marginTop: '40px', maxWidth: '500px' }}>

          <h3>
            B.Sc Computer Science
          </h3>

          <p>
            Sree Muthukumaraswamy College
          </p>

          <p>
            2022 – 2025
          </p>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="skills" id="skills">

        <div className="section-web"></div>

        <p className="section-title">
          02 / SKILLS
        </p>

        <h2>
          My Skills
        </h2>


        <div className="skills-grid">

          <div className="skill-card">
            <h3>MS Excel</h3>
            <p>
              Pivot Tables, Lookups, Conditional Formatting,
              Data Validation
            </p>
          </div>


          <div className="skill-card">
            <h3>Power BI</h3>
            <p>
              Data Visualization, DAX, Dashboards and
              Business Intelligence
            </p>
          </div>


          <div className="skill-card">
            <h3>Tableau</h3>
            <p>
              Interactive Dashboards, Data Analysis and
              Business Insights
            </p>
          </div>


          <div className="skill-card">
            <h3>Python</h3>
            <p>
              Pandas, NumPy, Matplotlib and Seaborn
            </p>
          </div>


          <div className="skill-card">
            <h3>SQL / MySQL</h3>
            <p>
              Data Querying, Joins, Aggregations and
              Data Analysis
            </p>
          </div>


          <div className="skill-card">
            <h3>EDA</h3>
            <p>
              Data Cleaning, Data Preprocessing and
              Data Transformation
            </p>
          </div>


          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>
              Regression, Classification, Scikit-learn
              and Model Evaluation
            </p>
          </div>


          <div className="skill-card">
            <h3>Deep Learning</h3>
            <p>
              TensorFlow, PyTorch and Keras
            </p>
          </div>


          <div className="skill-card">
            <h3>Soft Skills</h3>
            <p>
              Teamwork, Time Management, Communication
              and Problem Solving
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="projects" id="projects">

        <div className="section-web"></div>

        <p className="section-title">
          03 / PROJECTS
        </p>

        <h2>
          Featured Projects
        </h2>


        <div className="projects-grid">


          {/* PROJECT 1 */}

          <div className="project-card">

            <h3>
              Banking Customer Analysis
            </h3>

            <p>
              Interactive banking customer analysis dashboard
              created using Power BI to understand customer
              behaviour, trends and key business insights.
            </p>

            <p className="project-tech">
              Power BI • DAX • Data Visualization
            </p>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <h3>
              E-Commerce Business Insights
            </h3>

            <p>
              Tableau-based business intelligence project focused
              on sales performance, customer trends and
              e-commerce insights.
            </p>

            <p className="project-tech">
              Tableau • Data Analysis • Visualization
            </p>

          </div>


          {/* PROJECT 3 */}

          <div className="project-card">

            <h3>
              Smart Taxi Prediction
            </h3>

            <p>
              Machine learning project for predicting taxi fares
              using Python, data preprocessing, feature engineering
              and regression models.
            </p>

            <p className="project-tech">
              Python • Machine Learning • Scikit-learn
            </p>

          </div>


          {/* PROJECT 4 */}

          <div className="project-card">

            <h3>
              Performance Cars Pricing Analysis
            </h3>

            <p>
              Python-based analysis of performance car pricing
              data to identify pricing patterns, relationships
              and useful insights.
            </p>

            <p className="project-tech">
              Python • Pandas • NumPy • Visualization
            </p>

          </div>


          {/* PROJECT 5 */}

          <div className="project-card">

            <h3>
              Login Page Application
            </h3>

            <p>
              Full-stack login application developed using React,
              Python API integration and database connectivity.
            </p>

            <p className="project-tech">
              React • Python • APIs • FastAPI
            </p>

          </div>


          {/* PROJECT 6 */}

          <div className="project-card">

            <h3>
              Netflix Data Science Analysis
            </h3>

            <p>
              Data science internship project completed at
              Auspify Technologies, analysing Netflix data to
              discover useful patterns and insights.
            </p>

            <p className="project-tech">
              Python • Data Science • EDA
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <div className="section-web"></div>

        <p className="section-title">
          04 / CONTACT
        </p>

        <h2>
          Let's Connect
        </h2>

        <p>
          Interested in data analytics, data science and
          AI automation opportunities? Feel free to reach out.
        </p>


        <div className="contact-info">

          <p>
            📧{' '}
            <a href="mailto:immuimrann48@gmail.com">
              immuimrann48@gmail.com
            </a>
          </p>


          <p>
            📱{' '}
            <a href="tel:+919566121672">
              +91 9566121672
            </a>
          </p>


          <p>
            🔗{' '}
            <a
              href="https://www.linkedin.com/in/imran-n-60a238293"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>


          <p>
            💻{' '}
            <a
              href="https://github.com/imran-2312"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>
        © 2026 Imran N. Built with React & Passion.
      </footer>

    </div>
  );
}

export default App;