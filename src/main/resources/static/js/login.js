<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
// Toggle password visibility
const togglePasswordBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordInput');

if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        const icon = this.querySelector('i');
        icon.className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
    });
}

// Handle form submission
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (!email || !password) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        console.log('Login attempt:', {email, password});
        alert('Đăng nhập thành công! (Demo)');

        loginForm.reset();
    });
}