//The tests we are going to use for this are unit tests (the unit is a Class)

// Using ES instead of Common JS to import
// import LinkedList from "./linkedlist.js";

const LinkedList = require("./linkedlist");

//   |node|
//   Example:    |head|  -->  |head.next|  -->  |head.next.next|  -->  |tail(head.next.next.next)|  -->  null
describe("Testing the linked list class in 8 cases", () => {

    it("Add a new value to the list's tail", () => {
        const list = new LinkedList;

        expect((list.addToTail)).toBeDefined()
        expect((list.head && list.tail && list.size)).toBeFalsy();
        expect((list.addToTail(2)).data).toBe(2);
        expect((list.head === list.tail)).toBeTruthy()
        expect((list.head && list.tail && list.size)).not.toBeNull();
        expect((list.addToTail(4)).data).toBe(4);
        expect((list.addToTail("six")).data).toBe("six");
        expect((list.addToTail(false)).data).toBe(false);
        expect((list.size)).toBe(4);
        expect((list.head.data)).toBe(2);
        expect((list.tail.data)).toBe(false);
    })
    
    it("Add a new value to the list's head", () => {
        const list = new LinkedList;

        expect(list.addToHead).toBeDefined();
        expect((list.head && list.tail && list.size)).toBeFalsy();
        expect((list.addToHead(2)).data).toBe(2);
        expect((list.head === list.tail)).toBeTruthy()
        expect((list.head && list.tail && list.size)).not.toBeNull();
        expect((list.addToHead(4)).data).toBe(4);
        expect((list.addToHead("six")).data).toBe("six");
        expect((list.addToHead(false)).data).toBe(false);
        expect((list.size)).toBe(4);
        expect((list.head.data)).toBe(false);
        expect((list.tail.data)).toBe(2);
    })

    it("Add a new value to the list's middle", () => {
        const list = new LinkedList;
        
        expect(list.addToMid).toBeDefined();
        expect((list.head && list.tail && list.size)).toBeFalsy();
        
        list.fillValues([1,3]);
        expect((list.head && list.tail && list.size)).toBeTruthy();
        expect(list.addToMid(2).head.next.data).toBe(2);
        expect(list.size === list.addToMid().size).toBe(false);
    })

    it("remove the head of the list", () => {
        const list = new LinkedList;
        
        expect(list.removeHead).toBeDefined();
        expect(list.removeHead()).toBe(null);

        list.fillValues([false,1,2,"three",4,5]);
        expect((list.head && list.tail && list.size)).toBeTruthy();
        expect((list.head.data)).toBe(false);
        expect(list.removeHead().data).toBe(1);
    })

    it("Remove the tail of the list", () => {
        const list = new LinkedList;
        
        expect(list.removeTail).toBeDefined();
        expect(list.removeTail()).toBe(null);

        list.fillValues([false,1,2,"three",4,5]);
        expect((list.head && list.tail && list.size)).toBeTruthy();
        expect((list.tail.data)).toBe(5);
        expect(list.removeTail().data).toBe(4);
    })

    it("Remove the middle of the list", () => {
        const list = new LinkedList;
        
        expect(list.removeMid).toBeDefined();
        expect(list.removeMid().tail).toBe(null);
        
        list.fillValues([false,1,2,"three",4,5]);
        expect((list.head && list.tail && list.size)).toBeTruthy();
        expect(list.size === list.removeMid().size).toBe(false);
    })
    
    it("Reverse the list", () => {
        const list = new LinkedList;
        
        expect(list.reverseList).toBeDefined();
        expect((list.head && list.tail && list.size)).toBeFalsy();

        list.fillValues([false,1,2,"three",4,5]);
        expect((list.head && list.tail && list.size)).toBeTruthy();
        expect(list.reverseList().size === list.size).toBe(true);
        expect(list.tail.data === list.reverseList().head.data).toBe(true);
        expect(list.reverseList().head.data).toBe(5);
    })

    it("Add a new value at the middle of the list", () => {
        const list = new LinkedList;
        
        expect(list.sortList).toBeDefined();
        expect((list.head && list.tail && list.size)).toBeFalsy();

        list.fillValues([8,1,2,11,0,4,5,22]);
        expect((list.head && list.tail && list.size)).toBeTruthy();
        expect(list.sortList().size === list.size).toBe(true);
        expect(list.sortList().head.data).toBe(22);
        expect(list.sortList().tail.data).toBe(0);
    })

})