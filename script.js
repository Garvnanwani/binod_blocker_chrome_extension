// function replaceText(element) {
//   if (element.hasChildNodes()) {
//     element.childNodes.forEach(replaceText)
//   } else if (element.nodeType === Text.TEXT_NODE) {
//     if (element.textContent.match(/\b(?:Binod|BINOD|binod)\b/gi)) {
//     //   const newElement = document.createElement('span')
//     //   newElement.innerHTML = element.textContent.replace(/(Binod)/gi, '<span>$1</span>')
//     //   element.replaceWith(newElement)
//         element.parentElement.remove()
// }
//   }
// }

// replaceText(document)

function BinodRemover() {
    
    let elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];

            if (node.nodeType === 3) {
                let text = node.nodeValue;
                let replaceText = text.replace(/\b(?:Binod|BINOD|binod|#Binod|Binod?|binod?|BINOD?|#BINOD|#binod)\b/gi, '')
                
                if (replaceText !== text) {
                    element.replaceChild(document.createTextNode(replaceText), node)
                }
            }
        }

}
}

BinodRemover()

let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop == 0){
    BinodRemover()
  }
  if(document.documentElement.scrollTop == limitBottom){
    BinodRemover()
}
})