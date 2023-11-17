console.log("test");

const secretKey = "$2a$10$HmGN6CC2dTwDcjw.3uGoGOBERN2BG/kqmmwIhiaB4mMnROa8wQlSy";
const URLAPI = "https://api.jsonbin.io/v3";
const BIN = "65573a3012a5d376599abf48";


let objectFormData;
let tableau = [];
let binContent1;
await getBinContent()
console.log(binContent1);
async function getBinContent() {
    const res = await fetch(`${URLAPI}/b/${BIN}`,{
        method : 'GET',
        headers: {
            "X-Master-Key": secretKey,
        }
});

binContent1 = await res.json();
tableau.push(binContent1);
console.log(tableau);

}



async function postBinContent() {
    const res = await fetch(`${URLAPI}/b/${BIN}`, {
        method: 'PUT',
        headers: {
            "X-Master-Key": secretKey, 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tableau)
      });
}

let form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault();
    let formData = new FormData(form);
    objectFormData = Object.fromEntries(formData);
    console.log(objectFormData);
    tableau.push(objectFormData);
    postBinContent()
})

// **************************************************** MENU BURGER ***************************************************************

// let menuBurgerId1 = document.getElementById(menuBurgerId);
// let ouvertureBtn1 = document.getElementById(ouvertureBtn);
// let close1 = document.getElementById(close);

// ouvertureBtn1.addEventListener("click", openNav);
// close1.addEventListener("click", closeNav);

// function openNav() {
//     menuBurgerId1.classList.add("active");
// }

// function closeNav() {
//     menuBurgerId1.classList.remove("active");
// }
let menuBurgerId1 = document.getElementById("menuBurgerId");
let ouvertureBtn1 = document.getElementById("ouvertureBtn");
let close1 = document.getElementById("close");

ouvertureBtn1.addEventListener("click", openNav);
close1.addEventListener("click", closeNav);

function openNav() {
    menuBurgerId1.classList.add("active");
}

function closeNav() {
    menuBurgerId1.classList.remove("active");
}
