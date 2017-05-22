import {overloadProperties} from './overload-properties';

const constExample = {
    Num: 1,
    Bool: true
};

enum enumExample {
    Example1 = 1,
    Example2
}

@overloadProperties({constExample, enumExample})
@Component({
    templateUrl: 'some/url.html'
})
export class EnrichedComponent {
    /**
     * Whatever implementation...
     *
     * Because of the overloading it possible to have code like this at the template:
     * <div>Example #{{enumExample.Example1}}</div>
     */
}