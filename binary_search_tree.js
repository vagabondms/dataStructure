class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(){
        this.root = null
        this.counter = 0 
    }
    insert(curNode, value){
        if(value < curNode.value){
            if(!curNode.left){
                curNode.left = new Node(value)
            } else {
                this.insert(curNode.left,value)
            }
        } else {
            if(!curNode.right){
                curNode.right = new Node(value)
            } else {
                this.insert(curNode.right,value)
            }
        }
    }
    add(value){
        if(!this.root){
            this.root = new Node(value)
        } else {
           this.insert(this.root, value)
        }
        ++this.counter 
        return this.counter
    }
    search(node, value){
        if(node.value > value){
            return this.search(node.left, value)
        } else if(node.value < value) {
            return this.search(node.right, value)
        } else if(node.value === value){
            return node
        } else {
            return null
        }
    }
    get(value){
        if(!this.root){
            return null
        } else {
            return this.search(this.root, value)
        }
    }
    findSecondMostBiggestValue(node, value){
        // value와 새로운 node를 return 시킨다.
        if(node.right){
            this.findBiggest(node.right, value)
        } else {
            let temp = node.value 
            node.value = value
            return temp
        }
    }
    detach(node, value){
        if(node.value > value){
            node.left = this.detach(node.left, value)
        } else if(node.value < value){
            node.right = this.detach(node.right, value)
            // 무조건 트리안에 해당하는 노드가 있는 것을 가정하기 때문에 else라는 조건에 node.value === value 조건만 존재함
        } else {
            let newNode
            if(!node.left){
                newNode = node.right 
                return newNode
            } else if(!node.right){
                newNode = node.left
                return newNode
            } else {
                // both left / right not exist 
                // 현재 노드의 왼쪽을 딱 한번만 타고 들어가서, 
                let temp = node.value
                node.value = this.findSecondMostBiggestValue(node.left, node.value)
                node.left = this.detach(node.left, temp)
            }
        }
        return node
        
    }
    remove(value){
        if(!this.root){
            return null
        } else if (this.counter === 1){
            this.root = null
            this.counter --
        } else {
            this.detach(this.root, value)
            this.counter --
        }

    }
}