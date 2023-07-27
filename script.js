const projectData = document.querySelector('#work-card');
const heroSection = document.querySelector('#portfolio');
const projectsMob = document.querySelector('#work-card-mobile');

// JavaScript arrays containing work section information

const projects = [
  {
    title: '',
    image: 'images/Img Placeholder (6).png',
    description: '',
    technologies: [],
    button: 'See Project',
  },
  {
    title: 'Data Dashboard Healthcare',
    image: 'images/Img Placeholder (4).png',
    description: `A daily selection of privately personalized
    reads; no accounts or sign-ups required.
     has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',

  },
  {
    title: 'Website Portfolio',
    image: 'images/Img Placeholder (5).png',
    description: `A daily selection of privately 
    personalized reads; no accounts or 
    sign-ups required
    personalized reads; no accounts or 
    sign-ups required. Has been the
     industry's standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Data Dashboard Healthcare',
    image: 'images/Img Placeholder (4).png',
    description: `A daily selection of privately personalized reads;
   no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Website Portfolio',
    image: 'images/Img Placeholder (5).png',
    description: `A daily selection of privately 
    personalized reads; no accounts or 
    sign-ups required
    personalized reads; no accounts or 
    sign-ups required. Has been the
     industry's standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
];

const portfolio = [
  {
    title: 'My Recent Works',
    header: 'Multi Post Stories',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    image: 'images/Img Placeholder.png',
    imageMob: 'images/Img Placeholder (3).png',
    description: `A daily selection
    of privately personalized reads; 
    no accounts or sign-ups <br> required. 
    This has been the industry's 
    standard dummy <br> text ever since 
    the 1500s, when an unknown
     printer took a <br>
    standard dummy text.`,
    button: 'See Project',
  },
];

const descriptions = [
  {
    descriptionSub: `Lorem Ipsum is 
    simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text
       ever since the 1500s, when an unknown 
       printer took a galley of type and 
       scrambled it 1960s. <br><br><br><br>Lorem
        Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy
       text ever since the 1500s, when an unknown 
       printer took a galley of type and scrambled 
       it 1960s with the releax map lapora verita.`,
  },
  {
    descriptionSub: `Lorem Ipsum is 
    simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text
       ever since the 1500s, when an unknown 
       printer took a galley of type and 
       scrambled it 1960s. <br><br>Lorem
        Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy
       text ever since the 1500s, when an unknown 
       printer took a galley of type and scrambled 
       it 1960s with the releax map lapora verita.`,
  },
  {
    descriptionSub: `Lorem Ipsum is 
    simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text
       ever since the 1500s, when an unknown 
       printer took a galley of type and 
       scrambled it 1960s. <br><br>Lorem
        Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy
       text ever since the 1500s, when an unknown 
       printer took a galley of type and scrambled 
       it 1960s with the releax map lapora verita.`,
  },
  {
    descriptionSub: `Lorem Ipsum is 
    simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text
       ever since the 1500s, when an unknown 
       printer took a galley of type and 
       scrambled it 1960s. <br><br>Lorem
        Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy
       text ever since the 1500s, when an unknown 
       printer took a galley of type and scrambled 
       it 1960s with the releax map lapora verita.`,
  },
  {
    descriptionSub: ` Lorem Ipsum is 
    simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text
       ever since the 1500s, when an unknown 
       printer took a galley of type and 
       scrambled it 1960s. <br><br>Lorem
        Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy
       text ever since the 1500s, when an unknown 
       printer took a galley of type and scrambled 
       it 1960s with the releax map lapora verita.`,
  },
  {
    descriptionSub: ` Lorem Ipsum is 
    simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text
       ever since the 1500s, when an unknown 
       printer took a galley of type and 
       scrambled it 1960s. <br><br>Lorem
        Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy
       text ever since the 1500s, when an unknown 
       printer took a galley of type and scrambled 
       it 1960s with the releax map lapora verita.`,
  },
];

const popup = [
  {
    title: 'Keeping track of hundreds of components website',
    button: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/aya.png',
    technologies: ['HTML', 'Boostrap', 'Ruby'],

    description: `Lorem Ipsum is simply dummy text of
     the printing and typesetting industry. Lorem Ipsum has been the 
     industry's standard dummy text ever since the 1500s, when an unknown
     make a type specimen book.
       It has survived not only five centuries,
     but also the leap into electronic typesetting, remaining essent`,
  },
];
// JavaScript arrays containing work section information
const projectsMobile = [
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
];

// Recent section template
let portfolioTemplate = '';

portfolio.forEach((recent) => {
  let technologies = '';
  recent.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const tag = `
  <div class="work-section">
  <div class="recent-work">
      <h3>${recent.title}</h3>
      <hr class="recent-hr">
  </div>
  <div class="project-box">
      <div class="img-holder">
          <img id="img1" src="${recent.image}" alt="">
          <img id="img2" src="${recent.imageMob}" alt="">
      </div>        
      <div class="work-content">
          <h2>${recent.header}</h2>
          <p>
          ${recent.description}
          </p>
          <div class="btn">
              <ul>
              ${technologies}
              </ul>
          </div>
          <div class="see_more_btn">
              <button class="view-project" type="button">${recent.button}</button>
          </div> 
      </div>
  </div>
</div>
    `;
  portfolioTemplate += tag;
});
heroSection.innerHTML = portfolioTemplate;
// Recent section template

// Work section template
let desktopTemplate = '';

projects.forEach((project) => {
  let technologies = '';
  project.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const tag = `
    <div class="card">
    <img class="card-img" src="${project.image}" alt="">
    <div class="cont">
        <h2>${project.title}</h2>
    <p>
      ${project.description}
    </p>
    <ul>
        ${technologies}
    </ul>
   
    </div>
    <div class="card-button">
    <button type="button" class="view-project" >${project.button}</button>
</div>
</div>
    `;
  desktopTemplate += tag;
});
projectData.innerHTML = desktopTemplate;

// Work section template

// Mobile template
let MobileTemplate = '';

projectsMobile.forEach((projectMob) => {
  let technologies = '';
  projectMob.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const code = `
    <div class="card">
    <img class="card-img" src="${projectMob.image}" alt="">
    <div class="cont">
        <h2>${projectMob.title}</h2>
    <p>
      ${projectMob.description}
    </p>
    <ul>
        ${technologies}
    </ul>
   
    </div>
    <div class="card-button">
    <button type="button" class="view-project" >${projectMob.button}</button>
</div>
</div>
    `;
  MobileTemplate += code;
});
projectsMob.innerHTML = MobileTemplate;
// Mobile template

/* ---------------------hamburger start here! below----------------------------- */

/* ---------------------hamburger start here! below----------------------------- */
const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.navtabs');
const backMenu = document.querySelectorAll('#list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
});

