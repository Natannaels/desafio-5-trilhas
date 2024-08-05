const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerForm = document.querySelector('.sign-up form');
const loginForm = document.querySelector('.sign-in form');

// Mostrar a seção de registro e esconder a de login
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Mostrar a seção de login e esconder a de registro
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Registro de novo usuário
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const data = {
        nome: formData.get('Nome'),
        email: formData.get('Email'),
        password: formData.get('Senha')
    };

    try {
        const response = await fetch('https://desafio-5-trilhas.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
        if (response.ok) {
            registerForm.reset();
        }
    } catch (error) {
        alert('Erro ao registrar usuário');
    }
});

// Login do usuário
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const data = {
        email: formData.get('Email'),
        password: formData.get('Senha')
    };

    try {
        const response = await fetch('https://desafio-5-trilhas.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            //alert(result.message);
            // Armazenar o token no localStorage
            localStorage.setItem('token', result.token);
            // Redirecionar para a página inicial
            window.location.href = '/frontend/tela inicial/tela_inicial.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Erro ao fazer login');
    }
});
