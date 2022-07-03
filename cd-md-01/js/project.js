const projectWindow = document.getElementById('project-items-window');

const projectItems = [
    {
        id: 1,
        name: "ОСКАР 2020",
        date: "сентябрь 2020",
        bckgImg: "oscar.png"
    },
    {
        id: 2,
        name: "qwerty",
        date: "qwerty 2022",
        bckgImg: "project-2.png"
    },
    {
        id: 3,
        name: "золотой грамофон",
        date: "июль 2020",
        bckgImg: "project-3.png"
    },
    {
        id: 4,
        name: "щелкунчик",
        date: "май 2020",
        bckgImg: "project-4.png"
    }
]

removeClass();

function removeClass() {
    const projectMassive = document.querySelectorAll('.container__project-items span');

    for(let i = 0; i < projectMassive.length; i++) {
        projectMassive[i].classList.remove('active');
    }
}

projectItems.forEach((item) => {
    const projectHTML = `
    <span class="container__project-items-item" data-id="${item.id}" style="background-image: url('./img/project/${item.bckgImg}');" onClick="removeClass(); this.classList.add('active')">
        <div class="container__project-items-item-name font-size-px24 project-text">${item.name}</div>
        <div class="container__project-items-item-date font-size-px18 project-text">${item.date}</div>
    </span>`;

    projectWindow.insertAdjacentHTML('beforeend', projectHTML);
})

const onMouse = projectWindow.querySelector('.container__project-items-item');

const projectText = document.querySelectorAll('.project-text');