backMenu.forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('active');
  Menu.classList.remove('active');
}));

/* ---------------------hamburger code above----------------------------- */

// JavaScript: Create a function to generate the projects section dynamically
function generateProjectsSection(projectsData) {
  let desktopTemplate = '';
  let mobileTemplate = '';

  projectsData.forEach((project) => {
    const technologies = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
    const desktopTag = `
      <div class="card">
        <img class="card-img" src="${project.image}" alt="">
        <div class="cont">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <ul>${technologies}</ul>
        </div>
        <div class="card-button">
          <button type="button" class="view-project">${project.button}</button>
        </div>
      </div>
    `;
    desktopTemplate += desktopTag;

    const mobileTag = `
      <div class="card">
        <img class="card-img" src="${project.image}" alt="">
        <div class="cont">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <ul>${technologies}</ul>
        </div>
        <div class="card-button">
          <button type="button" class="view-project">${project.button}</button>
        </div>
      </div>
    `;
    mobileTemplate += mobileTag;
  });

  projectData.innerHTML = desktopTemplate;
  projectsMob.innerHTML = mobileTemplate;
}

// Call the function passing the projects array to generate the projects section
generateProjectsSection(projects);

// JavaScript: Implement popup window for both mobile and desktop

const popupContainer = document.getElementById('popupContainer');

// ... (previous code remains unchanged)

// JavaScript: Implement popup window for both mobile and desktop
// ...

// ... Previous code ...

function createPopup(projectIndex) {
  const project = projects[projectIndex]; // Get the project using the index
  const para = descriptions[projectIndex]; // Get the project using the index

  const popupHTML = `
    <div class="popup">
    <div class="pop">
      <div class="popup-header">
        <h2>${project.title}</h2>
        <span class="close-popup">&times;</span>
      </div>
      <ul id="lists">${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}</ul>
      <div class="popup-body">
        <img class="popup-img" src="${project.image}" alt="">
        <div class="below">
          <p class="pop-details">${para.descriptionSub}</p>
          <div class="popup-button">
            <button class="popup-btn"><a href="${project.liveLink}" target="_blank">See Live</a></button>
            <button class="popup-btn"><a href="${project.sourceLink}" target="_blank">See Source</a></button>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  `;

  return popupHTML;
}

function createHeroPopup(projectIndex) {
  const project = popup[projectIndex]; // Get the project using the index
  const para = descriptions[projectIndex]; // Get the project using the index

  const popupHTML = `
    <div class="popup">
    <div class="pop">
      <div class="popup-header">
        <h2>${project.title}</h2>
        <span class="close-popup">&times;</span>
      </div>
      <ul id="lists">${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}</ul>
      <div class="popup-body">
        <img class="popup-img" src="${project.image}" alt="">
        <div class="below">
          <p class="pop-details">${para.descriptionSub}</p>
          <div class="popup-button">
            <button class="popup-btn"><a href="${project.liveLink}" target="_blank">See Live</a></button>
            <button class="popup-btn"><a href="${project.sourceLink}" target="_blank">See Source</a></button>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  `;

  return popupHTML;
}

function openPopup(index) {
  const popup = createPopup(index);
  popupContainer.innerHTML = popup;
  popupContainer.classList.add('show-popup');
}

function openHeroPopup(index) {
  const heroPop = createHeroPopup(index);
  popupContainer.innerHTML = heroPop;
  popupContainer.classList.add('show-popup');
}

projectData.addEventListener('click', (event) => {
  if (event.target.classList.contains('view-project')) {
    const index = Array.from(projectData.querySelectorAll('.view-project')).indexOf(event.target);
    openPopup(index); // Pass the index of the clicked project
  }
});

projectsMob.addEventListener('click', (event) => {
  if (event.target.classList.contains('view-project')) {
    const index = Array.from(projectsMob.querySelectorAll('.view-project')).indexOf(event.target);
    openPopup(index); // Pass the index of the clicked project
  }
});

popupContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-popup')) {
    popupContainer.innerHTML = '';
    popupContainer.classList.remove('show-popup');
  }
});

// ... Remaining code ...
