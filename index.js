class SortedList {
  constructor() {
        this.items=[];
        this.length=0;
  }
  add(item) {
         const copy_items=this.items;
         copy_items.push(item)
         copy_items.sort((a,b)=>a>b?1:-1);
         this.items=copy_items;
         this.length=this.items.length;
  }
  get(position) {
         if(position>this.length-1){
           throw new Error('outOfBounds')
         }
         else{
           return this.items[position];
         }
  } 
  max() {
        if(this.length===0){
          throw new Error('EmptySortedList');
        }
        else{
          return Math.max(...this.items);
        }
  }
  min() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items);
    }
  }
  avg() {
    if(this.length===0){
      throw new Error('EmptySortedList')
    }
    return this.sum()/this.length
  }
  sum() {
      const sum=this.items.reduce((total,value)=>{
        return total+value
      },0)
      return sum
  }
  
};
const object=new SortedList();
module.exports = SortedList;