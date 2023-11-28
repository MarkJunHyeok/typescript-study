{
    interface A {
        talk: () => void
    }

    const a: A = {
        talk() {
            return 3;
        }
    }

    const b: unknown = a.talk();
    (b as A).talk();


    try {

    } catch (error) {
        (error as Error).message
    }

    function aA(): void {
        return undefined;
    }
}