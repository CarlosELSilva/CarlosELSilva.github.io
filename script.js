document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento de clique a todos os links de download
    var downloadLinks = document.querySelectorAll('.download-link');
    downloadLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Evita o comportamento padrão de clicar em um link
            event.preventDefault();
            // Obtém o URL do arquivo a ser baixado
            var fileUrl = link.getAttribute('href');
            // Cria um elemento <a> temporário para iniciar o download
            var tempLink = document.createElement('a');
            tempLink.href = fileUrl;
            // Define o atributo 'download' para o nome do arquivo
            tempLink.setAttribute('download', '');
            // Adiciona o elemento temporário ao corpo do documento
            document.body.appendChild(tempLink);
            // Simula um clique no link temporário para iniciar o download
            tempLink.click();
            // Remove o elemento temporário do corpo do documento
            document.body.removeChild(tempLink);
        });
    });
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});