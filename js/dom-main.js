// var element;
// element = document.all;
// element = document.head;
// element = document.title;
// element = document.body;
// element = document.images;
// element = document.anchors;
// element = document.links;
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.baseURI;
// element = document.domain;
// element = document.getElementById("header");
// element = document.getElementsByClassName("list")[0];
// element = document.getElementsByTagName("ul")[3];
// console.log(element);

                     //DOM Get & Set
// var element;
// element = document.getElementbyId("header").innerText;
// element = document.getElementbyId("content").innerHTML;
// element = document.getElementbyId("header").getAttribute("class");
// element = document.getElementbyId("header").getAttribute("id");
// element = document.getElementbyId("header").getAttributeNode("style");
// element = document.getElementbyId("header").attributes;
// element = document.getElementbyId("header").attributes[1].value;
// element = document.getElementbyId("header").attributes[3].name;

// console.log(element);       

                    //Dom Set Method
// var element;

// document.getElementById("header").innerText = "Wow"
// element = document.getElementById("header").innerHTML;

// console.log(element);          

// var element;

// document.getElementById("header").innerHTML = "<h1>Wow</h1>"

// document.getElementById("header").setAttribute ("style","border:10px dotted yellow;");

// element = document.getElementById("header").getAttribute("class");

// console.log(element);

// var element;

// document.getElementById("header").innerHTML = "<h1>Wow</h1>"

// document.getElementById("header").attributes[1].value = "xyz";

// element = document.getElementById("header").getAttribute("class");

// console.log(element);

// var element;

// document.getElementById("header").innerHTML = "<h1>Wow</h1>"

// document.getElementById("header").attributes[1].value = "xyz";

// document.getElementById("header").removeAttribute("style");
// document.getElementById("header").removeAttribute("class");

// element = document.getElementById("header").getAttribute("class");

// console.log(element);

                    //   Dom Query selector
// var element;
// // document.querySelector("#header").innerHTML = "<h1>Wow</h1>";                    
// element = document.querySelectorAll("#header h1")[1].innerHTML;
// console.log(element);        

                    //Dom Css styling method
// var element;
// document.querySelector("#header").style.backgroundColor = "black";
// document.querySelector("#header").style.color = "orange";
// element = document.querySelector("#header").style.color;
// console.log(element);  

                    //Css with className
           //className return string         
// var element;

// document.querySelector("#header").className = "abc xyz";
// element = document.querySelector("#header").className;
// console.log(element);         

                    //Css with class list  
          //classList return array          
// var element;

// document.querySelector("#header").classList = "abc xyz";
// element = document.querySelector("#header").classList;
// console.log(element); 

                  //class add
            //we put multiple class my this method      
// var element;

// document.querySelector("#header").classList.add("xyz" , "efg");
// element = document.querySelector("#header").classList;
// console.log(element);    

                  //class remove 
// var element;

// document.querySelector("#header").classList.remove("xyz");
// element = document.querySelector("#header").classList;
// console.log(element);      

                  //Dom addEventlistner
// var element;

// // document.getElementById("header").onclick = abc;
// document.getElementById("header").onmouseenter = abc;

// function abc() {
//   document.getElementById("header").style.background = "purple";
// }

// var element;

// document.getElementById("header").addEventListener("mouseenter",abc);
// document.getElementById("header").addEventListener("click",function(){
//   this.style.border = "10px solid red";

// });

// function abc() {
//   document.getElementById("header").style.background = "purple";
// }

                     //classLength
// var element;

// document.getElementById("header").addEventListener("click",abc);            

// function abc() {
//   var a = document.getElementById("header").classList.length;
//   console.log(a);
// }

                 //classList.toggle
// var element;

// document.getElementById("header").addEventListener("click",abc);

// function abc() {
//   document.getElementById("header").classList.toggle("xyz");
//   var a = document.getElementById("header").classList;
//   console.log(a);
// }

                 //classList.toggle             
// var element;

// document.getElementById("header").addEventListener("click",abc);

// function abc() {
//   var a = document.getElementById("header").classList.item(2);
//   console.log(a);
// }

                 //classList.contain             
// var element;

// document.getElementById("header").addEventListener("click",abc);

// function abc() {
//   var a = document.getElementById("header").classList.contains("abc");
//   console.log(a);
// }

               //Dom traversal Methods
               //ParentElement  Simple null return karega
// document.getElementById("child-C").parentElement.style.background = "red";

// var a = document.getElementById("child-C").parentElement

// console.log(a);

               //ParentNode  //kuch na kuch input zaroor dai ga
// document.getElementById("outer").parentNode.style.background = "red";

// var a = document.getElementById("outer").parentNode;

// console.log(a);

                   //Children   //only return html tag
// document.getElementById("inner").children[0].style.background = "red";
// // var a = document.getElementById("inner").children;
// var a = document.getElementById("inner").children[0].innerHTML;

// console.log(a);

//                childNodes   //return text Node & element all spaces enter
// document.getElementById("inner").children[0].style.background = "red";
// var a = document.getElementById("inner").childNodes;

// console.log(a);

                   //First element child
//   document.getElementById("inner").firstElementChild.style.background = "red";
//  var a = document.getElementById("inner").firstElementChild.innerHTML;

