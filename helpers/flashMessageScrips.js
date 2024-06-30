module.exports.flashMessageScript = function () {
    return `
        <style>
            .flash-message {
                background-color: #d4edda;
                color: #155724;
                padding: 10px;
                border: 1px solid #c3e6cb;
                border-radius: 5px;
                margin: 10px 0;
            }
        </style>
        <script>
            // JavaScript para ocultar a mensagem após 3 segundos
            setTimeout(() => {
                const flashMessage = document.getElementById('flash-message');
                if (flashMessage) {
                    flashMessage.style.display = 'none';
                }
            }, 3000);
        </script>
    `;
};