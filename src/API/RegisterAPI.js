const REGISTER_KEY = "register_data";



export function postRegister(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
    // STEP 1: GET our TEXT data from "localStorage".
    let textData = localStorage.getItem(REGISTER_KEY);


    // STEP 2: If TEXT data is NULL then we need to create an empty array and
    //         set the "localStorage" with our empty array.
    if (textData === null ) {
      const emptyArray = [];
      textData = JSON.stringify(emptyArray);
      localStorage.setItem(REGISTER_KEY, textData);
    }

        
    // STEP 3: We need to convert the TEXT to ARRAY.
    const arrayData = JSON.parse(textData);


    // STEP 4: Add the user submitted data to our ARRAY.
    arrayData.push(postData);


    // STEP 5: We needto convert our ARRAY to TEXT.
    textData = JSON.stringify(arrayData);


    // STEP 6: We need to SAVE our TEXT to the "localStorage".
    localStorage.setItem(REGISTER_KEY, textData);


    // STEP 7: Call our "success callback function".
    const responseData = {
      message:"successful"
    }

    onSuccessCallbackFunc(responseData);



}
