
let results = [];
//3A
// function recur (element){
//     if (element.tagName == "BODY") {
//         console.log(results);
//         alert(results);
//         return;
//     }

//     results.push(element.id);
//     recur(element.parentElement);
// }

// function alertdiv (event){
//     results = [];
//     recur(event.target);
// }




//3B
function recur (element){
    console.log("elemnt 1", element.children);
    console.log("elemnt 2", element.id);
    results.push(element.id);

    if (element.children.length == 0) {
        console.log(results);
        alert(results);
        return;
    }
    
    if (element.children.length >= 1) {
        recur(element.children[0]);
    }
}

function alertdiv (event){
    console.log(event);
    results = [];
    
    console.log("target1: ", event.target);
    console.log("target2: ", event.target.children);
    recur(event.target);
}
document.getElementById("div1").addEventListener("click", alertdiv);

  