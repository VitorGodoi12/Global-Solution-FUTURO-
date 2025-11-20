// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contato');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Limpar mensagens de erro anteriores
      limparErros();
      
      // Validar campos
      let valido = true;
      
      // Validar nome
      const nome = document.getElementById('nome');
      if (!nome.value.trim()) {
        mostrarErro('erro-nome', 'Por favor, preencha seu nome completo.');
        valido = false;
      } else if (nome.value.trim().length < 3) {
        mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
        valido = false;
      }
      
      // Validar email
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        mostrarErro('erro-email', 'Por favor, preencha seu e-mail.');
        valido = false;
      } else if (!emailRegex.test(email.value.trim())) {
        mostrarErro('erro-email', 'Por favor, insira um e-mail válido.');
        valido = false;
      }
      
      // Validar assunto
      const assunto = document.getElementById('assunto');
      if (!assunto.value) {
        mostrarErro('erro-assunto', 'Por favor, selecione um assunto.');
        valido = false;
      }
      
      // Validar mensagem
      const mensagem = document.getElementById('mensagem');
      if (!mensagem.value.trim()) {
        mostrarErro('erro-mensagem', 'Por favor, escreva sua mensagem.');
        valido = false;
      } else if (mensagem.value.trim().length < 10) {
        mostrarErro('erro-mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
        valido = false;
      }
      
      // Se tudo estiver válido, mostrar mensagem de sucesso
      if (valido) {
        const mensagemSucesso = document.getElementById('mensagem-sucesso');
        if (mensagemSucesso) {
          mensagemSucesso.style.display = 'block';
          form.reset();
          
          // Rolar para a mensagem de sucesso
          mensagemSucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Ocultar mensagem após 5 segundos
          setTimeout(function() {
            mensagemSucesso.style.display = 'none';
          }, 5000);
        }
      }
    });
    
    // Limpar erro ao digitar
    const campos = ['nome', 'email', 'telefone', 'assunto', 'mensagem'];
    campos.forEach(campo => {
      const elemento = document.getElementById(campo);
      if (elemento) {
        elemento.addEventListener('input', function() {
          const erroElemento = document.getElementById('erro-' + campo);
          if (erroElemento) {
            erroElemento.textContent = '';
            erroElemento.classList.remove('ativo');
          }
        });
      }
    });
  }
  
  function mostrarErro(idErro, mensagem) {
    const erroElemento = document.getElementById(idErro);
    if (erroElemento) {
      erroElemento.textContent = mensagem;
      erroElemento.classList.add('ativo');
    }
  }
  
  function limparErros() {
    const erros = document.querySelectorAll('[id^="erro-"]');
    erros.forEach(erro => {
      erro.textContent = '';
      erro.classList.remove('ativo');
    });
  }
});
