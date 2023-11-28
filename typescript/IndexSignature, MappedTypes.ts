{
// index signature
type A = { [key:string]: number }
const aaa: A= {a: 3, b: 4, c: 5}

//Mapped Types
type B = 'Human' | 'Mammal' | 'Animal'
type C = { [key in B]: number }
const ccc: C= {Human: 3, Mammal: 4, Animal: 5}
}