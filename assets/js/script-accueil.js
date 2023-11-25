console.log("test accueil");


const secretKey = "$2a$10$HmGN6CC2dTwDcjw.3uGoGOBERN2BG/kqmmwIhiaB4mMnROa8wQlSy";
const URLAPI = "https://api.jsonbin.io/v3";
const BIN = "65573a3012a5d376599abf48";


let objectFormData;
let tableau = [];
let binContent1;
// ***********************************************methode POST *********************************************************************

async function postContentBin() {
    const res = await fetch(`${URLAPI}/b/`,{
    method: `POST`,
    headers: {
        "X-MASTER-KEY": secretKey,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(objectFormData)
    });
}

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let FormData1 = new FormData(form);
    objectFormData = Object.fromEntries(FormData1);
    console.log(objectFormData);
    postContentBin();
    
})


// ***********************************************methode GET ***********************************************************************
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
// // **************************************************************methode PUT********************************************************************


// async function postBinContent() {
//     const res = await fetch(`${URLAPI}/b/${BIN}`, {
//         method: 'PUT',
//         headers: {
//             "X-Master-Key": secretKey, 
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(tableau)
//       });
// }

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event){
//     event.preventDefault();
//     let formData = new FormData(form);
//     objectFormData = Object.fromEntries(formData);
//     console.log(objectFormData);
//     tableau.push(objectFormData);
//     postBinContent()
// })

// **************************************************** MENU BURGER ***************************************************************

