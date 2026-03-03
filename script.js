const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const inviteInput = document.getElementById("inviteCode");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

// 🔁 自動ログイン
window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("user");

if (savedUser && !window.location.href.includes("login.html?logout")) {
  window.location.href = "home.html";
}
});

loginBtn.addEventListener("click", () => {
  const nickname = nicknameInput.value;
  const password = passwordInput.value;
  const inviteCode = inviteInput.value;

  if (nickname === "" || password === "") {
    alert("ニックネームとパスワードを入力してね");
    return;
  }

  if (inviteCode !== "C-2026") {
    alert("招待コードが違います");
    return;
  }

  // ログイン情報を保存（自動ログイン用）
  localStorage.setItem("user", nickname);

  window.location.href = "home.html";
});

registerBtn.addEventListener("click", () => {
  const nickname = nicknameInput.value;
  const password = passwordInput.value;
  const inviteCode = inviteInput.value;

  if (nickname === "" || password === "") {
    alert("ニックネームとパスワードを入力してね");
    return;
  }

  if (inviteCode !== "C-2026") {
    alert("招待コードが違います");
    return;
  }

  // 新規登録フラグ
  localStorage.setItem("isNewUser", "true");

  // 自動ログイン保存
  localStorage.setItem("user", nickname);

  window.location.href = "home.html";
});
