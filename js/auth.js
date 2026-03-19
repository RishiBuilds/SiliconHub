


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

      if (username === "admin" && password === "admin") {
        message.textContent = "Login Successful!";
        message.style.color = "#4CAF50";
        setTimeout(function () {
          window.location.href = "index.html";
        }, 1500);
      } else {
        message.textContent = "Invalid Username or Password!";
        message.style.color = "red";
        generateCaptcha();
        document.getElementById("captchaInput").value = "";
      }
    });
  }
});
