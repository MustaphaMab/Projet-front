console.log("test123");

const keySecret = "$2a$10$HmGN6CC2dTwDcjw.3uGoGOBERN2BG/kqmmwIhiaB4mMnROa8wQlSy";
const APIURL = "https://api.jsonbin.io/v3";
const Bin = "6551f99512a5d3765998d7af";


let objectDataForm;

async function postBinContent() {
    const res = await fetch(`${APIURL}/b/`, {
        method: `POST`,
        headers: {
            "X-Master-Key": keySecret, 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectDataForm)
    });
}

let form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault();
    verificationMotDePasse();
    let formData = new FormData(form);
    objectDataForm = Object.fromEntries(formData);
    console.log(objectDataForm);
    postBinContent();
    
});

function verificationMotDePasse() {
     let motDepasse1 = document.getElementById("motDePasseInscription").value;
     let motDepasse2 = document.getElementById("motDePasseBisInscription").value;
            if (motDepasse1 === motDepasse2){
                alert("ok!")
            } else {
                alert("vos mos de passe ne ont pas identiques")

            }
        
    }