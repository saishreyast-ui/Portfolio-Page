const projectsList = [
    {
        id: 1,
        title: "Portfolio Website",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        Description: "Basic Webpage showing Front-end and design skills.",
        page: "projects/portfolio.html"
    },
    {
        id: 2,
        title: "Custom ML Algorithms Library From Scratch",
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
        Description: "Shows core level understanding of the basic coreconcepts/algorithms of ML.",
        page: "projects/mlfromscratch.html"
    },
    {
        id: 3,
        title: "Smart Charger Monitoring System using Arduino",
        technologies: ["Arduino (C++)", "Python", "LCD Interfacing"],
        Description: "Shows basic Arduino programming, circuit connections, and automation skills.",
        page: "projects/smartCharger.html"
    }
    // ,
    // {
    //     id: 4,
    //     title: "P4",
    //     technologies: ["T1", "T2", "T3"],
    //     Description: "Shows basic Arduino programming, circuit connections, and automation skills.",
    //     page: "projects/p.html"
    // },
    // {
    //     id: 5,
    //     title: "P5",
    //     technologies: ["Arduino (C++)", "Python", "LCD Interfacing"],
    //     Description: "Shows basic Arduino programming, circuit connections, and automation skills.",
    //     page: "projects/p.html"
    // },
    // {
    //     id: 6,
    //     title: "P6",
    //     technologies: ["Arduino (C++)", "Python", "LCD Interfacing"],
    //     Description: "Shows basic Arduino programming, circuit connections, and automation skills.",
    //     page: "projects/p.html"
    // }
];

let carouselIdx = 0; //where is the carousal currently positioned
let selProj = 0; // which project has been selected to view more

function visibleProjects(){
    const n = projectsList.length;
    return [projectsList[carouselIdx % n], projectsList[(carouselIdx + 1) % n], projectsList[(carouselIdx + 2) % n]];
}

function renderCarousel(){
    const stage = document.querySelector(".carousel-stage");
    stage.innerHTML = "";
    const curr= visibleProjects();
    curr.forEach((project, idx) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.projectId = project.id;
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">${project.Description}</p>
            </div>`;
        card.addEventListener("click", () => {
            selectProject(project.id);
        });
        stage.appendChild(card);
    })
}
renderCarousel();

document
    .querySelector(".arrow-right")
    .addEventListener("click", () => {
    carouselIdx+=3;

    renderCarousel();
});

document
    .querySelector(".arrow-left")
    .addEventListener("click", () => {
    carouselIdx-=3;
    if (carouselIdx < 0) carouselIdx = projectsList.length - 1;

    renderCarousel();
})

async function selectProject(id){
    selProj = id;
    const project = projectsList.find(
        project => project.id === selProj
    );
    if (!project) return;

    const response = await fetch(project.page);
    const html = await response.text();
    document.querySelector(".view-content").innerHTML = html;
}