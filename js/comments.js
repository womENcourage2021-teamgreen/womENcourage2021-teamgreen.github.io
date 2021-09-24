function showcomment(idnumber) {
    var elements = document.getElementsByClassName("comment-id-"+idnumber)
    for (var i = 0; i < elements.length; i ++) {
        elements[i].style.display = 'block';
    }
    document.getElementsByClassName("comment-id-alert-"+idnumber)[0].style.display = "none";
}

function hidecomment(idnumber) {
    var elements = document.getElementsByClassName("comment-id-"+idnumber)
    for (var i = 0; i < elements.length; i ++) {
        elements[i].style.display = 'none';
    }
    document.getElementsByClassName("comment-id-alert-"+idnumber)[0].style.display = "block";
}

function upvote(idnumber) {
    var element = document.getElementsByClassName("comment-votes-"+idnumber)[0];
    element.innerHTML = parseInt(element.innerHTML) + 1;
}

function downvote(idnumber) {
    var element = document.getElementsByClassName("comment-votes-"+idnumber)[0];
    oldvotes = parseInt(element.innerHTML);
    if (oldvotes == 0) {
        newvotes = 0;
    }
    else {
        newvotes = oldvotes - 1;
    }
    element.innerHTML = newvotes; 
}

function addcomment() {
    document.getElementById("democomment").style.display = "block";
    var text = document.getElementById("comment-form").value;
    span = document.getElementById("newcommenttoshow");
    textnode = document.createTextNode(text);
    span.appendChild(textnode);
    if (text.includes("bad")) {
        hidecomment(0);
    }
    
    else {
        showcomment(0);
    }
    document.getElementById("comment-form").value = "";
}


function initializecomments() {
    showcomment(1);
    showcomment(2);
    hidecomment(3);
    document.getElementById("democomment").style.display = "none";
}
