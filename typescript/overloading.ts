declare function add(x: number, y: number) : number
declare function add(x: number, y: number, z: number) : number
declare function add(x: string, y: string) : number
declare function add(x: string, y: string, z: string) : number

add(1, 2);
add(2, 3, 4);
add('1', '2');
add('1', '2', '3');

class A {
    add(x: number, y: number) : number;
    add(x: string, y: string) : string;
    add(x: any, y: any) {
        return x + y;
    }
}

const c = new A().add(1,2)
const d = new A().add('1','2')