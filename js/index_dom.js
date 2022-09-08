// -- MOBILE MENU -- //
const hamburgerBtn = document.querySelector('.menu-burger-menu');
const navMenuMobile = document.querySelector('.mobile-menu-nav ');
const xBtn = document.querySelector('.close-menu');
const navLink = document.querySelectorAll('.mobile-link');
//  -- MOBILE MENU -- //
hamburgerBtn.addEventListener('click', () => {
  navMenuMobile.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
  xBtn.classList.toggle('active');
});

xBtn.addEventListener('click', () => {
  navMenuMobile.classList.remove('active');
  hamburgerBtn.classList.remove('active');
  xBtn.classList.remove('active');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  navMenuMobile.classList.remove('active');
  hamburgerBtn.classList.remove('active');
  xBtn.classList.remove('active');
}));
const projects = [
  {
    projectId: 'project-1',
    projectName: 'Multi Post Stories',
    projectImage: './images/featprojects.png',
    languages: [
      'CSS',
      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  }, {
    projectId: 'project-2',
    projectName: 'Profesional Art Printing Data',
    projectImage: './images/projectbackground.png',
    languages: [

      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    projectId: 'project-3',
    projectName: 'Profesional Art Printing Data',
    projectImage: './images/projectbackground.png',
    languages: [

      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    projectId: 'project-4',
    projectName: 'Profesional Art Printing Data',
    projectImage: './images/projectbackground.png',
    languages: [

      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
  {
    projectId: 'project-5',
    projectName: 'Profesional Art Printing Data',
    projectImage: './images/projectbackground.png',
    languages: [

      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
  {
    projectId: 'project-6',
    projectName: 'Profesional Art Printing Data',
    projectImage: './images/projectbackground.png',
    languages: [

      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita. ",
  },
  {
    projectId: 'project-7',
    projectName: 'Profesional Art Printing Data',
    projectImage: './images/second-project.png',
    languages: [

      'HTML',
      'Bootsrap',
      'Ruby',

    ],
    liveLink: 'https://alexmedinasf.github.io/Porfolio/',
    sourceLink: 'https://github.com/alexmedinasf/Porfolio',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
];

const projectModal = document.getElementById('modal-container');
const buttons = document.querySelectorAll('button');
const closeBtn = document.querySelector('.modal-close');

const projectButtons = [];

buttons.forEach((btn) => {
  const [button] = btn.id.split('-');
  if (button === 'project') {
    projectButtons.push(btn);
  }
});

function openProjectModal(projectId) {
  const project = projects.find((pro) => pro.projectId === projectId);
  let language = '';
  project.languages.forEach((lang) => {
    language += `<li> ${lang} </li>`;
  });
  document.getElementById('project-name').innerHTML = project.projectName;
  document.getElementById('languages-list').innerHTML = language;
  document.getElementById('project-image').src = project.projectImage;
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('live-link').href = project.liveLink;
  document.getElementById('source-link').href = project.sourceLink;
  projectModal.style.display = 'block';
}

projectButtons.forEach((projectButton) => {
  const { id } = projectButton;
  projectButton.addEventListener('click', () => openProjectModal(id));
});
closeBtn.addEventListener('click', () => {
  projectModal.style.display = 'none';
});