export function medirPerformance(emSegundos: boolean = false) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let unidade = "ms";
            let divisor = 1;

            if (emSegundos) {
                unidade = "s";
                divisor = 1000;
            }

            console.log(`Medindo performance do método ${key}`)
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`tempo decorrido ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        }

        return descriptor;
    }
}