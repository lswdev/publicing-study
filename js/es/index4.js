/*
export let ccc = function(c){
    let f=1;
    var aa="";
    while(f<=c){
        if(f%2 == 0){
            aa+= f + " ";
        }
        f++;
    }
    return aa;
}
*/

export let ccc = (a) => {
    var bb = "";
    let cc = 1;

    while(cc<=a){
        if(cc%2 == 0){
            bb += cc + " ";
        }
        cc++;
    }
    console.log(bb);    //화살표함수는 return이 필요없다
};

export class aaa{   //함수가 아닌 aaa라는 class명을 생성한다.
    constructor(a){     //class를 호출과 동시에 인자값을 받는 생성함수이다.
        this.mname = a; 
        //this.은 가상의 변수 형태입니다. (Vue와 같은 this의 성격입니다.)
    }
}