function createCommentBox(name, comment) {
    return `
    <div class="commentBox">
          <div class="flexContainer">
            <i class="fa-regular fa-circle-user"></i>
            <div class="textContainer">
              <p class="displayName">${name}</p>
              <p class="text">${comment}</p>
              <div class="editForm">
                <input id="editInput" type="text" />
                <button class="submit editButton">Submit</button>
              </div>
            </div>
          </div>
          <div class="editContainer">
            <div class="edit">Edit</div>
            <div class="delete">Delete</div>
          </div>
        </div>
  `
}

$('#submit').on('click', function(event){
    event.preventDefault()
    let name = $('#nameInput').val();
    let comment = $('#commentInput').val();
    $('.commentContainer').append(createCommentBox(name, comment));
    $('#nameInput').val("");
    $('#commentInput').val("");
});

$('#commentContainer').on('click', '.delete', function(){
    $(this).parent().parent().remove();
});

$('#commentContainer').on('click', '.edit', function() {
    $(this).parent().parent().toggleClass('displayEdit');
});

$('#commentContainer').on('click', '.editButton', function() {
    let editedText = $('#editInput').val();
    $(this).parent().prev().text(editedText);
    $('#editInput').val("");
    $(this).parent().parent().parent().parent().toggleClass('displayEdit');
});

// on clicking submit button
// take value of name and comment
// validate they have content
// if validation is passed
// append new comment block with name and comment input data

