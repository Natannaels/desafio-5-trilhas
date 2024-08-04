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
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
        if (response.ok) {
            // Adicionar lógica para redirecionar ou limpar o formulário, se necessário
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
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            // Redirecionar ou armazenar o token
            localStorage.setItem('token', result.token);
            // Adicione redirecionamento ou ações após login bem-sucedido
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Erro ao fazer login');
    }
});
