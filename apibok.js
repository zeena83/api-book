//***************view lista****************//

let view = document.getElementById('view');
let lista = document.getElementById('lista');
let viewList = document.getElementById('viewList')

let viewMyLista = function(){
	
let url = "https://www.forverkliga.se/JavaScript/api/crud.php?op=select&key=bAu8g";
    
    let ajax = new XMLHttpRequest();
        ajax.open('get', url);
        ajax.onreadystatechange = function() {
            if(ajax.status == 200 && ajax.readyState == 4) {
                let json = JSON.parse(ajax.responseText);
                 console.log(ajax.responseText);
				if(json.status==='error'){
					viewMyLista();
				}
				
				
					else{
						let bookLista = json.data;
						viewList.innerHTML ="";
						console.log(bookLista);
						for ( let i = 0; i< bookLista.length; i++){ 
							let li = document.createElement('li');
							li.innerHTML ='"' + bookLista[i].title + '"' + "," + bookLista[i].author + ", ID:" + bookLista[i]. id;
							viewList.appendChild(li);
						}
					}
				
				

           }
                
        }
ajax.send();

};

view.addEventListener('click', viewMyLista);




//*************add book**************//

let inputTitle = document.getElementById('usr1');
let inputAuthor = document.getElementById('usr2');
let button = document.getElementById('addbook');

let sendBook = function(){
let  titleToSend = inputTitle.value;
let authorToSend = inputAuthor.value;

let url = "https://www.forverkliga.se/JavaScript/api/crud.php?op=insert&key=bAu8g&title=" + titleToSend +"&author=" +authorToSend;
	console.log(url);
    
    let ajax = new XMLHttpRequest();
        ajax.open('post', url);
        ajax.onreadystatechange = function() {
            if(ajax.status == 200 && ajax.readyState == 4) {
                let json = JSON.parse(ajax.responseText);
                console.log(json);
				console.log(ajax.responseText);
				
				if (json.status === 'error'){
					sendBook();
				}
				titleToSend.innerHTML= "";
				authorToSend.innerHTML ="";
			}
           
                
        }
ajax.send();
};

button.addEventListener('click', sendBook);




//************changes************//
let bookId = document.getElementById('id');
let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let changes = document.getElementById('change');
let changeBook = function(){
	let bookIdBook = bookId.value;
	let bookTitleBook = bookTitle.value;
	let bookAuthorBook = bookAuthor.value;

let url = "https://www.forverkliga.se/JavaScript/api/crud.php?op=update&key=bAu8g&id=" + bookIdBook + "&title=" +  bookTitleBook + "&author=" + bookAuthorBook;
	
	
    let ajax = new XMLHttpRequest();
        ajax.open('post', url);
        ajax.onreadystatechange = function() {
            if(ajax.status == 200 && ajax.readyState == 4) {
                let json = JSON.parse(ajax.responseText);
                console.log(json);
				console.log(ajax.responseText);
				
				if (json.status === 'error'){
					changeBook();
				}
				
			}
           
                
        }
ajax.send();
};

changes.addEventListener('click', changeBook);

	



//****** delete book ***********//


let deleteInput = document.getElementById('delete');
let deleteBook = document.getElementById('deleteBook1');

let deleteBookDelete = function() {
     
    let idTosend = deleteInput.value;

     
     let url = "https://www.forverkliga.se/JavaScript/api/crud.php?op=delete&key=bAu8g&id=" + idTosend;
    
    
     let ajax = new XMLHttpRequest();
        ajax.open('post', url);
        ajax.onreadystatechange = function() {
            if(ajax.status == 200 && ajax.readyState == 4) {
                let json = JSON.parse(ajax.responseText);
                
                if(json.status === 'error'){
                    deleteBookDelete();
                    
                }              
             

                    }
        }
                
ajax.send(); 
     
}
deleteBook.addEventListener('click', deleteBookDelete);

