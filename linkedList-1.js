class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    insertFirst(value){
        const prevHead = this.head
        const newNode = new Node(value)
        if(!prevHead){
            this.head = newNode
            this.tail = newNode
        } else {
            const prevHead = this.head
            this.head = newNode
            this.head.next = prevHead   
        }
        this.size++
    }
    insertLast(value){
       const prevTail = this.tail
       const newNode = new Node(value)
       if(!prevTail){
            this.head = newNode
            this.tail = newNode
       } else {
           const prevTail = this.tail
           this.tail = newNode
           prevTail.next = newNode
       }
       this.size++
    }
    insertAt(value, index){
        // 1) [예외] this.size < index 조건에 해당되면 에러처리가 필요하다.
        if(this.size < index || index < 0){
            //    this.size가 3일 때 3index는 tail이므로 넣을 수 있다.
            //    또한, 0 > index 조건에 해당되면 에러처리가 필요하다. 
            console.log('error')
            return
        }
        if(this.isEmpty()){
            this.insertFirst(value)
        } else if(this.size === index) {
            this.insertLast(value)
        } else {
            let counter = index - 1 
            // 3) 이외의 경우는 while문을 통해 접근이 가능하다.
        }
        this.size ++
    }
    removeAt(index){

    }
    isEmpty(){
        return this.size === 0
    }
}
