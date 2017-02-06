"use strict";

function ContactList(){
    this._contactList = [];
}

ContactList.prototype.getContactList = function () {
   return this._contactList;
};

ContactList.prototype.addContact = function (contact) {
    this._contactList.push(contact);
};

ContactList.prototype.deleteContact = function (index) {
    this._contactList.splice(index, 1);
};

ContactList.prototype.getContactOfIndex = function(index){
    return this._contactList[index];
};


function Contact(name, phone){
    this._name = name;
    this._phone = phone;
}

Contact.prototype.getName = function(){
    return this._name;
};

Contact.prototype.setName = function(name){
    this._name = name;
};

Contact.prototype.getPhone = function(){
    return this._phone;
};

Contact.prototype.setPhone = function(phone){
    this._phone = phone;
};
