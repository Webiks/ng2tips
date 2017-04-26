export function overloadProperties(properties:any) {
    return function (constructor:Function) {
        for (let key of Object.keys(properties)) {
            constructor.prototype[key] = properties[key];
        }
    }
}