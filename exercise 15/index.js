"use strict";
//#15
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = ["maha", "sidra", "maryam", "aniqa"];
exports.guest_list = guest_list;
//step 1
let guestWhoCannotMakeIt = "aniqa";
console.log(`${guestWhoCannotMakeIt} Cannot Make It`);
//step 2
let newGuest = "Zahra";
let indexOfGuestWhoCannotMakeIt = guest_list.indexOf(guestWhoCannotMakeIt);
//console.log(indexOfGuestWhoCannotMakeIt);
if (indexOfGuestWhoCannotMakeIt !== -1) {
    guest_list[indexOfGuestWhoCannotMakeIt] = newGuest;
}
//step 3
console.log(`second set of messages.`);
guest_list.forEach((guest) => {
    console.log(`dear ${guest}, you are invited to dinner.`);
});
