function limiteMax() {

    const countElement = document.querySelector('.count');
    const textArea = document.getElementById('tweet-text');
    const button = document.getElementById('button-send');

    document.addEventListener('keyup', function() {
        
        const maxChar = 140;
        const lenght = textArea.value.length;

        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';

        if (lenght > 0 && lenght < 100) {
            countElement.innerHTML = '<span>' + (maxChar - lenght) + '</span>';
            button.disabled = false;
        }else if(lenght >= 100 && lenght <= 140) {
            countElement.innerHTML = '<span class="alerrt">' + (maxChar - lenght)  + '</span>';
            button.disabled = false;
        } else if(lenght > 140) {
            countElement.innerHTML = '<span class="maxAlert">' + (maxChar - lenght) + '</span>';
            button.disabled = true;
        }else {
            countElement.innerHTML = '<span> </span>';
        }
    }) 
    
}

limiteMax();