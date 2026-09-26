const projectsList = [
    {
        id: 1,
        title: "Portfolio Website",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        Description: "Basic Webpage showing Front-end and design skills."
    },
    {
        id: 2,
        title: "Custom ML Algorithms Library From Scratch",
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
        Description: "Shows core level understanding of the basic coreconcepts/algorithms of ML."
    },
    {
        id: 3,
        title: "Smart Charger Monitoring System using Arduino",
        technologies: ["Arduino (C++)", "Python", "LCD Interfacing"],
        Description: "Shows basic Arduino programming, circuit connections, and automation skills."
    },
    {
        id: 4,
        title: "P4",
        technologies: ["T1", "T2", "T3"],
        Description: "Shows basic Arduino programming, circuit connections, and automation skills."
    },
    {
        id: 5,
        title: "P5",
        technologies: ["Arduino (C++)", "Python", "LCD Interfacing"],
        Description: "Shows basic Arduino programming, circuit connections, and automation skills."
    },
    {
        id: 6,
        title: "P6",
        technologies: ["Arduino (C++)", "Python", "LCD Interfacing"],
        Description: "Shows basic Arduino programming, circuit connections, and automation skills."
    }
];

let carouselIdx = 0; //where is the carousal currently positioned
let selProj = 0; // which project has been selected to view more

function visibleProjects(){
    const n = projectsList.length;
    return [projects[carouselIdx % n], projects[(carouselIdx + 1) % n], projects[(carouselIdx + 2) % n]];
}

function renderCarousel(){
    const stage = document.querySelector(".carousel-stage");
    stage.innerHTML = "";
    const curr= visibleProjects();
    curr.forEach((project, idx) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.projectId = project.id;
        card.innerHTML = ""
    })
}