export class BiDirectionalPriorityQueue {

    constructor() {
        this.items = [];
    }
    
    enqueue(item,priority){
        const element = {
            item: item,
            priority: priority
        };
        this.items.push(element);
    }
}