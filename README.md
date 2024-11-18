# Tugas9-Pertemuan10
![image](https://github.com/user-attachments/assets/13f13a8e-97b2-4182-81b4-8dab3e88dcc4)
Halaman LoginPage memungkinkan pengguna untuk melakukan autentikasi menggunakan akun Google. Saat tombol "Sign In with Google" diklik, fungsi loginWithGoogle dari store Pinia dipanggil. Prosesnya meliputi inisialisasi GoogleAuth, pengguna melakukan login melalui Google, dan token autentikasi diperoleh. Token ini digunakan untuk membuat credential Firebase yang valid, memungkinkan pengguna untuk login ke Firebase Authentication. Setelah berhasil login, data pengguna disimpan di state aplikasi, dan pengguna diarahkan ke halaman Home. Jika terjadi error selama login, pesan kesalahan ditampilkan menggunakan Ionic alertController.

![image](https://github.com/user-attachments/assets/e77246c8-2e39-43a3-a22b-51a3194300b5)
Setelah pengguna berhasil login, mereka diarahkan ke halaman Home, yang berfungsi sebagai halaman utama aplikasi. Halaman ini menampilkan header dengan judul "Home" menggunakan Ionic Toolbar, memberikan kesan navigasi yang jelas dan terstruktur. Di bagian konten, terdapat komponen TabsMenu yang memungkinkan pengguna untuk menjelajahi fitur-fitur aplikasi melalui navigasi berbasis tab.
![image](https://github.com/user-attachments/assets/4d18dd3c-232b-4687-a191-85fc345713ec)

![image](https://github.com/user-attachments/assets/ac0e2c5f-f769-40e5-b5b1-5c84a123c3ed)


