import './styles.css';
import blueboxsocial from './imgs/blueboxsocial.png';
import resume from './imgs/resume.png'
import blog from "./imgs/blog.png"


interface Project {
    title: string;
    description: string;
    codebaseUrl: string;
    liveUrl: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        title: "BlueBox Social",
        description: "BlueBox Social is a simple social media platform clone built with Node.js, Express, MongoDB, and vanilla JavaScript. It allows users to register, login, create posts, like posts, and update their bio.",
        codebaseUrl: "https://github.com/DannyT-0/odin-book",
        liveUrl: "https://odin-book-production-f32c.up.railway.app/",
        imageUrl: blueboxsocial,
    },
    {
        title: "Resume Generator",
        description: "React Resume Builder is a web application that allows users to create and customize their professional resumes easily. ",
        codebaseUrl: "https://github.com/DannyT-0/cv-application",
        liveUrl: "https://dannyt-0.github.io/cv-application/",
        imageUrl: resume
    },
    {
        title: "Fake Blog",
        description: "This application is a full-stack blog platform with separate backend and frontend components. It allows for creating, updating, and deleting blog posts, as well as user authentication for blog authors.",
        codebaseUrl: "https://github.com/DannyT-0/blog",
        liveUrl: "blog-production-e316.up.railway.app",
        imageUrl: blog
    },
 
    // Add more projects as needed
];

function createProjectCard(project: Project, index: number): HTMLElement {
    const projectRow = document.createElement('div');
    projectRow.className = 'columns mb-6';

    const cardColumn = document.createElement('div');
    cardColumn.className = 'column is-half';

    const descriptionColumn = document.createElement('div');
    descriptionColumn.className = 'column is-half';

    const card = document.createElement('div');
    card.className = 'card';

    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const figure = document.createElement('figure');
    figure.className = 'image is-16by9';
    const img = document.createElement('img');
    img.src = project.imageUrl;
    img.alt = project.title;
    figure.appendChild(img);
    cardImage.appendChild(figure);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    const projectTitle = document.createElement('p');
    projectTitle.className = 'title is-4';
    projectTitle.textContent = project.title;
    
    // const projectDescription = document.createElement('p');
    // projectDescription.className = 'subtitle is-6';
    // projectDescription.textContent = project.description;
    
    cardContent.appendChild(projectTitle);
    // cardContent.appendChild(projectDescription);

    const cardFooter = document.createElement('footer');
    cardFooter.className = 'card-footer';
    const codebaseLink = document.createElement('a');
    codebaseLink.href = project.codebaseUrl;
    codebaseLink.className = 'card-footer-item';
    codebaseLink.textContent = 'Codebase';
    const liveLink = document.createElement('a');
    liveLink.href = project.liveUrl;
    liveLink.className = 'card-footer-item';
    liveLink.textContent = 'Live Demo';

    cardFooter.appendChild(codebaseLink);
    cardFooter.appendChild(liveLink);

    card.appendChild(cardImage);
    card.appendChild(cardContent);
    card.appendChild(cardFooter);

    if (index % 2 === 0) {
        cardColumn.appendChild(card);
        descriptionColumn.appendChild(createDescriptionContent(project));
        projectRow.appendChild(cardColumn);
        projectRow.appendChild(descriptionColumn);
    } else {
        descriptionColumn.appendChild(createDescriptionContent(project));
        cardColumn.appendChild(card);
        projectRow.appendChild(descriptionColumn);
        projectRow.appendChild(cardColumn);
    }

    return projectRow;
}

function createDescriptionContent(project: Project): HTMLElement {
    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h3');
    title.className = 'title is-4';
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    content.appendChild(title);
    content.appendChild(description);

    return content;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        // Remove all child elements from the container to avoid duplicates
        while (projectsContainer.firstChild) {
            projectsContainer.removeChild(projectsContainer.firstChild);
        }
        
        // Append project cards
        projects.forEach((project, index) => {
            projectsContainer.appendChild(createProjectCard(project, index));
        });
    }
});
