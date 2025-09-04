# Cloudflare Pages Environment Variables Kurulumu

## 🚀 Keystatic'in GitHub Storage ile Production'da Çalışması İçin Gerekli Ayarlar

### 0. GitHub App Kurulumu (Gerekli)
1. GitHub'da https://github.com/settings/apps adresine gidin
2. Mevcut GitHub App'inizi bulun (Client ID: Ov23liN27y5X4zgiO19x)
3. **Client Secret**'i kopyalayın (aşağıda kullanacaksınız)
4. **Repository access** ayarlarında `denizomer1/techoxium` repo'suna erişim olduğunu kontrol edin

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

#### Variable 1: KEYSTATIC_GITHUB_CLIENT_ID
```
Name: KEYSTATIC_GITHUB_CLIENT_ID
Value: Ov23liN27y5X4zgiO19x
Environment: Production
```

#### Variable 2: KEYSTATIC_GITHUB_CLIENT_SECRET
```
Name: KEYSTATIC_GITHUB_CLIENT_SECRET
Value: 51322a8dc0ef1aa0377559442919e24d071ceef5
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
3. Deploy tamamlandığında https://techoxium.com/keystatic adresini test edin

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
- Ana site: https://techoxium.com
- Keystatic Admin: https://techoxium.com/keystatic
- ads.txt: https://techoxium.com/ads.txt

## 📞 İletişim
Sorun devam ederse:
1. Cloudflare Pages build log'larını kontrol edin
2. Browser developer tools'da console errors bakın
3. Keystatic local'da çalışıyorsa problem environment variables'da

---
**Not**: Bu ayarlar yapıldıktan sonra Keystatic production'da local storage ile çalışacak ve authentication gerektirmeyecek.
