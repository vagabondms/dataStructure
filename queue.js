class Queue {
    #queue
    #front
    #back

    constructor(){
        this.#queue = {}
        this.#front = 0
        this.#back = 0
    }
    // operations

    // queue에 집어넣음.
    // 성공적으로 들어갔음면 true return
    enqueue(item){
        // this.#queue의 this.#back에 +1 한 위치에 item 집어넣기
        this.#queue[this.#back++] = item
        // 들어갔으면 return true
        return true 
        //? false는 어떤 상황에서 넣어야하지?
    }
    // queue에서 뺀다.
    // 빠진 element를 return한다.
    dequeue(){
        let target =  this.#queue[this.#front] 
        if(target){
            delete this.#queue[this.#front++]
            return target
        } else {
            return null
        }
        
        // this.front index에 있는 것을 delete하고 #front에 ++를 한다. 
    }
    get size(){
        return this.#back - this.#front
    }
    
    
}