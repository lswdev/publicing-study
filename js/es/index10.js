export let js = function(){

    //ajax로 json을 가져온다. vue 형태와 동일하다.
    fetch("../ajax/news.json").then(function(aa){
        return aa.json();
    })
    .then(function(bb){
        console.log(bb);
    })
    .catch(function(error){
        console.log("Data error!!");
    });
    
/*
    fetch("../ajax/news.json")
    .then(response=>response.json())
    .then(aa=>console.log(aa))
    .catch(error=>console.log("Data error"));
*/
}