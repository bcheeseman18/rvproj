window.addEventListener('load', function () {

    let likes = 0; 
    // initial value

    let likeBtn = document.querySelector('#likeBtn'); 
    //query select button to make it functional

    likeBtn.addEventListener('click', function () {
        //create event listener when button is clicked that increments by 1
        likes = likes + 1;  

        document.querySelector('#number').innerHTML = likes; 
        // displays likes 
    });
});  
