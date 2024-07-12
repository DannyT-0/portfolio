import './styles.css';

interface Project {
    title: string;
    description: string;
    codebaseUrl: string;
    liveUrl: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description of project 1",
        codebaseUrl: "https://github.com/yourusername/project1",
        liveUrl: "https://project1.example.com",
        imageUrl: "images/project1.gif"
    },
    // Add more projects as needed
];

function createProjectCard(project: Project): HTMLElement {
    const projectColumn = document.createElement('div');
    projectColumn.className = 'column is-one-third';

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
    
    const projectDescription = document.createElement('p');
    projectDescription.className = 'subtitle is-6';
    projectDescription.textContent = project.description;
    
    cardContent.appendChild(projectTitle);
    cardContent.appendChild(projectDescription);

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

    projectColumn.appendChild(card);

    return projectColumn;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach(project => {
            projectsContainer.appendChild(createProjectCard(project));
        });
    }
});