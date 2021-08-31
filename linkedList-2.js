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
        this.size = 0
    }
    isValid(index){
        if(index < 0 || this.size < index){
            return false
        }
        return true
    }
    insertFirst(value){
        const prevHead = this.head
        this.head = new Node(value, prevHead)
        this.size ++
    }
    insertLast(value){
        let cur = this.head
        while(cur.next){
            cur = cur.next
        }
        cur.next = new Node(value)
        this.size++
    }
    insertAt(value, index){

        if(!this.isValid(index)){
            return
        }

        if(index === 0){
            this.insertFirst(value)
        } else {
            let cur = this.head
            let leftIndex = index - 1 
            while (leftIndex !== 0 ){
                cur = cur.next
                leftIndex --
            }
            let nextNode = cur.next
            cur.next = new Node(value,nextNode)
        }
        this.size ++
    }
    removeAt(index){
        // this could be a function 
        if(!this.isValid(index)){
            return
        }
        // if(index < 0 || this.size <= index){
        //     console.log('Out of Range')
        //     return
        // }

        
        if(index === 0){
            this.head = this.head.next   
        } else {
           let leftIndex = index - 1 
           let cur = this.head
           while (leftIndex !== 0 ){
            cur = cur.next
            leftIndex --
           }
           let nextNode = cur.next.next
           cur.next = nextNode
        }        
        this.size --
    }
    isEmpty(index){
        return this.head === null
    }
}
