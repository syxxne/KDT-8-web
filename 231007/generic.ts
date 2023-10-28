function getValue(str: string): string {
  // 모든 값이 들어올 수 있는 함수 -> 제네릭 타입 사용
  return str;
}

function arrLength(arr: any[]): number {
  // any 사용이 좋지 않음
  return arr.length;
}

// 제네릭 사용해서 바꾸기
function getValue2<T>(val: T): T {
  return val;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

console.log(getValue2<string>("string"));
console.log(arrLength2<string>(["a", "b"]));
console.log(arrLength2<number>([1, 2, 3, 4]));

function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  // return x+y; // number, string은 + 연산 O but boolean, null은 + 연산 X -> error
  return x;
}

printSome<string>("hi", "hello");
// printSome<number>(10, "hi"); 타입이 다르기 때문에 error

function printSome2<T, K>(x: T, y: K) {
  console.log(x);
  console.log(y);
}

printSome2<string, number>("1", 1);

function arrElement<T>(arr: T[], index: number): T | boolean {
  if (index > arr.length - 1) {
    return false;
  } else {
    return arr[index];
  }
}

console.log(arrElement<string>(["a"], 1));
