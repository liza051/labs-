export class BiDirectionalPriorityQueue {

    constructor() {
        this.items = [];
    }
    
    enqueue(item,priority){
        const element = {
            item,
            priority,
        };
        this.items.push(element);
    }
    peek(type){
        if(this.items.length === 0){
            return null;
        }
        if(type === "oldest"){
            return this.items[0];
        }
        if (type === "newest"){
            return this.items[this.items.length -1];
        }
        if (type === "highest"){
            let max = this.items[0];

            for (let i=1; i< this.items.length; i++){
                if (this.items[i].priority>max.priority){
                    max = this.items[i];
                }
            }

            return max;
        }
        if (type === "lowest"){
            let min = this.items[0];

            for (let i =1; i< this.items.length; i++){
                if (this.items[i].priority<min.priority){
                    min = this.items[i];
                }
            }
            return min;
          
        }
        return null;
    }
}