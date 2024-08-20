
export class aaa{
    constructor(person){
        this.username = person;
        if(this.username=="홍길동"){    //홍길동일 때 ok
            this.sign = "ok";
        }
        else{   //아무것도 가입되지 않은 고객
            this.sign = "cancle";
        }
        return this.sign
    }
    login(){    //aaa class에 대한 확장함수1
        return this.username + "환영합니다.";
    }
    errors(){   //aaa class에 대한 확장함수2
        return this.username + "해당 고객은 휴면 계정입니다.";
    }
}

export class bbb{
    constructor(){
        //addEventListner를 이용해서 확장함수로 이동
        //class에서 확장함수로 이동시 this를 이용합니다.
        document.querySelector("#box").addEventListener("mouseenter",this.over);
        document.querySelector("#box").addEventListener("mouseleave",this.out);
    }
    over(){
        console.log("마우스 오버");
    }
    out(){      // 원문 : out = funnction(){} 이다
        console.log("마우스 아웃");
    }
}