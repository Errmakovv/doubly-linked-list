const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
    }

    append(data) {
        if(this.length==0) {
            this._head.data = data;
            this._tail = this._head;
        }
        else {
            let newNode = new Node(data);
            this._tail.next=newNode;
            newNode.prev=this._tail;
            this._tail= newNode;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let temp = this._head;
        for(let i=0;i!=index;i++){
            temp=temp.next;
        }
        return temp.data;
    }

    insertAt(index, data) {
        let temp = this._head;
        let newNode = new Node(data);
        if(this.length==0){
             this._head.data=data;
             return this;
        }
        for(let i=0;i!=index;i++){
            temp=temp.next;
        }
        temp.prev.next=newNode;
        newNode.prev=temp.prev;
        newNode.next=temp;
        temp.prev=newNode;
        return this;
    }


    isEmpty() {
        if(this._head.next == null && this._head.data == null) return true;
        else return false;
    }

    clear() {
        this._head = new Node();
        this._tail=this._head;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let temp = this._head;
        for(let i=0;i!=index;i++){
            temp=temp.next;
        }
        if(index==0){
            temp=this._head;
            this._head=this.head.next;
            temp=null;
            return this;
        }
        temp.prev.next=temp.next;
        temp.next.prev=temp.prev;
        temp = null;
        return this;
    }

    reverse() {
        let temp=this._head;
        let hold;
        while(temp!==this._tail){
            hold=temp.next;
            temp.next=temp.prev;
            temp.prev=hold;
            temp=temp.prev;
        }
        hold=temp.next;
        temp.next=temp.prev;
        temp.prev=hold;
        hold=this._tail;
        this._tail=this._head;
        this._head=hold;
        return this;
    }

    indexOf(data) {
        let temp = this._head;
        let index = 0;
        while (temp !== null) {
            if(temp.data == data) return index;
            temp=temp.next;
            index++;
        }
        return -1;
    }
}

module.exports = LinkedList;
