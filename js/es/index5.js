export class aaa{
    constructor(a1,a2){
        var a3 = a1* a2;
        if(a3 < 100){
            this.answer = true;
        }
        else{
            this.answer = false;
        }
    }
}

export class login{
    constructor(){
        var id = document.getElementById("mid").value;
        if(id==""){
            //this.aws = "아이디를 입력하세요";
            this.aws ="아이디를 입력하세요";
            document.getElementById("mid").focus();
        }
        else{
            this.aws = id;
            //location.href="./index5.html";
        }
    }
}