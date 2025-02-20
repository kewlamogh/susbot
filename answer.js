function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            console.log("hello",decodeURIComponent(tmp[1]))
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    
    console.log(result)
    return result;
}

const answerDisplay = document.getElementById("answer")
answerDisplay.innerHTML = marked.parse(localStorage.getItem(findGetParameter("prompt")));
const input = document.getElementById("prompt")
input.value = findGetParameter("prompt").split("|")[1].replaceAll("+", " ")