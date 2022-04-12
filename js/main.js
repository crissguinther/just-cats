const apiUrl = "https://api.thecatapi.com/v1/images/search?size=full";
const spin = document.querySelector("span");
const imgEl = document.querySelector("img");
const nxtBtn = document.querySelector("button");
const container = document.querySelector("div");

async function setImg(promise) {
    imgEl.setAttribute("src", promise[0].url);
    spin.style.visibility = "hidden";
    imgEl.style.visibility = "visible";
}

async function fetchIt() {
    spin.style.visibility = "visible";
    await fetch(apiUrl, {
        headers: {
            'x-api-key': '54e0a043-b422-4ff2-a86d-68ecb2889ee2'
        }
    }).then((response) =>
        response.json()
    ).then((res) => {
        setImg(res);
    }).catch(e => {
        console.log(e)
    })
}
(() => {
    ["click", "touch"].forEach((e) => {
        nxtBtn.addEventListener(e, fetchIt);
    })
})();

window.onload = fetchIt();

