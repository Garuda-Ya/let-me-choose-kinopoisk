//const skipButtonsSelector = document.querySelectorAll(`[data-tid="SkipButtonGroup"]`)

//alert("Hahaha")
setInterval(tryGetElement, 1000) 

function tryGetElement(){
    console.log("Trying to get ButtonGroupSelector...")
    let htmlSkipButtonGroupSelector = document.getElementsByClassName(`styles_skipButtonGroup__fuWnu`)
    if(htmlSkipButtonGroupSelector.length>0){
        let skipButtonGroupSelector = htmlSkipButtonGroupSelector[0]
        console.log(skipButtonGroupSelector)
        console.log(skipButtonGroupSelector.children)
        let watchButton = skipButtonGroupSelector.children[0]
        let skipButton = skipButtonGroupSelector.children[1]
        skipButton.click();
        console.log("Found: ButtonGroupSelector")
    }
    else{
        console.log("NotFound: ButtonGroupSelector")
    }
    
}