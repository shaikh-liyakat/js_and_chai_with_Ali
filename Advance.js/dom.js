/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               DOM  Document Object Model


// draw tree structutre of html tags elements and there node and attributes
/* 
❗ dom methods❗

document.links

document.baseurl

document.getElementById()

document.getElementByClass()


document.getElementById().innerHTML =    show the html the tags  and also assingned them a new value       


document.getElementByClass().innerHTML =    show the html the tags  and also assingned them a new value       


document.getElementById("id_name").id 
document.getElementById("id_name").className


document.getElementById("id_name").getAttribute("id")  // value of a id 
document.getElementById("id_name").getAttribute("class") // value of a class 


document.getElementById("id_name").setAttribute("class","new_class_values")
document.getElementById("id_name").setAttribute("id","new_id_values")


val2 = document.getElementsByTagName("font")
val2[0].style.color="white"


val3=val2[0].textContent
' Lorem ipsum dolor sit amet. \n 



let variable;
 variable = document.getElementById("id_name").id 

 variable.style.any_property_of_css = "values"       // ex backgroundcolor = "blue"  
 
 variable.style.any_property_of_css = "values"       
                                                    //ex border="", padding ="" borderRadius=""  

variable.textContent              //show all content even non display content also 

// ex
'\n       Lorem ipsum dolor sit amet. \n      \n    '
 


variable.innertext              
                                              //show all display content only not non display content

 //ex
'Lorem ipsum dolor sit amet.'




variable.innerHTML    //show all display content and non display content with also a html tags 

//ex       
\n <font style="color: rgb(29, 29, 218)"> Lorem ipsum dolor sit amet.\n      </font>\n   






document.querySelector("")   //ex h2 , ul ,li ,ol ,a but these tags only show first tags only with there value list also or a value only  work on html tags  name only and not on class or id value

ex
document.querySelector("#heading1 > font")

variable = [1,2,3,4,5]

variable.forEach(
(x)=>
    {statement return value}
)



/* 

// setTimeout(()=>
// {
//     location.reload()
// },10000
// )

scrollBy({
    top:1000,
    left : 100,
    behavior:"smooth"
});

*/
//  location.href="bom.js"



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// let new_val;
// let className;
// let elements_val;

// // document.appendChild

// document.body.onload = creation_of_element2
// elements_val=document.body.onload = creation_of_element2



 // document.body.onload = creation_of_element2
    //   elements_val=prompt("Enter the tag name")
    //   elements_text_node=prompt("Enter content want to print inside a tag")

// let creation_of_element2;
// function creation_of_element2(tag_name, message ) 
//   {
      
//   let new_val2;
//   new_val2 = document.createElement(`${tag_name}`)
//   new_val2.className="firstclass2"
//   new_val2.id="firstheading2"  
//   // new_val2.style.color="hsl(202, 97%, 44%)"
//   // new_val2.style.fontFamily="arial"
//   // new_val2.style.backgroundColor="white"

//  new_val2.style.css-style

//   new_val2.innerHTML=`<span>${message}</span>`
//   console.log(document.querySelectorAll(`${tag_name}`));

//   const currentDiv = document.createElement("a");
  
//   // // currentDiv.style.color="hsl(256, 97%, 44%)"
//   // // currentDiv.style.fontFamily="arial"
//   // // currentDiv.style.backgroundColor="grey"
//   document.body.append(new_val2);
  
      
//   }
//   creation_of_element2(elements_val,elements_text_node)
  

// let input =prompt("enter tag name")
// let new_all_tag2 = document.querySelectorAll("li")
// console.log(new_all_tag2);

// new_all_tag2.forEach((list) => 
//   {
//   list.classList.add('css-style')
//   });



// tag.classlist.add('')


//parent and children and childnode   

/*
list1=document.getElementsByTagName("html").children
list1[0].children
list1=document.getElementsByTagName("html")
list[0].nextsibling




//childnodes

list1=document.getElementsByTagName("body")
list1[0].childnodes




*/



