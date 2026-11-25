# Website OroCha

## Menjalankan di VS Code (Windows)

1. Ekstrak ZIP ini.
2. Buka folder `project` di VS Code (folder yang berisi `package.json`).
3. Buka Terminal > New Terminal.
4. Jalankan:

```powershell
npm.cmd install
```

5. Setelah instalasi selesai, jalankan:

```powershell
npm.cmd run dev
```

6. Buka alamat lokal yang ditampilkan Vite (biasanya http://localhost:5173).

## Jika instalasi sebelumnya rusak

Hapus folder `node_modules` dan file `package-lock.json` di folder `project`, lalu ulangi `npm.cmd install`.

## Build untuk memeriksa project

```powershell
npm.cmd run build
```
