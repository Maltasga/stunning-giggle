export function timeout(milisegundos = 500) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        let timer = 0;
        descriptor.value = function (...args: any[]) {
            clearInterval(timer);
            timer = setTimeout(() => { metodoOriginal.apply(this, args); }, milisegundos);
        }

        return descriptor;
    }
}