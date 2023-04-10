/*
The document.getElementsByTagName method returns all child elements with a
given tag name.

Implement your own version of this as a function that takes
a node and a string (the tag name) as arguments and returns an array
containing all descendant element nodes with the given tag name.
*/

function myGetElementsByTagName(node, tagName) {
  return Array.from(node.querySelectorAll(tagName));
}

console.log(myGetElementsByTagName(document.querySelector('table'), 'td'));
