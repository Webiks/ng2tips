# Overload properties for classes with Decorators
### Purpose:
Using a simple decorator function to add const or enums to a class, especially for templateUrl of Components

### Step 1 : create the decorator
```typescript
export function overloadProperties(properties:any) {
    return function (constructor:Function) {
        for (let key of Object.keys(properties)) {
            constructor.prototype[key] = properties[key];
        }
    }
}
```

### Step 2: create some class and data to add to the class
### Step 3: add the decorator with some properties
see [enriched-component.ts](https://github.com/Webiks/ng2tips/blob/master/overload-properties-with-decorators/enriched-component.ts) for example + usage
```typescript
const Config = {example: 'Good'};

@overloadProperties({Config})
class A {
    b() {
        console.log(this.Config.example); // - will log 'Good'
    }
}
```