/* 
//classlist

const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");

*/







/* 
//remove add and delete and replace

ex 
document.body.replaceWith(document.querySelector("h1"),document.querySelector("h2"))

<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>


const element = document.getElementById("div-02");
element.remove(); // Removes the div with the 'div-02' id



removeAttribute(attrName)

// Given: <div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// Now: <div id="div1" width="200px">


removeAttributeNode(attributeNode)

// Given: <div id="top" align="center" />
const d = document.getElementById("top");
const d_align = document.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align is now removed: <div id="top" />


removeAttributeNS(namespace, attrName)

// Given:
//   <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//     special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// Now: <div id="div1" width="200px" />



//replace

replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2,  paramN)

myNode.replaceChildren();





*/




/* 
insertAdjacentText(where, data)

'beforebegin': Before the element itself.
'afterbegin': Just inside the element, before its first child.
'beforeend': Just inside the element, after its last child.
'afterend': After the element itself.


<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->


//ex
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});


*/




/*

let value;
let child_value1;
value=document.querySelector("ul")
child_value1=value.children
child_value1=child_value1[0].children[0].children

// child_value1[0].remove()     // this will remove 0 index element


let value=document.getElementsByClassName("list_of_num")

value=value[0].setAttribute("id","liyakat")
value[0].removeAttribute("id","liyakat")


*/

// let v1;
// v1=document.querySelectorAll("li");

// for (let values of v1) 
// // {
// let v2;

// v2=values.classList.add("list_of_num")
//   console.log(v2);
// }


// let v1,v2;
// v1=document.createElement("a")
// // .innerHTML=`${"<a> </a>"}`
// // v1=v1.textContent="smoodhies";                /createtextnode
// // v1=v1.innerHTML="smoodhies2";                //createtextnode
// v1=v1.innerText="smoodhies3";                  //createtextnode

//all are working 

// v2 =document.querySelectorAll("ul")
// console.log(v1,v2);
// v2[0].append(v1)





// let v1,v2,v3;
// v1=document.createElement("a")
// // .innerHTML=`${"<a> </a>"}`
//  v1=v1.textContent="smoodhies";                //createtextnode
//  v1=v1.innerHTML="smoodhies2";                //createtextnode
//  v1=v1.innerText="smoodhies3";                  //createtextnode

//   // v1=v1.TEXT_NODE="smoodhies3";                  //createtextnode

// v2=document.createTextNode=("smoodhies")
//   //all are working 

// v3 =document.querySelectorAll(".bigcontainer")
// console.log(v1,v2);
// v3[0].appendChild(v2);




let values1
let values2
let values3
let values4

values1=document.createElement("p")
values1.classList.add("css-style")
values2=document.createTextNode("this is node value")
// values2[0].classList.add("css-style")
values1.appendChild(values2)
console.log(values1,values2);

// values3=document.getElementsByClassName("bigcontainer") //working
values3=document.querySelectorAll("body")  //working
// values3[0].classList.add("css-style")
console.log(values3);
values3[0].appendChild(values1)
console.log(values3);
console.log(values3.childrens);


/*
in appendchild there is only node values will be accepted there
only or element tag also  but at a time single value value will be taken only
*/


let val1
let val2
let val3
let val4
let val5

val1=document.createElement("h1")
// val1.TEXT_NODE="smookey"
document.body.childNodes[0].replaceWith(TEXT_NODE="smookey") //working

document.body.childNodes[0].nodeValue="liyakat" //working
document.body.style.color="green"

// document.body.childNodes.nodeValue.add(".css-style") //not work
console.log(val1);


document.body.childNodes[0].remove()
document.body.childNodes[0].remove()


document.body.id="liyakat"     
document.body.id.add="liyakat"
document.querySelectorAll("#liyakat")

document.body.nodeValue.add=(TEXT_NODE="liyakat") // working not know where

document.body.childNodes[0].nodeValue=add=(TEXT_NODE="liyakat")

