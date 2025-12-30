document.addEventListener('DOMContentLoaded', function() {
    const sendButtons = document.querySelectorAll('.message-box .btn');
    sendButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const textarea = this.previousElementSibling;  // Assumes textarea is right before the button
            const message = textarea.value.trim();
            
            if (message) {
                const whatsappNumber = '2348130261674';
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('New Order/Message: ' + message)}`;
                window.open(whatsappURL, '_blank');
                textarea.value = '';  // Clear textarea
            } else {
                alert('Please enter a message first.');
            }
        });
    });
});
