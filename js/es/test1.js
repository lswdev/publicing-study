export let a = function(){
    var alls = document.querySelector("#allck").checked;
    var ea = document.querySelectorAll("#list > input");    //묶은 상태였을 때
    //var ea = document.querySelectorAll(".ck");  //전체를 묶지 않은 상태로 각자id를썼을 때
    var lg = ea.length;
    var f;
    for(f in ea){
        if(f < lg){
            ea[f].checked = alls;
        }
    }
}
document.querySelector("#allck").addEventListener("click",a);