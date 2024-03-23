import './Home.css';

export default function Home() {
    return (
      <div>
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Brian Henning</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">solutions engineer</p>
            <img src="img/photo-brian-henning-nobackground.png" alt="Brian Henning smiling" class="intro__img" />
        </section>

        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div class="services">
                <div class="service">
                    <h3 class="service-header"><b>Software Development</b></h3>
                    <p>As a software developer, I've led and contributed to projects involving diverse programming languages and technologies, developing robust solutions, enhancing efficiency and security through system migrations, and innovating within the tech landscape. Adapting to technological shifts, mastering new skills, and exceeding technical and security standards in today's digital world drive my journey from engineering to leading security-focused initiatives.</p>
                </div>

                <div class="service">
                    <h3 class="service-header"><b>Technical Sales</b></h3>
                    <p>In technical sales, I merge deep technical knowledge with strategic sales techniques to meet client needs. Understanding technology intricacies and effectively communicating benefits to non-technical stakeholders allows me to close deals and build lasting client relationships. My success stems from expertise, adaptability, and genuine commitment to solving customer problems.</p>
                </div>

                <div class="service">
                    <h3 class="service-header"><b>Cyber Security</b></h3>
                    <p>In my cybersecurity role, I lead initiatives to improve system security, identifying vulnerabilities and implementing strategic defenses. Efforts have boosted secure coding practices and security metrics, showing dedication to safeguarding information. Emphasizing proactive problem-solving and deep cybersecurity understanding ensures compliance and protection against evolving threats.</p>
                </div>
            </div>

            <a href="#work" class="btn">My Work</a>
        </section>

        <section class="about-me" id="about">
           <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">Technical seller based out of Minneapolis</p>

           <div class="about-me__body">
               <p>I'm Brian Henning, a seasoned professional in the realms of software development, sales, and cybersecurity. My journey has been marked by a dedication to creating innovative software solutions, a knack for strategically closing sales, and a commitment to enhancing cybersecurity measures. My role as a solutions engineer has allowed me to blend my technical expertise with my ability to understand and meet customer needs, driving sustainable growth and securing key deals. In cybersecurity, I've led initiatives that significantly bolstered system security, showcasing my ability to navigate complex challenges and implement robust protections. This blend of skills underscores my holistic approach to tackling today's digital challenges, aiming to contribute meaningfully to the success of the organizations I work with.</p>
           </div>

           <img src="img/brian-with-maggie.jpg" alt="Brian with one of his 3 daughters" class="about-me__img" />
        </section>

        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-01.jpg" alt="React Finance Application" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-02.jpg" alt="Proxmox Server" class="portfolio__img" />
                </a>

                <a href="pfsense-portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-03.jpg" alt="pFsense Router" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-04.jpg" alt="item4" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-05.jpg" alt="item5" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-06.jpg" alt="item6" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-07.jpg" alt="item7" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-08.jpg" alt="item8" class="portfolio__img" />
                </a>

            </div>
        </section>


        <footer class="footer">
            <a href="mailto:henninb@gmail.com" class="footer__link">henninb@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io/henninb/projects">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://dribbble.com/henninb">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/brian-henning-9213bb5/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com/henninb">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/henninb">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://gitlab.com/henninb">
                        <i class="fab fa-gitlab"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://reddit.com/user/z037640">
                        <i class="fab fa-reddit"></i>
                    </a>
                </li>
            </ul>
        </footer>
      </div>
    );
};
