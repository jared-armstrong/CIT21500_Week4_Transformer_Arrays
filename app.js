let wrapperEle = document.body.querySelector(".wrapper");

var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];


for (let i = 0; i <chrs.length; i++) {

    let divEle = document.createElement("div");
    let nameEle = document.createElement("h3");
    let classEle = document.createElement("h3");
    let vehicleEle = document.createElement("h3");
    let imageEle = document.createElement("img");

    divEle.classList.add("character");

    nameEle.innerHTML="Name: " + chrs[i].name;
    classEle.innerHTML="Class: " + chrs[i].class.toUpperCase();
    vehicleEle.innerHTML="Vehicle: " + chrs[i].vehicle;

    if (chrs[i].afl === "autobot") {
        imageEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
        divEle.classList.add("autobot");


    } else if (chrs[i].afl === "decepticon"){
        imageEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
        divEle.classList.add("decepticon");
    }

    divEle.classList.add("img");

    if (chrs[i].vehicle === "truck") {
        vehicleEle.style.color = "blue";
    } else if (chrs[i].vehicle === "tank") {
        vehicleEle.style.color = "green";
    } else if (chrs[i].vehicle === "car") {
        vehicleEle.style.color = "gold";
    } else if (chrs[i].vehicle === "plane") {
        vehicleEle.style.color = "white";
    }


    divEle.appendChild(nameEle);
    divEle.appendChild(classEle);
    divEle.appendChild(vehicleEle);
    divEle.appendChild(imageEle);
    wrapperEle.appendChild(divEle);

}
