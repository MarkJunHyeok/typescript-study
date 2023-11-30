{
    function StartAndEnd(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (this: any, ...args: any[]) {
            console.log('start');
            const result = originalMethod.call(this, ...args);
            console.log('end');
            return result;
        };
        return descriptor;
    }

    class A {
        @StartAndEnd
        eat() {
            console.log('eat');
        }

        @StartAndEnd
        work() {
            console.log('work');
        }
    }

    const a = new A();
    a.eat();
    a.work();


    function MyClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
        // 클래스 데코레이터 로직을 작성할 수 있습니다.
        // constructor는 데코레이터가 적용된 클래스 생성자를 가리킵니다.
        return class extends constructor {
            private newProperty: string;

            constructor(...args: any[]) {
                super(...args);
                this.newProperty = "This is a new property added by the decorator.";
            }
        };
    }

// 클래스 데코레이터를 사용하려면 클래스 위에 @MyClassDecorator를 추가합니다.
    @MyClassDecorator
    class ExampleClass {
        constructor(public originalProperty: string) {
        }
    }

// 데코레이터가 적용된 클래스를 인스턴스화합니다.
    const example = new ExampleClass("Original Property");
    console.log(example.originalProperty); // "Original Property"
}