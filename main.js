const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


document.querySelectorAll('.prvent-char').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, ''); // only letters & spaces
  });
});

document.querySelectorAll('.prevent-number').forEach(input => {
	input.addEventListener('input', function () {
		this.value = this.value.replace(/[^0-9]/g, '');
		if (this.value.length > 10) this.value = this.value.slice(0, 10);
	})
})


document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (e) {
    const passwordInput = this.querySelector('input[type="password"]');
    if (passwordInput) {
      const password = passwordInput.value.trim();
      const letterCount = (password.match(/[a-zA-Z]/g) || []).length;
      const digitCount = (password.match(/\d/g) || []).length;

      // Check min and max limits
      if (
        letterCount < 3 || digitCount < 4 ||   // too few letters/digits
        letterCount > 6 || digitCount > 7      // too many letters/digits
      ) {
        e.preventDefault(); // stop form submission
        alert("❌ Password must contain 3–6 letters and 4–7 digits.");
        return false;
      }

      // Optional: check for invalid characters
      if (/[^a-zA-Z0-9]/.test(password)) {
        e.preventDefault();
        alert("❌ Password can only contain letters and digits (no symbols).");
        return false;
      }
    }
  });
});