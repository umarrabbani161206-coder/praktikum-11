function login() {
    const userBenar = "umar2006";
    const passBenar = "bismillah";

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === userBenar && password === passBenar) {
        alert("Login Berhasil!");
        window.location.href = "sukses.html";
        return true;
    } else {
        alert("Login Gagal! Username atau Password salah.");
        return false;
    }
}
