const root = document.querySelector("#root")


const nav = document. createElement ("nav")
const div1 = document. createElement ("div")
const aTag = document.createElement ("a")
const button = document. createElement ("button")
const div2 = document. createElement ("div")
const underline = document. createElement ("ul")
const list1 = document. createElement ("li")
const list2 = document. createElement ("li")
const list3 = document. createElement ("li")
const firstlink = document. createElement ("a")
const secondlink = document. createElement ("a")
const thirdlink = document. createElement ("a")

nav.classList.add("navbar", "navbar-expand-md", "navbar-light", "fixed-top",)
div1.classList.add ("container-fluid", "px-4", "px-lg-5" ) 
aTag.classList.add("navbar-brand")
aTag.innerHTML = "Up Construction"
button.classList.add ("navbar-toggler", "navbar-toggler-right")
div2.classList.add ("collapse", "navbar-collapse")
underline.classList.add ("navbar-nav", "ms-auto")
list1.classList.add ("nav-item")
list2.classList.add ("nav-item")
list3.classList.add ("nav-item")
firstlink.classList.add ("nav-link")
secondlink.classList.add ("nav-link")
thirdlink.classList.add ("nav-link")
firstlink.innerHTML = "About"
secondlink.innerHTML = "Project"
thirdlink.innerHTML = "Contact"


list1.appendChild(firstlink)
list2.appendChild(secondlink)
list3.appendChild(thirdlink)


// dev.classList.add("container")
// dev.classList.add("px-4")
// dev.classList.add("px-1g-5")
// nav.appendChild (dev)


// aTag.classList.add("navbar-brand")
// aTag.classList.add(href = "#page-top")
// dev.appendChild(aTag)


// button.classList.add ("navbar-toggler")
// button.classList.add("navbar-toggler-right")
// dev.appendChild (button)