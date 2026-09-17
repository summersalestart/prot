const projects = [
  {
    status: 'Featured project',
    title: 'TakeABreak',
    tagline: 'Reminds you to take a break based on set time.',
    tech: 'Python',
    url: 'https://github.com/summersalestart/takeabreak',
    image: 'https://i.ibb.co/7ttXndkC/span-style-color-rgb-0-0-0-takea-span-span-style-color.png',
    imageAlt: 'TakeABreak preview',
  },
  {
    status: 'CLI-based',
    title: 'OneClean',
    tagline: 'A clean, lightweight CLI junk cleaner.',
    tech: 'Python',
    url: 'https://github.com/summersalestart/oneclean',
    image: 'https://i.ibb.co/W4sSVhJK/span-style-color-rgb-148-255-30-one-span-clean.png',
    imageAlt: 'OneClean preview',
  },
  {
    status: 'My best project',
    title: 'Novum',
    tagline: 'No BS, no bloat: a lightweight autoclicker with naturally varying click times.',
    tech: 'Python',
    url: 'https://github.com/summersalestart/novum',
    image: 'https://i.ibb.co/YB3Z3SYQ/n.png',
    imageAlt: 'Novum preview',
  },
]

const projectList = document.querySelector('#project-list')

projectList.innerHTML = projects.map((project, index) => `
  <section class="project" id="project-${index + 1}">
    <div class="project-copy">
      <p class="status">${project.status}</p>
      <h2>${project.title}</h2>
      <p class="tagline">${project.tagline}</p>
      <a class="source-button" href="${project.url}" target="_blank" rel="noreferrer">View source <span>↗</span></a>
      <p class="tech">Built with ${project.tech}</p>
    </div>
    <img class="project-image" src="${project.image}" alt="${project.imageAlt}" />
    ${index === 0 ? '<p class="scroll-hint">Scroll to explore projects <b>↓</b></p>' : ''}
  </section>
`).join('')
