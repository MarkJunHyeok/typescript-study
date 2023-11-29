{
    interface Profile {
        name: string,
        age: number,
        married: boolean
    }

    type P<T, S extends keyof T> = {
        [Key in S]: T[Key];
    }

    type E<T, S> = T extends S ? never : T

    type O<T, S extends keyof T> = P<T, E<keyof T, S>>

    const zerocho: Profile = {
        name: 'zerocho',
        age: 29,
        married: false
    }

    const newZerocho: O<Profile, 'name' | 'age'> = {
        married: false
    }

    type Animal = 'Cat' | 'Dog' | 'Human'
    type Mammal = Exclude<Animal, 'Human'>
    type Human = Extract<Animal, 'Cat' | 'Dog'>
}