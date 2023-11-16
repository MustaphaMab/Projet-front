console.log("test");

const secretKey = "$2a$10$HmGN6CC2dTwDcjw.3uGoGOBERN2BG/kqmmwIhiaB4mMnROa8wQlSy";
const URLAPI = "https://api.jsonbin.io/v3";
const BIN = "6551f99512a5d3765998d7af";

let objectFormData;

async function postBinContent() {
    const res = await fetch(`${URLAPI}/b/`, {
        method: 'POST',
        headers: {
            "X-Master-Key": secretKey, 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectFormData)
      });
}

let form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault();
    let formData = new FormData(form);
    objectFormData = Object.fromEntries(formData);
    console.log(objectFormData);
    postBinContent()
})