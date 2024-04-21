document.querySelector("#departure-time").onblur = () => {
    console.log( new Date("1970-01-01T" + document.querySelector("#departure-time").value));
}