let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 2){
        counter = 1;
    }
}, 5000); // Change image every 5 seconds
