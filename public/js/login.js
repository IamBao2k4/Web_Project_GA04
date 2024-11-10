const apiUsers = "https://web-project-ga04-vercel.vercel.app/data/users"; // URL của API mà bạn đã tạo trong app.js
let users;

const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-login");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const login_btn = document.getElementById("signin-btn");
const signup_btn = document.getElementById("signup-btn");

login_btn.addEventListener("click", Login);
signup_btn.addEventListener("click", Signup);

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
  window.location.href = "/";
});

// Show or hide signup form
signupLoginLink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
  });
});

async function loadUsers() {
  const response = await fetch(apiUsers);
  if (!response.ok) {
    throw new Error('Failed to fetch data from API');
  }
  const data = await response.json();
  return data.users;
}

function Signup(event) {
  event.preventDefault(); // Ngăn chặn hành vi submit mặc định

  // Lấy giá trị từ form
  const username = document.querySelector('input[id="email-signup"]').value;
  const password = document.querySelector('input[id="pass-signup"]').value;

  // check if user already exists
  fetch(apiUsers)
    .then(response => response.json())
    .then(data => {
      const user = data.find(user => user.username === username);
      if (user) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
      }
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    });

  fetch(apiUsers, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      alert("Đăng ký thành công!");
      window.location.href = "/";
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    });
}

function Login(event) {
    event.preventDefault(); // Ngăn chặn hành vi submit mặc định
  
    // Lấy giá trị từ form
    const username = document.querySelector('input[id="email"]').value;
    const password = document.querySelector('input[id="pass"]').value;
  
    // Kiểm tra thông tin đăng nhập (ví dụ đơn giản)
    fetch(apiUsers)
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.username === username && user.password === password);
        if (user) {
          alert("Đăng nhập thành công!");
          window.location.href = "/";
        } else {
          alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }
