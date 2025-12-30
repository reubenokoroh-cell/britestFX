// Send Message Form - WhatsApp Integration
document.addEventListener('DOMContentLoaded', function() {
    const messageForms = document.querySelectorAll('.message-box form');
    messageForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            const message = textarea.value.trim();
            
            if (message) {
                const whatsappNumber = '2348130261674';
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('New Order/Message: ' + message)}`;
                window.open(whatsappURL, '_blank');
                textarea.value = ''; // Clear form
            } else {
                alert('Please enter a message first.');
            }
        });
    });
});