//   console.log(a);

                  //last element child
//   document.getElementById("inner").lastElementChild.style.background = "red";
//  var a = document.getElementById("inner").lastElementChild;

//   console.log(a);

                 //First Child
  // var a = document.getElementById("inner").firstChild;

  // console.log(a);     

                 //Last Child

  // var a = document.getElementById("child-C").firstChild;

  // console.log(a);                
  // var a = document.getElementById("child-C").lastChild;

  // console.log(a);                

              //Next sibiling & previous sibilings

       //   document.getElementById("child-C").previousElementSibling.style.background = "red";
              
      //   var a = document.getElementById("child-C").previousElementSibling;
              
         //   console.log(a);  
        //   var a = document.getElementById("child-C").previousSibling;
            
            //   console.log(a); 

                           //Next sibilings 
//   document.getElementById("child-C").nextElementSibling.style.background = "red";

//   var a = document.getElementById("child-C").nextElementSibling;

//   console.log(a);  
  
      // var a = document.getElementById("child-C").nextSibling;
            
      //   console.log(a); 

      //       createElement
      //  var newElement = document.createElement("h2");
      //  console.log(newElement);

      //       createTextNode          
      //  var newElement = document.createElement("h2");
      //  console.log(newElement);

      //  var newText = document.createTextNode("This is just text");
      //  console.log(newText);

            //createComment     
      // var newComment = document.createComment("This is comment");
      // console.log(newComment);      
      
                      //Append Methods
      //  var newElement = document.createElement("h2");

      // var newText = document.createTextNode("This is just text");

      // var newComment = document.createComment("This is just comment");
      // newElement.appendChild(newText);
      
      // document.getElementById("test").appendChild(newElement);
      // document.getElementById("test").appendChild(newComment);

      //  console.log(newElement);

                      //Insert before
      //    var newElement = document.createElement("h2");

      //     var newText = document.createTextNode("This is just text");
                
      //  newElement.appendChild(newText);
                      
      //               var target = document.getElementById("test");
                      
      //               target.insertBefore(newElement,target.childNodes[0]);         
      
                   //insertAdjacentElement   this method is used for tag  //Beforebegin 
      // var newElement = document.createElement("h2");

      // var newText = document.createTextNode("This is just a text");

      // newElement.appendChild(newText);
      
      // var target = document.getElementById("test");

      // target.insertAdjacentElement("beforebegin", newElement);

                                  //afterbegin
      // var newElement = document.createElement("h2");

      // var newText = document.createTextNode("This is just a text");

      // newElement.appendChild(newText);
      
      // var target = document.getElementById("test");

      // target.insertAdjacentElement("afterbegin", newElement);

                   //insertAdjacentHTML   this method is used for tag and text //afterbegin
      // var target = document.getElementById("test");

      // var newElement = "<h2>This is Heading</h2>";
      
      // target.insertAdjacentHTML("afterbegin", newElement);

                          //afterend

      // var target = document.getElementById("test");

      // var newElement = "<h2>This is Heading</h2>";
      
      // target.insertAdjacentHTML("afterend", newElement);

                         //beforeend
      // var target = document.getElementById("test");

      // var newElement = "<h2>This is Heading</h2>";
      
      // target.insertAdjacentHTML("beforeend", newElement);

                   //insertAdjacentText   this method is used for text
                        //  beforeend
            // var target = document.getElementById("test");

      // var newElement = "<h2>This is Heading</h2>";
      
      // target.insertAdjacentHTML("beforeend", newElement);
          
                       //  afterend
      //    var target = document.getElementById("test");

      // var newElement = "<h2>This is Heading</h2>";
      
      // target.insertAdjacentHTML("afterend", newElement);                 
      // target.insertAdjacentHTML("beforebegin", newElement);                 
      // target.insertAdjacentHTML("afterbegin", newElement);         
      
                     //replace child & remove child
      // var newElement = document.createElement("li");               
      // var newText = document.createTextNode("wow new Text"); 
      
      // newElement.appendChild(newText);

      // var target = document.getElementById("list");
      // var oldElement = target.children[1];

      // target.replaceChild(newElement, oldElement);

                     // remove child
      //     var target = document.getElementById("list");
      //      var oldElement = target.children[0];
               
      //        target.removeChild(oldElement);              
                  
                  //cloneNode()
      //  var target = document.getElementById("list1").children[0];
      //  var copyElement = target.cloneNode(true);

      //  console.log(copyElement);

      //  document.getElementById("list2").appendChild(copyElement);

                     //contains()
      // var parentElement = document.getElementById("test");
      // var target = document.getElementById("abc");
      
      // var find = parentElement.contains(target);

      // console.log(find);

                     //hasAttributes() gives 2 output true/false
      // var target = document.getElementById("test");     
      // var find = target.hasAttribute("class");

      // console.log(find);

                           // hasChildNodes()
      // var target = document.getElementById("test");     
      // var find = target.hasChildNodes();

      // console.log(find);

                        //isEqualNode
      //  var target1 = document.getElementById("list1").firstElementChild;
       
      //  var target2 = document.getElementById("list2").children[1];

      //  var equal = target1.isEqualNode(target2);
       
      //  console.log(equal);
       
                        //form Events
                        