// document.body.remove()    //this will remove whole body tag


document.body.childNodes.nodeValue=add=(TEXT_NODE="liyakat")//working added the node value

document.body.appendChild(document.nodeValue=add=(TEXT_NODE="liyakat")) // not workking

// document.body.firstElementChild  //*********** */




let value=document.querySelectorAll("ul>font")
value.innerHTML="<li></li>"
value.TEXT_NODE.add="liyakat"      //not work


let value=document.querySelectorAll("ul>font")
let val=innerHTML="<li></li>"
// val.appendChild(TEXT_NODE="liyakat")        
value.children.add=val
console.log(val)          //not work

let nod=document.createTextNode("liyakat")
// document.nodeType()





//this code is to create attribute and gave vale or assing that attribute value into that element attribute

let att_val =document.createAttribute("id")
att_val.value="firstid"
let ele=document.createElement("h1")
ele.appendChild(document.createTextNode("this my deep learning of node"))
ele.classList.add("css-style")
// ele.setAttribute(`${att_val}`)
ele.setAttributeNode(att_val)
document.body.appendChild(ele)
ele.getAttribute("id")

//want to try this 
const att = document.createAttribute("style");
// Set the value of the style attribute:
att.value = "color:red";



const node = document.getElementsByClassName("bigcontainer");
const a = document.createAttributeNS("http://www.w3.org/1999/xhtml", "class");
a.value = "0 0 100 100";
document.body.setAttributeNode(a);
console.log(document.body.getAttribute("class"));   //but old class name show
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// console.log(document.getElementsByTagName("H1")[0]);
// document.getElementsByTagName("body:ntchild(2)")

document.body.lastChild   //gives you last element child

let arr = Array.from(document.body.childNodes)
arr.indexOf(document.getElementById("firstid"),0)
arr.includes(document.getElementById("firstid")) // true




// Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.  

const element = document.getElementsByClassName("list_of_num"); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

document.body.appendChild(fragment);



//create range 
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);


//create  expression
// This method compiles an XPathExpression which can then be used for (repeated) evaluations.
// You must call this method on the same document that you run the expression against.

const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // returns an XPathResult object
const nodeContext = document.querySelector("nav");
// Re-using the XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // returns an XPathResult object




//node iterator loops for a node
debugger
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  function(val) {
   if ( val.nodeName.toLowerCase() === "p")
      { NodeFilter.FILTER_ACCEPT}
      else{ NodeFilter.FILTER_REJECT}
    }
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}


//new
const nodeIterator2 = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return node.nodeName.toLowerCase() === "p"
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  },
);
const pars2 = [];
let currentNode2;

while ((currentNode = nodeIterator2.nextNode())) {
  pars2.push(currentNode2);
}








/* 
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)

<div id="root">
  This is a text node.
  <span>And this is a <code>span</code> element.</span>
</div>


span {
  background-color: aqua;
}

const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.currentNode;
  node.data = node.data.toUpperCase();
}

 <div>
  <div>
    This is not escaped. <span class="escape">But this is escaped.</span>
  </div>
  <div class="escape">This is escaped.</div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="escape">
  <div>
    This is escaped. <span class="no-escape">But this is not escaped.</span>
  </div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="no-escape">
  <div>This is not escaped.</div>
  <div class="escape">This is not escaped.</div>
</div>


.escape {
  border: dashed;
}
.no-escape {
  border: solid;
}

const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
);

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // Exclude whitespace-only text nodes
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}



*/



// DocumentFragment.prepend()
// Inserts a set of Node objects or string objects before the first child of the document fragment.

// DocumentFragment.append()
// Inserts a set of Node objects or string objects after the last child of the document fragment.

// DocumentFragment.replaceChildren()
// Replaces the existing children of a DocumentFragment with a specified new set of children.


// The DocumentFragment interface represents a minimal document object that has no parent.

// It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is due to the fact that the document fragment isn't part of the active document tree structure. Changes made to the fragment don't affect the document.


