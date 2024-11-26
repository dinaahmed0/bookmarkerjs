var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput = document.getElementById("bookmarkURL");
var tableContent = document.getElementById("tableContent");
var bookmarkList=[]


function submits() {

    if(bookmarkNameValidation()===true && bookmarkURLValidation()===true){
        console.log(bookmarkNameInput.value, bookmarkURLInput.value);

        var bookmark={
            name:bookmarkNameInput.value,
            url:bookmarkURLInput.value
        }
       
        bookmarkList.push(bookmark);
        displaybookmark(bookmarkList)
    }
}

function displaybookmark(bList){
    console.log(bList);

    var box = "";
    for (var i=0 ; i < bList.length; i++){
        box += ` <tr>
                <td>${i+1}</td>
                <td>${bList[i].name}</td>              
                <td>
                  <button class="btn btn-visit" data-index="${i}" >
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
                </td>
                <td>
                  <button class="btn btn-delete pe-2" data-index="${i}">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr> `
    }
    tableContent.innerHTML = box;

    var visitButtons = document.querySelectorAll(".btn-visit");
    for(var v = 0; v < visitButtons.length; v++){
    visitButtons[v].addEventListener("click", function(){
        var index = this.getAttribute("data-index");
        var bookmark = bookmarkList[index];
        window.open(bookmark.url, "_blank");
    })
   }

   var deleteButtons = document.querySelectorAll(".btn-delete");
    for (var d = 0; d < deleteButtons.length; d++) {
        deleteButtons[d].addEventListener("click", function() {
            var index = this.getAttribute("data-index");
            bookmarkList.splice(index, 1); 
            displaybookmark(bookmarkList); 
        });
    }
}


function bookmarkNameValidation(){
    var nameregex = /^[A-Z][a-z]{3,10}$/;
    if(nameregex.test(bookmarkName.value)){
        return true;
    }
    else{
        alert("Invalid Bookmark Name. Please make sure that the name has 3 letter or more and begins with a capital letter");
    }
}

function bookmarkURLValidation(){
    var urlregex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/;
    if(urlregex.test(bookmarkURL.value)){
        return true;
    }
    else{
        alert("Please enter a valid URL.");
    }
}