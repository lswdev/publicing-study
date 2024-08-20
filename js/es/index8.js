// JS,ES 프로토타입 : String, Number, Boolean(true,false)
// JS,ES 프로토타입 체이닝(값을 변화시키는 것) : new, split, toLocalString(), substr, replaceAll
// method라는 형태 : 부모 함수 또는 클래스를 통해서 사용이 되는 부분을 메서드라고 합니다.

export class aaa{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    get loads(){ 
    // get : 클래스 호출시 바로 실행되는 메서드. (다른 메서드에서 값을 받아오는 역할만 한다.)        
        return this.calc();
    }
    calc(){   // 메서드 부분
        return this.a * this.b;
    }
}
export class bbb{
    test(){   // 메서드 부분
        console.log("testest");
    }
}