// The DocumentType interface represents a Node containing a doctype.

// Inherits properties from its parent, Node.

// DocumentType.name Read only
// The type of the document. It is always "html" for HTML documents, but will vary for XML documents.

// DocumentType.publicId Read only
// A string with an identifier of the type of document. Always empty ("") for HTML, it will be, for example, "-//W3C//DTD SVG 1.1//EN" for SVG documents.

// DocumentType.systemId Read only
// A string containing the URL to the associated DTD. Always empty ("") for HTML, it will be, for example, "http://www.w3.org/2000/svg" for SVG documents.

// Instance methods
// Inherits methods from its parent, Node.

// DocumentType.after()
// Inserts a set of Node or string objects in the children list of the object's parent, just after this node.

// DocumentType.before()
// Inserts a set of Node or string objects in the children list of the object's parent, just before this node.

// DocumentType.remove()
// Removes this object from its parent children list.

// DocumentType.replaceWith()
// Replaces the document type with a set of given nodes.




//what is node 
// In the context of web development, a node refers to an element in the Document Object Model (DOM). The DOM is a programming interface for HTML and XML documents that represents the page so that programs can change the document structure, style, and content. Nodes in the DOM can be elements, attributes, text, and other types of data.

// Types of Nodes:
// Element Node: Represents an HTML or XML element (e.g., <div>, <p>, etc.).
// Text Node: Represents the text content within an element or attribute.
// Attribute Node: Represents an attribute of an element.
// Comment Node: Represents comments in the HTML or XML.



let walker;
let root_nod=document.getRootNode(document.getElementsByClassName("list_of_num"))
debugger
let root_elem=root_nod.body;
//  root_elem=document.getRootNode(root_nod)
walker=document.createTreeWalker(root_elem,NodeFilter.SHOW_ATTRIBUTE, (nod)=>{

console.log(nod.firstChild);
return nod.firstChild
});

let curr_val;
while (walker.nextNode()) {
  curr_val=val
  console.log(val);
}
console.log(curr_val);


//own tree walker
// treeWalker.parentNode(): Moves to the parent node.
// treeWalker.firstChild(): Moves to the first child node.
// treeWalker.lastChild(): Moves to the last child node.
// treeWalker.previousSibling(): Moves to the previous sibling node.
// treeWalker.nextSibling(): Moves to the next sibling node.
// treeWalker.previousNode(): Moves to the previous node in the document order.
// treeWalker.nextNode(): Moves to the next node in the document order.

const treeWalker = document.createTreeWalker(
  document.querySelector(".list_of_num"),
  // NodeFilter.SHOW_TEXT
  NodeFilter.SHOW_ATTRIBUTE,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.nextNode();
  node.data  = node.data.toUpperCase();
    console.log(node)
}


//find id of element node 
debugger
const treeWalker2 = document.createTreeWalker(
  document.querySelector(".list_of_num"),
  // NodeFilter.SHOW_TEXT
  NodeFilter.SHOW_ELEMENT,
);

while (treeWalker2.firstChild()&&treeWalker2.lastChild()) {
  const node = treeWalker2.nextNode();
  // node.data  = node.data.toUpperCase();
    console.log(node.getAttribute("id"))
}


const treeWalker3 = document.createTreeWalker(
  document.querySelector(".list_of_num"),
  // NodeFilter.SHOW_TEXT
  NodeFilter.SHOW_ELEMENT,
);

while (treeWalker3.firstChild()&&treeWalker3.lastChild()) {
  const node = treeWalker3.currentNode;
  // node.data  = node.data.toUpperCase();
    console.log(node.getAttribute("class","id"))}

    // console.log(node.getAttribute("class"&&"id"))}  //op id =big_item_id 

    //op big_item_class



    let doc_val=document.querySelector("ul")
    let tree_Walker=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){

if(nod.childNodes[0]===doc_val.childNodes[0])
  {
    console.log(nod);
    return NodeFilter.FILTER_ACCEPT;
  }
return NodeFilter.FILTER_ACCEPT;
    }
  })


