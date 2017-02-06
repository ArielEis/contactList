"use strict";

var list;
var contactDiv;
var template;
var id = -1;
var contactList;
var inputName;
var inputPhone;


$(document).ready(function () {
    init();
    setAddToListButtonListenerClick();
});

function init() {
    contactList = new ContactList();
    contactDiv = $(".contacts");
    list = contactDiv.find('.list');
    template = list.find(".template");
    inputName = contactDiv.find('#contact_name');
    inputPhone = contactDiv.find('#contact_phone');
    list.empty();
}


function setAddToListButtonListenerClick(){
    var button = contactDiv.find('.add_contact');
    button.click(function () {
        id++;
        contactList.addContact(new Contact(inputName.val(), inputPhone.val()));
        drawNewContent();
    });
}


function drawNewContent(){
    var node = template.clone();
    printNameAndPhone(node);
    node.attr('id', "card"+id);
    node.attr("class", "card");
    list.append(node);
    setDeleteButtonListenerClick(node);
    setUpdateButtonListenerClick(node);
}

function updateContent(index){
    var node = list.find('#card'+index);
    printNameAndPhone(node);
}


function deleteContent(index){
    list.find('#card'+index).remove();
}


function printNameAndPhone(node){
    node.find('.li_name').text(inputName.val());
    node.find('.li_phone').text(inputPhone.val());
}

function setDeleteButtonListenerClick(node){
    var button = node.find('.delete_contact');
    button.attr("index", id);
    button.click(function () {
        var index = $(this).attr("index");
        contactList.deleteContact(index);
        deleteContent(index);
    });
}

function setUpdateButtonListenerClick(node){
    var button = node.find('.update_contact');
    button.attr("index", id);
    button.click(function () {
        var index = $(this).attr("index");
        var contactToUpdate = contactList.getContactOfIndex(index);
        contactToUpdate.setName(inputName.val());
        contactToUpdate.setPhone(inputPhone.val());
        updateContent(index);
    });
}