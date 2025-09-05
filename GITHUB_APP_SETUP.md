# 🔧 GitHub App ile Keystatic CMS Kurulumu

## Sorun
OAuth App ile 404 hatası alıyoruz. Repo public olmasına rağmen GitHub OAuth callback'i çalışmıyor.

## Çözüm: GitHub App Kullanımı

### 1. GitHub App Oluştur

1. https://github.com/settings/apps/new adresine git
2. Bu bilgileri gir:

```
GitHub App name: Techoxium CMS
Homepage URL: https://techoxium.pages.dev
User authorization callback URL: https://techoxium.pages.dev/api/keystatic/github/oauth/callback
Setup URL: https://techoxium.pages.dev/keystatic
Webhook URL: https://techoxium.pages.dev/api/keystatic/github/webhook
Webhook secret: (rastgele string oluştur)
```

### 2. Permissions

**Repository permissions:**
- Contents: Read & Write
- Metadata: Read
- Pull requests: Write
- Issues: Write (isteğe bağlı)

**Subscribe to events:**
- Push
- Pull request
- Issues (isteğe bağlı)

### 3. Private Key Oluştur

1. GitHub App oluşturduktan sonra
2. "Generate a private key" butonuna tıkla
3. `.pem` dosyasını indir

### 4. App'i Repository'ye Yükle

1. GitHub App settings'de "Install App" sekmesine git
2. `denizomer1/techoxium` repository'sine yükle

### 5. Cloudflare Pages Environment Variables

Şu environment variable'ları ekle:

```
GITHUB_APP_ID: [App ID from GitHub App settings]
GITHUB_APP_PRIVATE_KEY: [Contents of the .pem file]
GITHUB_APP_INSTALLATION_ID: [Installation ID after installing]
```

### 6. Keystatic Config Güncelle

Production config'i GitHub App için güncelle.

## Alternatif: Basit Çözüm

Eğer GitHub App karmaşık geliyorsa:

1. Repo'yu geçici olarak public bırak
2. OAuth yerine basit GitHub integration kullan
3. Manual file editing yerine local development kullan

Hangi yöntemi tercih ediyorsun?
