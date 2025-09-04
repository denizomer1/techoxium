# Cloudflare Pages Environment Variables Kurulumu

## 🚀 Keystatic'in GitHub Storage ile Production'da Çalışması İçin Gerekli Ayarlar

### 0. GitHub App Kurulumu (Gerekli)
1. GitHub'da https://github.com/settings/apps adresine gidin
2. Mevcut GitHub App'inizi bulun (Client ID: Iv23li6qdQDGA7F7SMft)
3. **Authorization callback URL** bölümünde şu URL'leri ekleyin:
   ```
   https://techoxium.denizomer10.workers.dev/keystatic/auth/callback
   http://127.0.0.1:4321/keystatic/auth/callback
   ```
4. **Repository permissions** ayarlarında `denizomer1/techoxium` repo'suna erişim olduğunu kontrol edin
5. **Repository access** bölümünde "Selected repositories" seçip `techoxium` repo'sunu ekleyin

### 1. Cloudflare Dashboard'a Giriş
1. https://dash.cloudflare.com/ adresine gidin
2. **Pages** sekmesini seçin
3. **techoxium** projenizi bulun ve tıklayın

### 2. Environment Variables Ayarları
1. **Settings** tabına geçin
2. **Environment variables** bölümünü bulun
3. **Production** environment'ını seçin
4. **Add variable** butonuna tıklayın

### 3. Gerekli Variables'ları Ekleyin

#### Variable 1: GITHUB_CLIENT_ID
```
Name: GITHUB_CLIENT_ID
Value: Iv23li6qdQDGA7F7SMft
Environment: Production
```

#### Variable 2: GITHUB_CLIENT_SECRET
```
Name: GITHUB_CLIENT_SECRET
Value: 31f7dc23f86146c38ac17f12501922aafe9470ad
Environment: Production
```

#### Variable 3: KEYSTATIC_SECRET
```
Name: KEYSTATIC_SECRET
Value: 08311b15eb98fdd93a85b1817ba69b86b1a26ba9ac4569417ac6a8ba8c5047ae
Environment: Production
```

#### Variable 4: SESSION_SECRET  
```
Name: SESSION_SECRET
Value: facec996e36f8aeb8508378bf16259d3af078a391e387db3f04d94466b844999
Environment: Production
```

### 4. KV Namespace Binding Kontrolü
1. **Functions** tabına geçin
2. **Compatibility flags** bölümünde `nodejs_compat` olduğunu kontrol edin
3. **KV namespace bindings** bölümünde:
   - **Variable name**: `SESSION`
   - **KV namespace**: Mevcut KV namespace'inizi seçin (317b48de29d246528905c76e9592a892)

### 5. Deploy ve Test
1. Variables eklendikten sonra **Save** butonuna tıklayın
2. Yeni bir deploy otomatik olarak başlayacak
3. Deploy tamamlandığında https://techoxium.denizomer10.workers.dev/keystatic adresini test edin

## 🔧 Sorun Giderme

### Keystatic Hala Çalışmıyorsa:
1. **Environment Variables** kontrol edin - doğru yazıldığından emin olun
2. **Build logs** kontrol edin - error varsa göreceksiniz
3. **Function logs** kontrol edin - runtime errors için
4. **Browser console** kontrol edin - JavaScript errors için

### Yaygın Hatalar:
- Environment variables büyük/küçük harf duyarlı
- KV binding ismi tam olarak `SESSION` olmalı
- nodejs_compat flag'i aktif olmalı

### Test URL'leri:
- Ana site: https://techoxium.denizomer10.workers.dev
- Keystatic Admin: https://techoxium.denizomer10.workers.dev/keystatic
- ads.txt: https://techoxium.denizomer10.workers.dev/ads.txt

## 📞 İletişim
Sorun devam ederse:
1. Cloudflare Pages build log'larını kontrol edin
2. Browser developer tools'da console errors bakın
3. Keystatic local'da çalışıyorsa problem environment variables'da

---
**Not**: Bu ayarlar yapıldıktan sonra Keystatic production'da local storage ile çalışacak ve authentication gerektirmeyecek.
