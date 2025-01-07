let sendMessage = document.querySelector("#Send-Message");


function toggleText() {
    const moreText = document.querySelector('.more-text');
    const button = document.querySelector('.btn');

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline'; // Show the text
        button.textContent = 'Read more'; // Change button text
    } else {
        moreText.style.display = 'none'; // Hide the text
        button.textContent = 'Read less'; // Revert button text
    }
}

sendMessage.addEventListener ("click", () => {
    alert("Your response is submitted")
})








