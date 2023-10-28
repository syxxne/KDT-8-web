// tuple 타입 선언
let drink: [string, number];

// tuple 초기화
drink = ["cola", 2000];

// tuple 선언, 초기화
let drink2: [string, number] = ["cola", 2000];

// javascript 배열과 동일하게 인덱스 접근 O, 메서드 사용 O
console.log(drink2[0]);

// spread 연산자도 사용 O
console.log([...drink2, "콜라공장"]);

// readonly : 데이터 변경 X
let drink3: readonly [string, number] = ["cola", 2000];
// drink3.push("콜라공장"); readonly이므로 push X -> 에러 발생

// enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "americano",
  latte = "latte",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  chocolate, // 0
  vanilla, // 1
  strawberry, // 2
  kiwi = "kiwi", // 숫자와 문자열 혼용 가능 but 이왕이면 통일하는 것이 좋음
}

console.log(Cake.chocolate);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);

// any
let val: any;
let anyVal;

let olimplic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

console.log(olimplic_newgame);
// olimplic_newgame[1] = false;
console.log(olimplic_newgame);

// 사용자 정의 타입
// 1. interface

interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "yeon",
  isPassed: true,
};

// 2. type
type Score = "A+" | "A" | "B" | "C" | "D";
const score1: Score = "A";
// const score2: Score = "F"; error

// interface 상속 가능
interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  // key-value 타입이 여러 개 올 수 있을 때, grade라는 이름이 key가 되는 것 X 의미를 부여해주는 역할 O
  [grade: number]: Score;
  readonly backNumber?: number; // 필수값이 아니라면 물음표 처리, 변경 불가능한 값은 readonly
}

const tiger: 야구부 = {
  name: "tiger",
  isPassed: true,
  position: "pitcher",
  weight: 90,
  height: 180,
  1: "A",
  2: "A+",
};

console.log(tiger);
// 점 접근법 또는 대괄호 접근법으로 value 변경 가능
tiger["1"] = "C";
tiger.isPassed = false;
// tiger.backNumber = 19; readonly이므로 error
console.log("변경 후 : ", tiger);

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log(heroGame_A);
console.log(heroGame_B);

// 함수의 타입 설정하는 인터페이스
interface Add {
  (a: number, b: number): number;
}

const sum: Add = function (num1, num2) {
  return num1 + num2;
};

// 교차 타입
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "tayobus",
  start() {
    console.log(this.name);
  },
  color: "blue",
  price: 20000,
};

toyCar.start();

// type도 interface처럼 object로 선언 가능
type Person = {
  name: string;
  age?: number;
  like?: string[];
};

let person1: Person = {
  name: "person1",
  age: 20,
  like: ["blue", "apple"],
};
