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
    clearList(){
        this.head = null
        this.tail = null
    }
    removeFirst(){
        if(!this.isEmpty()){
            if(this.size === 1){
                this.clearList()
            } else {
                this.head = this.head.next
            }
            this.size --
        }
    }
    removeLast(){
        if(!this.isEmpty()){
            if(this.size === 1){
                this.clearList()
            } else {
                let counter = this.size - 2
                let cur = this.head
                while(counter !== 0){
                    cur = cur.next
                    counter -- 
                }
                this.tail = cur
                this.tail.next = null
            }
            this.size --
        }
    }
    insertAt(value, index){
        // 1) [예외] this.size < index 조건에 해당되면 에러처리가 필요하다.
        if(this.size < index || index < 0){
            //    this.size가 3일 때 3index는 tail이므로 넣을 수 있다.
            //    또한, 0 > index 조건에 해당되면 에러처리가 필요하다. 
            console.log('error')
            return
        }

        if(this.isEmpty() || index === 0){
            // 2) 만약 비어있거나 index === 0 이면 insertFirst를 해야하거나, 하는 것이다.
            this.insertFirst(value) 
        } else if(this.size === index) {
            // 3) this.size === index라는 것은 마지막에다가 넣으라는 뜻이다. 
            this.insertLast(value)
        } else {
            // 4) 모든 경우의 수를 거르고 이제 중간에 삽입하는 경우만 남았다.
            let cur = this.head
            let counter = index - 1
            while (counter !== 0 ){
                cur = cur.next
                counter --
            }
            const prevNext = cur.next
            cur.next = new Node(value)
            cur.next.next = prevNext
            this.size ++
        }
    }
    // 특정 인덱스를 받아 해당 인덱스에 위치한 노드를 지워야한다. 
    removeAt(index){
        // 1. 예외처리가 필요하다. 
        if(index < 0 || this.size <= index ){
            console.log('inappropriate inputs')
            return
        }
        if(this.isEmpty()){
            console.log('this is Empty')
            return
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
            this.size --
            return
        }
        if(index === 0 ){
            this.head = this.head.next
            this.size --
            return 
        }
        let cur = this.head
        let counter = index - 1 
        while(counter !== 0 ){
            cur = cur.next
            counter -- 
        }
        if(cur.next.next){
            cur.next = cur.next.next 
            this.size --
        } else {
            cur.next = null
            this.tail = cur
            this.size --
        }
    }
    isEmpty(){
        return this.size === 0
    }
}
