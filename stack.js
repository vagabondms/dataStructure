class Stack {
    #stack
    constructor(){
        this.#stack = {}
        this.index = 0
    }
    // 데이터 집어넣기
    push(item){
        this.#stack[this.index++] = item
    }
    // 데이터 추출
    pop(){
        //O(1)이야 함.
        let target = this.#stack[this.index-1]
        if(target){
            delete this.#stack[--this.index]
            return target
        } else {
            return null
        }
        
    }
    // 다음에 나올 데이터를 확인
    peek(){
        return this.#stack[this.index-1]
    }
    // 현재 스택이 비어있는지를 확인
    isEmpty(){
        if(this.index ===0 ){
            return true ; 
        }
    }
    // 현재 스택을 초기화
    clear(){
        this.#stack = {}
    }
    length(){
        return this.index-1
    }
    
} 
