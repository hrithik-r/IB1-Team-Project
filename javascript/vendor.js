
function validateForm(){
        return (isNotEmpty(vendorName,"select vendor name",nameErr) && 
                // isOn(vendorType,"select vendor type",vendorTypeErr) &&
                isNotEmpty(assetType,"select asset type",assetTypeErr) &&
                isNotEmpty(validFrom,"enter the valid from date",validFromErr) &&
                isNotEmpty(validTill,"enter valid till date",validTillErr) &&
                isNotEmpty(address,"enter address ",addressErr)
                );
    
}



function isNotEmpty(inpEle,errMsg,outEle){
    console.log(inpEle.value);
    isValid = (inpEle.value.trim() !== "");
    postValidation(isValid,inpEle,errMsg,outEle);
    return isValid;
}

function isOn(inpEle,errMsg,outEle){
    isValid = (inpEle.value !== On);
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