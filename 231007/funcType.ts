// 자바스크립트
// function jsPrint(a,b) {
//     console.log(a)
//     console.log(b)
// }

// 타입스크립트 : 선언된 매개변수의 개수와 함수 호출 시, 전달되는 파라미터의 개수가 동일해야 함
// jsPrint(1,2,3)

function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(1, 2, 3);
print(1, 2);

function print2(a: number, b: number, c = 5) {
  console.log("----------print2-----------");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2);
print2(1, 2, 3);

// return 값이 있는 함수
function concatStr(a: string, b: string): string {
  return a + b;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

const squareArea2 = (a: number, b: number): number => a * b;

// 함수 호출
console.log("문자열 더하기 " + concatStr("hi", "str"));
console.log("사각형 넓이 : ", squareArea(3, 4));
console.log(`사각형 넓이 : ${squareArea(3, 4)}`);

// never 타입
function goingOn(a: number): never {
  while (true) {
    console.log("go");
    // if (a > 10) break; error
  }
}

const sum1 = (a: number, b: number) => {
  console.log(a + b);
};

sum1(5, 11);

// ...numbers : 나머지 매개변수, 남아있는 매개변수들을 모아 배열 numbers에 집어넣음, 항상 맨 마지막에 전개 연산자 넣기
const sum2 = (...numbers: number[]) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // numbers.forEach((elem) => (sum += elem));
  return sum;
};

console.log(sum2(1, 2, 3, 4, 10));

// interface 선언 시 함수 타입 지정
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): String;
}

const yeon: Greet = {
  name: "yeon",
  hi() {
    return "hi my name is " + this.name;
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했다.`;
  },
};

console.log(yeon.hi());
console.log(yeon.bye(3));

// 함수 오버로딩
// addSomething : 숫자가 오면 더하고, 문자가 오면 이어주는 함수
// function addSomething(a: string | number, b: string | number): string | number {
//   return a + b; // error : '문자 + 숫자'인 경우가 올 수 있기 때문
// }

// 오버로딩 : 함수의 매개변수의 개수, 타입 / 반환 타입이 다를 때, 같은 이름으로 매개변수의 종류와 개수를 달리 선언할 수 있음

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}

console.log(add(1, 2));
console.log(add("hello ", "world!"));
