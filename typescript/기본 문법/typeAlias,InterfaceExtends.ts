{
    //&로 타입 확장이 가능함
    type Animal = { breath: true }
    type Poyouryu = Animal & { breed: true }
    type Human = Poyouryu & { think: true }

    const zerocho: Human = {breath: true, breed: true, think: true}


//인터페이스로 상속 키워드를 이용한 확장이 가능함
//인터페이스는 같은 이름으로 여러개 정의가 가능함
    interface A1 {
        breath: true
    }

    interface B1 extends A1 {
        breed: true
    }

    const interFace: B1 = {breath: true, breed: true}
}