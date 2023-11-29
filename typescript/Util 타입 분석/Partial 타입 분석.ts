{
    interface Profile {
        name: string,
        age: number,
        married: boolean
    }

    type P<T> = {
        [Key in keyof T]?: T[Key];
    }


    const zerocho: Profile = {
        name: 'zerocho',
        age: 29,
        married: false
    }

    const newZerocho: P<Profile> = {
        name: 'zerocho',
        age: 29
    }

}