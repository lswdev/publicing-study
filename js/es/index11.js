export let a = function(imgfile){   // 밑에서 날린 이미지를 받는다.

    /********* Vue, JS, ES모두 같은 코드를 쓴다. *********/
    let v = new FileReader();   // FileReader 함수 : 첨부파일을 읽는 기능

    v.onload = (z) => {    //암호코드화가 정확하게 load 되었을 경우.
        document.getElementById("imgs").style.display="block";
        document.getElementById("imgs").src = z.target.result;
        //.target : 자신 pc에 있는 경로.
        //.result : 경로 결과.
        //console.log(z.target.result)
    }
    v.readAsDataURL(imgfile);   // c:\바탕화면 => 암호코드화 변경하게 된다.
    //console.log(s);
}

document.querySelector("#img_file").addEventListener("change",function(imgdata){
    //미리보기 기능시 change를 무조건 사용해야한다.

    //console.log(imgdata.target.files[0])
    a(imgdata.target.files[0]); //이미지를 가져오는 것  (a로 날린다)
    // .target.files[0] : 이미지 첨부시 배열로 출력. [0] == name
})