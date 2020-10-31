

//Homework
//1 Написать тип функции
//1.1
const concat = (str1: string, str2: string): string => {
    return str1 + " " + str2;
}
concat('hello', 'world');


//1.2
type ConcatType = (str1: string, str2: string) => string;

const concat1: ConcatType = (str1, str2) => {
    return str1 + " " + str2;
}
concat1('hello', 'world');





//2  Написать интерфейс
interface Hometask {
    howIDoIt: string,
    simeArray: (number | string)[],
    withData?: Array<Hometask>,
}

const MyHometask: Hometask = {
    howIDoIt: "I Do It Well",
    simeArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Well", simeArray: ["string one", 23]}],
}



//3 Типизация для метода reduce
interface MyArray<T> {
    [N: number] : T;
    reduce(fn:(accumulator: T, currValue: T) => T) : T;
}

const myAr: MyArray<number> = [1, 2, 3];
console.log(myAr.reduce((accumulator, currValue) => {
    return accumulator + currValue;
}));













