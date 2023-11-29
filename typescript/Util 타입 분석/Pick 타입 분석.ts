{
    interface Profile {
        name: string,
        age: number,
        married: boolean
    }

    type P<T, S extends keyof T> = {
        [Key in S]: T[Key];
    }


    const zerocho: Profile = {
        name: 'zerocho',
        age: 29,
        married: false
    }

    const newZerocho: P<Profile, 'name' | 'age'> = {
        name: 'zerocho',
        age: 29
    }
}