
function validateForm(theform){
    return (isNotEmpty(assetName,"select asset name",assetNameErr) &&
            isNotEmpty(assetType,"select asset type",assetTypeErr) &&
            isOn(classType,"select class of asset",classTypeErr) 
            );

}



function isNotEmpty(inpEle,errMsg,outEle){
    console.log(inpEle.value);
    isValid = (inpEle.value.trim() !== "");
    postValidation(isValid,inpEle,errMsg,outEle);
    return isValid;
}

function isOn(inpEle,errMsg,outEle){
    console.log(inpEle.value);
    isValid = (inpEle.value !== undefined);
    postValidation(isValid,inpEle,errMsg,outEle);
    return isValid;
}


function postValidation(isValid,inpEle,errMsg,outEle){
    if(!isValid){
        if(outEle !== undefined && outEle !== null && errMsg !== undefined && errMsg !== null){
            outEle.innerHTML = errMsg;
        }
    }
    else{
        if(outEle !== undefined && outEle !== null && errMsg !== undefined && errMsg !== null){
            outEle.innerHTML = "";
        }
    }
}