let currn_val;
while(currn_val=tree_Walker.nextNode())
  {
currn_val=tree_Walker.currentNode
console.log(currn_val);
currn_val=tree_Walker.nextNode()
console.log(currn_val);
currn_val=tree_Walker.nextSibling()
  }





  //no output  because return NodeFilter.FILTER_ACCEPT is comment means filter of showelementis not apply ;
let doc_val=document.querySelector("ul")
    let tree_Walker=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){

if(nod.childNodes[0]===doc_val.childNodes[0])
  {
    console.log(nod);
    return NodeFilter.FILTER_ACCEPT;
  }
// return NodeFilter.FILTER_ACCEPT;
    }
  })


let currn_val;
while(currn_val=tree_Walker.nextNode())
  {
currn_val=tree_Walker.currentNode
console.log(currn_val);
currn_val=tree_Walker.nextNode()
console.log(currn_val);
currn_val=tree_Walker.nextSibling() 
  }



  let tree1=document.createTreeWalker(document.querySelector("#big_item_id"),NodeFilter.SHOW_ELEMENT)


  let values
  while(values=tree1.nextNode())
    {
  values=tree1.currentNode.childNodes
  console.log(values)
    }


    //show all the child nodes of that nextnode or a current element


    let tree1=document.createTreeWalker(document.querySelector("#big_item_id"),NodeFilter.SHOW_ELEMENT)


let values
while(values=tree1.nextNode().childNodes)
  {
// values=tree1.currentNode.childNodes
console.log(values)
  }






//     let tree1=document.createTreeWalker(document.querySelector("#big_item_id"),NodeFilter.SHOW_ELEMENT)

// let values
// while(values=tree1.parentNode)  //never use infinite loop because 
//   {
// // values=tree1.childNodes
// console.log(values)
//   }



let tree1=document.createTreeWalker(document.querySelector("#big_item_id"),NodeFilter.SHOW_ATTRIBUTE)
let values
while(values=tree1.currentNode)  //never use infinite loop because 
  {
values=tree1.firstChild.getAttribute("id")
console.log(values)
values=tree1.childrens.getAttribute("id")
console.log(values)
  }


  let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ATTRIBUTE)
let values
while(values=tree1.nextNode())  //never use infinite loop because 
  {
// values=tree1.currentNode.getAttribute("class")
console.log(values)
values=tree1.firstChild
console.log(values)
  }






// document.createRange({Range:}




let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ATTRIBUTE)
let values
while(values=tree1.currentNode)  //never use infinite loop because 
  {
// values=tree1.nextSibling.getAttribute("id")
console.log(values)
values=values.childNodes.nodeValue
console.log(values)
values=values.childNodes.nodeName

  }







  let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ATTRIBUTE)
  let values
  while(values=tree1.nextNode())   
    {
  // values=tree1.nextSibling.getAttribute("id")
  console.log(values)
  values=values.childNodes
  console.log(values)
  values=values.nodeName
  
    }

//undefined


let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){return NodeFilter.FILTER_ACCEPT}})

let values=tree1.nextNode()
  // while(values=tree1.nextNode())   
  //   {
  
  // console.log(values)
  
  
  //   }




//imp++++++++++++++++++++++++++++++++++++++
// let val2=tree1.currentNode.children[0].children[0].children[0].getAttributeNode("id")

// let v1=document.querySelector("li#itemlist1")
// v1.getAttributeNode("style")
// v1.nodeName

// v1.setAttribute("id","smookey")
// v1.setAttribute("id2","new")  //new nodename with there values


//create and set new attribute through  nodes
// let att=document.createAttribute("own_id")
// att.value="custom_value"
// let own_att=document.querySelector("li#itemlist1")
// own_att.setAttributeNode(att)
// own_att.getAttributeNames()


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){return NodeFilter.FILTER_ACCEPT}})


let values=tree1.nextNode()


// values.firstChild  //there is also include a node values involved in it

