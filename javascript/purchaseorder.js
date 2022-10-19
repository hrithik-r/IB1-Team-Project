// Run init after the page is loaded
window.onload=init;

// Form initialization
function init(){
    // Bind on onsubmit event handler
    console.log("checking pross initiated!");
    document.getElementById("purchaseform").onsubmit = this.validateForm;
}

// The onsubmit event handler to validate the input field
function validateForm(theForm){
    with(theForm){
        return isNotEmpty(pd_order_no,"Please a valid order number",order_no_err)
        && checkOrderNoLen(pd_order_no,"Order number should be of 4 digits",order_no_err)
        // && isNumeric(pd_order_no,"Order should be numeric",order_no_err)
        && isValidSelection(pd_asset_type,"Please make a valid selection",pd_asset_err)
        && isValidSelection(pd_vendor_name,"please make a valid selection",pd_vendor_err)
        && isValidSelection(pd_order_status,"please make a valid selection",pd_order_err)
    }
}

// Helper function
function postValidation(isValid,errMsg,errElm,inputElm){
    // Not valid Shiw errMsg on errElm, if provided.
    // alert("postvalidation called")
    if(!isValid){
        if (errElm !== undefined && errElm !==null && errMsg !== undefined && errMsg!==null){
            errElm.innerHTML = errMsg;
        }
    }else{
        if (errElm !== undefined && errElm !==null && errMsg !== undefined && errMsg!==null ){
            errElm.innerHTML = "";
        }
    
    }
}
// checking for the order no length
function isNotEmpty(inputTxt,errMsg,errElm){
    var isValid = (inputTxt.value.trim().length !==0);
    postValidation(isValid,errMsg,errElm,inputTxt);
    return isValid;
}
// checking for the order no length
function checkOrderNoLen(inputTxt,errMsg,errElm){
    var isValid = (inputTxt.value.trim().length == 4);
    postValidation(isValid,errMsg,errElm,inputTxt);
    return isValid;
}
// checking for numneric value
function isNumeric(inputText, errMsg, errElm) {
    var numericExpression = /^[0-9]+$/;
    var isValid = (inputText.value.match(numericExpression))
    postValidation(!isValid,errMsg,errElm,inputText);
    return isValid;
}

function isValidSelection(inputTxt,errMsg,errElm){
    var isValid = (inputTxt.value.trim() !=="select")
    postValidation(isValid,errMsg,errElm,inputTxt);
    return isValid;
}