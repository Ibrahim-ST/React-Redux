import {produce} from "immer";
let friends = ['Abid', 'Ayman', 'Zisad', 'Zisan', 'Mynul'];


const newFriends = produce(friends, (draft) => {
    draft.push("Sohel") 
})
console.log(friends);
console.log(newFriends);