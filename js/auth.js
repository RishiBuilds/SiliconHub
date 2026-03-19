


var captchaText = "";

function generateCaptcha() {
  var canvas = document.getElementById("captchaCanvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  captchaText = "";
  for (var i = 0; i < 5; i++) {
    captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  ctx.font = "bold 22px Arial";
  ctx.fillStyle = "#1a1a2e";
  ctx.fillText(captchaText, 20, 25);

  
  for (var j = 0; j < 4; j++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
  }
}


document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("authToken")) {
    window.location.href = "index.html";
    return;
  }

  generateCaptcha();

  var form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var captchaInput = document.getElementById("captchaInput").value;
      var message = document.getElementById("message");

      if (captchaInput !== captchaText) {
        message.textContent = "Invalid CAPTCHA! Try again.";
        message.style.color = "red";
        generateCaptcha();
        document.getElementById("captchaInput").value = "";
        return;
      }

      message.textContent = "Authenticating...";
      message.style.color = "#FF8C00";
      
      const btn = form.querySelector('button[type="submit"]') || form.querySelector('input[type="submit"]') || form.querySelector('.lbutton');
      if (btn) btn.disabled = true;

      function mockLoginAPI(user, pass) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (user === "admin" && pass === "admin") {
              resolve({ token: "mock_jwt_token_123456789", user: "Admin" });
            } else {
              reject(new Error("Invalid Credentials"));
            }
          }, 800);
        });
      }

      mockLoginAPI(username, password)
        .then((response) => {
          message.textContent = "Login Successful! Redirecting...";
          message.style.color = "#4CAF50";
          sessionStorage.setItem("authToken", response.token);
          sessionStorage.setItem("userName", response.user);
          setTimeout(function () {
            window.location.href = "index.html";
          }, 1000);
        })
        .catch((error) => {
          message.textContent = "Invalid Username or Password!";
          message.style.color = "red";
          generateCaptcha();
          document.getElementById("captchaInput").value = "";
          if (btn) btn.disabled = false;
        });
    });
  }
});
