{
    interface Profile {
        name?: string,
        age?: number,
        married?: boolean
    }

    type RO<T> = {
        readonly [Key in keyof T]: T[Key]
    }

    const zerocho: Profile = {
        name: 'zerocho',
    }

    const newZerocho: R<Profile> = {
        name: 'zerocho',
        age: 29,
        married: true
    }
}