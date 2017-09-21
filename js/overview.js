fetch("pmc_data.json").then(e=>e.json()).then(d=>show(d))

let description = document.querySelector("#description")
let template = document.querySelector("template").content
function show(data){
    console.log(data);

    data.coreareas.forEach(function(area){
        let clone = template.cloneNode(true);
        clone.querySelector("h1").textContent=area.title;

        description.appendChild(clone)
    })

    //document.querySelector('section').classList.remove('hidden')

    let links = document.querySelectorAll('.coreareas-grid a');


    let sections = document.querySelectorAll('section')
    console.log(sections)
    links.forEach(function(link, index){
        //console.log(link, index)
        link.addEventListener('click', function(){
            //console.log(data.coreareas[index])
            sections.forEach(function(s){
                s.classList.add('hidden')

            })
            sections[index].classList.remove('hidden')

        })
    })
}
