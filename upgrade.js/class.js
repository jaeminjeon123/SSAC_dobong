//class : 오브젝트를 만들 수 있는 틀

/*
속성 : 
 만들어진 연도 year
 집의 이름 name
 창문의 개수 window

메소드 :
 건물의 나이 출력 getage()
 창문의 개수 출력 getwindow()
*/
class house{
    constructor(year,name,window){
        this.name=name;
        this.year=year;
        this.window=window;
    
    }
     getage() {
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요`);
    }
    
    getwindow() {
        console.log(`${this.name}의 창문은 ${this.window}개입니다`);
    }
    
}
const house1= new house(1789,'old',1);
house1.getage();
house1.getwindow();

console.log("---------상속-----");
//extends 키워드를 사용해서 싱속
//house 클래스의 함수와 속성을 사용할 수 있음

class apartment extends house{
    constructor(year,name,window,floor,windowmaker){
super(year,name,window);
this.floor=floor;
this.windowmaker=windowmaker;
    }
    getaptinfo(){
        return (`${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor},창문의 갯수는 ${this.window} `)
    }

    getwindow(){
        return (`${this.name}의 창문은 ${this.windowmaker}에서 만들었고,
         ${this.window}입니다 `)
    }
}
console.log('******');
const ap1=new apartment(2022,'레미안',19,50,'kcc');
console.log(ap1.getwindow());
console.log(ap1.getaptinfo());
ap1.getage();
console.log(ap1);