function start()
{
    let startDiv = document.getElementsByClassName('welcome-container');
    if (startDiv.style.display === 'none' || startDiv.style.display === '') {
        startDiv.style.display = 'block';
    } else {
        startDiv.style.display = 'none';
    }
}