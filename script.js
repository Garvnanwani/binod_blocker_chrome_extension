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
