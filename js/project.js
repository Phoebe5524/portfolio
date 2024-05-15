// const project1 = document.querySelector('.project-info .1');
// const project2 = document.querySelector('.project2');
// const project3 = document.querySelector('.project3');

document.addEventListener('DOMContentLoaded', () => {
    const project1 = document.querySelector('.project.First');
    const project2 = document.querySelector('.project.Second');
    const project3 = document.querySelector('.project.Third');

    project1.addEventListener('click', () => {
        window.location.href = 'https://phoebe5524.github.io/PixelQuest/city.html';
    });
    project2.addEventListener('click', () => {
        window.location.href = 'https://five79-final-project.onrender.com/';
    });
    project3.addEventListener('click', () => {
        window.location.href = 'https://phoebe5524.github.io/539finalproject/';
    });
});
