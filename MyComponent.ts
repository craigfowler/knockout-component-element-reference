export class MyComponent {
  constructor(element : Node) {
    if(element instanceof Comment)
      console.log(element.nextSibling);
    else
      console.log(element.firstChild);
  }
}