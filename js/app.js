console.log('This JS file has loaded.')

// const projectParent = document.getElementById('projects')

// const projectTitle1 = document.getElementById('project-title-1')

// const projectTitle2 = document.getElementById('project-title-2')

// const projectImage1 = document.getElementById('project-image-1')

// const projectOneLiner = document.getElementById('project-one-liner')

// const projectDetails = document.getElementById('project-details')

// const projectTech = document.getElementById('project-tech')

//figure out if I can change EXISTING data first
//then figure out how to map 

// const projectShell = document.getElementById('project-shell')

// const newJumbotron = projectShell.cloneNode(true);

const moreAboutMe = document.getElementById('see-more');
const lessAboutMe = document.getElementById('see-less')
const ariaExpandMore = moreAboutMe.getAttributeNode('aria-expanded').value;
const ariaExpandLess = lessAboutMe.getAttributeNode('aria-expanded').value;

moreAboutMe.addEventListener("click", () => {
    moreAboutMe.style.display = "none";
    lessAboutMe.style.display = 'block'
}) 

lessAboutMe.addEventListener('click', () => {
    moreAboutMe.style.display = "block"
    lessAboutMe.style.display = 'none'
} )
