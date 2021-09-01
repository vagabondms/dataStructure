class Node {
    constructor(value, next = null, prev = null){
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0 
    }
    isEmpty(){
        return this.size === 0
    }
    clear(){
        this.head = null
        this.tail = null
        this.size = 0 
    }
    addToHead(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode 
        } else {
            let prevHead = this.head
            this.head = newNode
            this.head.next = prevHead
            prevHead.prev = this.head
        }
        this.size ++
    }
    addToTail(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        } else {
            let prevTail = this.tail
            this.tail = newNode
            prevTail.next = this.tail
            this.tail.prev = prevTail
        }
        this.size ++
    }
    removeHead(){
        if(this.isEmpty()){
            console.log('is Empty')
        } else if(this.size === 1 ) {
            this.clear()
            this.size --
        } else {
            this.head = this.head.next
            this.head.prev = null
            this.size --
        }
    }
    removeTail(){
        if(this.isEmpty()){
            console.log('is Empty')
        } else if(this.size === 1 ) {
            this.clear()
            this.size --
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
        }
    }
    addAt(value,index){
        if(this.isEmpty() || index < 0 || this.size < index){
            console.log('inappropriate')
            return
        }
        
        let cur = this.head
        let newNode = new Node(value)
        if(index === 0){
            
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode

        } else {
            while(index !== 0 ){
                cur = cur.next
                index --  
            }
            
            if(cur){
                let prevNode = cur.prev
                prevNode.next = newNode
                newNode.prev = prevNode
                
                cur.prev = newNode
                newNode.next = cur
                
            } else {
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode
            }
        }
        
        this.size ++
    }
    removeAt(index){
        if(this.isEmpty() || index < 0 || this.size <= index){
            console.log('inappropriate')
            return
        }
        if(this.size === 1){
            this.clear()
            return
        }
        if(index === 0){
            this.head = this.head.next 
            this.head.prev = null
        } else if(this.size - 1 === index){
            let prevNode = this.tail.prev
            prevNode.next = null
            this.tail = prevNode 
        } else {
            let cur = this.head
            while(index !== 0 ){
                cur = cur.next
                index --  
            }
            let prevNode = cur.prev 
            let nextNode = cur.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
        }
        this.size --
        return
    }
}