// values.firstElementChild  // there is only elements can be included not text nodes 

// values.childElementCount  // there is only element is counted no of child elements in it

// values.childNodes    //there is  element and nodes is counted no of child elementsand nodes in it









/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                    investigation on treewalker  or nodeiterators

// note what property or method provide inside a treewalker is quite diff from global and but inside value argument is we will apply our property or method provided globallly 

// ex nextnode() , currentnode ,firstChild() ,lastChild()

let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){
  console.log(nod.firstElementChild)
  console.log(nod.currentNode)
  return NodeFilter.FILTER_ACCEPT}})


// let values=tree1.nextNode()
let values=tree1.currentNode
//op is ul.list_of_num

let values=tree1.nextNode()
// op is font because this next element inside it



//diff 1
debugger
let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){
    console.log(nod.firstElementChild)
    console.log(nod.currentNode)
    console.log(nod.getAttributeNames())
    return NodeFilter.FILTER_ACCEPT}})


// let values=tree1.nextNode()
let values=tree1.currentNode
while (values=tree1.nextNode()) 
{
    console.log(values)
}
// this will give 



//diff 2
debugger
let tree1=document.createTreeWalker(document.querySelector("ul"),NodeFilter.SHOW_ELEMENT,{acceptNode(nod){
    console.log(nod.firstElementChild)
    console.log(nod.currentNode)
    console.log(nod.getAttributeNames())
    return NodeFilter.FILTER_ACCEPT}})


// let values=tree1.nextNode()
let values=tree1.currentNode
let ele_1=tree1.currentNode
console.log(ele_1.getAttributeNames())
console.log( ele_1.firstChild);
console.log( ele_1.lastChild);

let ele_2=tree1.firstChild()
console.log(ele_2)
console.log(ele_2.firstChild)
console.log(ele_2.lastChild)

let ele_3=tree1.lastChild()
console.log(ele_3)
console.log(ele_3.firstChild)
console.log(ele_3.lastChild)
// console.log(ele_3.firstChild.getAttributeNames())

while (values=tree1.nextNode()) 
{
    console.log(values)
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                 investigation on fragment

let frag_ele=document.createDocumentFragment()

let array_1 =["a","e","i","o","u"]

// for (let i = 0; i < array_1 .length; i++) {
  // console.log(array_1[i]);
  
// frag_ele.append(array_1)  //1 way

// frag_ele.append(array_1[i])  //2 way

// }

//1 way
// console.log(frag_ele); 
// frag_ele.textContent   //'a,e,i,o,ua,e,i,o,ua,e,i,o,ua,e,i,o,ua,e,i,o,u'


//2 way
// console.log(frag_ele);
// frag_ele.textContent      //'aeiou'



// ❗ inner content in new doc ❗

//  frag_ele=document.createDocumentFragment()
// let text_cont=document.createTextNode("my name is smookey in node values")
// frag_ele.appendChild(text_cont)
// console.log(frag_ele.textContent); // my name is smookey in node values




// ❗ new element inside that ❗

// let frag_ele=document.createDocumentFragment()
// let new_ele=document.innerHTML="<h1 id='firsth1' style='color:green'> this  is my h1 tag created by inner_html  for fragment element </h1> "
// frag_ele.append(new_ele)   
//op is not in the form of element but in text 

//above is fail

// let frag_ele=document.createDocumentFragment()
// let new_ele= document.createElement("h1")
// new_ele.setAttribute("id","firsth1")
// new_ele.setAttribute("style","color:green")
// new_ele.innerText="this  is my h1 for fragment element "
// frag_ele.append(new_ele)   
// console.log(frag_ele.firstElementChild);
// console.log(frag_ele.firstElementChild.getAttributeNames());  //['id', 'style']
// console.log(frag_ele.firstElementChild.getAttributeNode("style"));
//  //style='color:green'

// document.body.appendChild(frag_ele) //op is whole text with there attributes and there style and h1 property also in it is applied on it





