fetch("pmc_data.json").then(e => e.json()).then(d => show(d))

let description = document.querySelector("#description");
let template = document.querySelector("template").content;
let knowledgeList = document.querySelector("#knowledge-list");
let coreAreasGrid = document.querySelector(".coreareas-grid");

function show(data) {
    console.log(data);

    data.coreareas.forEach(function (area) {
        let clone = template.cloneNode(true);
        clone.querySelector("h1").textContent = area.title;

        let topics = area.topics;

        topics.forEach(function (topic, j) {
            console.log(topic);
            let h3 = document.createElement("h3");

            h3.innerHTML = (j == 0 ? topic.title + ": " + topic.content : topic.title);
            h3.classList.add(".normal-fontfamily");

            clone.querySelector("div").appendChild(h3);
            clone.querySelector("div").classList.add(".header-fontfamily");
            let ul = document.createElement("ul");

            clone.querySelector("div").appendChild(ul);

            if (j >= 1)
                topic.content.forEach(function (key, k) {
                    let li = document.createElement("li");
                    li.innerHTML = key;
                    ul.appendChild(li);
                })
        })
        description.appendChild(clone);

    })

    //document.querySelector('section').classList.remove('hidden')

    let links = document.querySelectorAll('.coreareas-grid a');


    let sections = document.querySelectorAll('section');
    console.log(sections);
    links.forEach(function (link, index) {
        //console.log(link, index)
        link.addEventListener('click', function () {
            //console.log(data.coreareas[index])
            sections.forEach(function (s) {
                s.classList.add("normal-fontfamily");
                s.classList.add('hidden');
            })

            console.log(index);
            sections[index].classList.remove('hidden');

        })
    })
}
