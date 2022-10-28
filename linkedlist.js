
class Node {

    constructor(data = null){
        this.data = data;
        this.next = null;

    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        console.log(`Original:\n ${this.printList()}`);
    }

    // Method to enter an array of values we want to put in the list
    fillValues(arr){
        // if list is Empty 
        if (arr.length === 0){
            this.tail = this.head;
        } 
        else if(arr.length > 0){
            this.head = new Node(arr[0]);
            let current = this.head;
            for (let i = 1; i < arr.length; i++) {
                current.next = new Node(arr[i]); // create a new node
                current = current.next;
            }
            this.tail = current;
            this.size = (arr.length);
        }
        console.log(`Filled list with values ${arr} :\n ${this.printList()}`);
        return this;
    }

    // Method to console log the list
    printList() {
        let currNode = this.head;
        let listStr = "";
    
        if (currNode) {
            listStr = `${currNode.data}`;
    
            while (currNode.next) {
                currNode = currNode.next;
                listStr = `${listStr} --> ` + `${currNode.data}`;
            }
        }
        return listStr + ` --> ${null}`;
    }
    
    // Method to convert the list values into an array
    toArray() {
        let currNode = this.head;
        const listArr = [];

        if (currNode) {
            listArr.push(currNode.data);

            while (currNode.next) {
                currNode = currNode.next;
                listArr.push(currNode.data);
            }
        }
        return listArr;
    }

    addToTail(data){
        let newNode = new Node(data); // create a new node
        let currNode; // store current node
    
        // if list is Empty add the data element and make it head
        if (this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
        // if list has some data, take the head as the current node
            currNode = this.head;
    
            // iterate over each node till we reach the last one at the end of the list
            // we enter the while only when a next node exists
            while (currNode.next) {
                currNode = currNode.next;
            }
            // add node next to the last and current one
            currNode.next = newNode;
            this.tail = currNode.next;
        }
        this.size++;  // increment the list size by 1
        console.log(`Added ${data} to Tail:\n ${this.printList()}`);

        return this.tail;
    }

    addToHead(data){
        let newHead = new Node(data); // create a new node that will be our new head node

        if (this.head === null){
            this.head = newHead;
            this.tail = this.head;
        } else{
            newHead.next = this.head; // assign the next to the current head
            this.head = newHead; // and reassign the head to our new head node
        }
        // increment the list size by 1
        this.size++;
        console.log(`Added ${data} to Head:\n ${this.printList()}`);

        return this.head;
    }

    addToMid(data){
        const newNode = new Node(data);

        // if list is Empty 
        if (this.head === null){
            this.head = newNode;
            this.tail = this.head;
        } 
        else {
            let prevMidNode = this.head;
            let nextMidNode = this.head.next;
        
            for (let i = 0; i < this.size / 2 - 1; i++) {
                prevMidNode = prevMidNode.next;
            }
    
            nextMidNode = prevMidNode.next;
            prevMidNode.next = newNode;
            newNode.next = nextMidNode;
        }
        // increment the list size by 1
        this.size++;
        console.log(`Added ${data} to Middle:\n ${this.printList()}`);
        return this;
    }

    removeHead(){
        // if list is Empty 
        if (this.head === null){
            this.tail = this.head;
        }
        // only remove head if the list is not empty
        else if (this.size > 0){
            this.head = this.head.next;
            this.size--;
        }
        console.log(`Removed Head:\n ${this.printList()}`);
        return this.head;
    }

    removeTail(){
        let newTail = this.head;

        // if list is Empty 
        if (this.head === null){
            this.tail = this.head;
        } 
        // only remove tail if the list is not empty
         if (this.size > 0){
            for (let i = 0; i < this.size - 2; i++) {
                newTail = newTail.next;
            }
            newTail.next = null;
            this.tail = newTail;
        }
        console.log(`Removed Tail:\n ${this.printList()}`);
        return this.tail;
    }
    
    removeMid() {
        // if list is Empty 
        if (this.head === null){
            this.tail = this.head;
        } 
        // only remove tail if the list is not empty
        if (this.size > 0) {
          let midNode = this.head;
    
          if (this.size % 2 === 0) {
            for (let i = 0; i < this.size / 2 - 1; i++) {
              midNode = midNode.next;
            }
          } else {
            for (let i = 0; i < this.size / 2 - 2; i++) {
              midNode = midNode.next;
            }
          }
          midNode.next = midNode.next.next;
          // decrease list size by 1
          this.size--;
          console.log(`Removed value from the middle:\n ${this.printList()}`);

        }
        return this;
}
    
    reverseList(){
        let reversedArr;

        // if list is Empty 
        if (this.head === null){
            this.tail = this.head;
        } 
        // only if the list is not empty
        else if (this.size > 0){
            // convert list to array and reverse it
            reversedArr = this.toArray().reverse();
        }

        // using a previously declared method to fill in the values
        return this.fillValues(reversedArr);
    }

    sortList(){
        let sortedArr;

        // if list is Empty 
        if (this.head === null){
            this.tail = this.head;
        } 
        // only if the list is not empty
        else if (this.size > 0){
            // convert list to array and reverse it
            sortedArr = this.toArray().sort((a, b) => b - a);
        }

        // using a previously declared method to fill in the values
        return this.fillValues(sortedArr);
    }

}


module.exports = LinkedList;