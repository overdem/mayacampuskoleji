# Stitch Doğrudan Bağlantı - İlk Kurulum
## Cline'ın Stitch'e Bağlanması

---

## 🔧 İLK KURULUM - STITCH BAĞLANTISI

### ADIM 1: Stitch.io'ya Giriş Yap
```
URL: https://www.stitch.io/
```

### ADIM 2: Workspace Oluştur
```
New Workspace
Name: Campus Maya
```

### ADIM 3: API Keys Al
```
Workspace Settings → API Access
Kopyala:
- Access Token (API Key)
- Workspace ID
- API URL
```

### ADIM 4: Environment Setup
```bash
# .env dosyası
STITCH_API_KEY=your_access_token
STITCH_WORKSPACE_ID=your_workspace_id
STITCH_API_URL=https://api.stitch.io
```

---

## 🚀 CLINE'IN STITCH'E DOĞRUDAN BAĞLANMASI

### Seçenek 1: Web Browser ile (En kolay)

```
1. https://www.stitch.io/ → Giriş Yap
2. "Create New Project" → Campus_Maya_Demo
3. Tasarım paneline başla
4. Mockup'ları çiz (Figma gibi)
5. Shared Link oluştur
6. Stakeholder'lara gönder
```

### Seçenek 2: API ile (Python)

```python
# stitch_connector.py

import requests
import json
from typing import Dict, Optional

class StitchConnector:
    """Stitch'e doğrudan bağlantı"""
    
    def __init__(self, api_key: str, workspace_id: str):
        self.api_key = api_key
        self.workspace_id = workspace_id
        self.base_url = "https://api.stitch.io"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def create_file(self, name: str, description: str = "") -> Dict:
        """Stitch'te yeni file oluştur"""
        url = f"{self.base_url}/v1/workspaces/{self.workspace_id}/files"
        
        data = {
            "name": name,
            "description": description,
            "file_type": "design"
        }
        
        response = requests.post(url, json=data, headers=self.headers)
        
        if response.status_code == 201:
            return response.json()
        else:
            print(f"Hata: {response.status_code} - {response.text}")
            return None
    
    def upload_design(self, file_id: str, design_json: Dict) -> bool:
        """Design verisini yükle"""
        url = f"{self.base_url}/v1/files/{file_id}/design"
        
        response = requests.put(url, json=design_json, headers=self.headers)
        
        if response.status_code == 200:
            print(f"✅ Design yüklendi: {file_id}")
            return True
        else:
            print(f"❌ Upload hatası: {response.status_code}")
            return False
    
    def get_share_link(self, file_id: str) -> Optional[str]:
        """Paylaşım linki oluştur"""
        url = f"{self.base_url}/v1/files/{file_id}/share"
        
        data = {"access": "view"}
        
        response = requests.post(url, json=data, headers=self.headers)
        
        if response.status_code == 201:
            return response.json().get('share_url')
        else:
            print(f"❌ Link oluşturma hatası: {response.status_code}")
            return None


# KULLANIM

if __name__ == '__main__':
    # API Keys
    API_KEY = "your_api_key_here"
    WORKSPACE_ID = "your_workspace_id"
    
    # Connector oluştur
    stitch = StitchConnector(API_KEY, WORKSPACE_ID)
    
    # 1. File oluştur
    print("📁 File oluşturuluyor...")
    file_data = stitch.create_file(
        name="Campus_Maya_Admin_Dashboard",
        description="Admin panel mockup for Campus Maya"
    )
    
    if file_data:
        file_id = file_data['id']
        print(f"✅ File oluşturuldu: {file_id}")
        
        # 2. Design yükle
        print("🎨 Design yükleniyor...")
        design = {
            "name": "Admin Dashboard",
            "width": 1920,
            "height": 1080,
            "elements": [
                {
                    "type": "frame",
                    "name": "Login",
                    "x": 0,
                    "y": 0,
                    "width": 400,
                    "height": 600
                }
            ]
        }
        
        if stitch.upload_design(file_id, design):
            # 3. Share link oluştur
            print("🔗 Share link oluşturuluyor...")
            share_url = stitch.get_share_link(file_id)
            
            if share_url:
                print(f"✅ Paylaşım linki: {share_url}")
```

---

## 📱 STITCH DIRECT WORKFLOW

```
1. Stitch.io'ya giriş yap
   ↓
2. "Campus Maya" workspace'ını seç
   ↓
3. "New File" → "Campus_Maya_Demo"
   ↓
4. Design paneline giriş
   ↓
5. Components/Frames oluştur
   - Admin Login
   - Admin Dashboard
   - Blog Frontend
   - Parent Portal
   - Social Media Dashboard
   ↓
6. İnteraktif prototype bağla
   ↓
7. "Share" → "View Only" link oluştur
   ↓
8. Stakeholder'lara gönder
```

---

## 🎯 CLINE'IN YAPACAĞI (EN BASIT YÖNTEM)

### 1. Stitch Account Aç
```
https://www.stitch.io/sign-up
Email: cline@campus-maya.com
Password: [güvenli şifre]
```

### 2. Workspace Oluştur
```
Settings → New Workspace
Name: Campus Maya
```

### 3. Yeni Project Başlat
```
"Create" → "Design File"
File Name: Campus_Maya_PHASE_0
```

### 4. Mockup'ları Tasarla
```
Admin Panel:
├─ Login Sayfası
├─ Dashboard
├─ Blog Manager
├─ Media Manager
├─ Social Publisher
└─ Analytics

Blog Frontend:
├─ Homepage
├─ News List
├─ News Detail
└─ Gallery

Parent Portal:
├─ Login
├─ Dashboard
├─ Grades
├─ Attendance
├─ Calendar
└─ Notifications

Social Media Dashboard:
├─ Publisher
├─ Analytics
└─ Calendar
```

### 5. Pages'ı Bağla (Interactive)
```
Admin Login → Admin Dashboard → Blog Manager vb.
Pages arası click'ler
```

### 6. Share Link Oluştur
```
Share (sağ üst)
"View only" → Copy Link
https://stitch.io/view/...
```

### 7. Feedback Al
```
Stakeholder'lara link gönder
Feedback topla
Revisions yap
```

---

## 🔑 STITCH API ENDPOINTS (Eğer kod kullanmak istersen)

```
# Authentication
POST /v1/auth/login
  Body: { "email": "", "password": "" }

# Workspaces
GET  /v1/workspaces
POST /v1/workspaces

# Files
GET    /v1/workspaces/{id}/files
POST   /v1/workspaces/{id}/files
GET    /v1/files/{id}
PUT    /v1/files/{id}
DELETE /v1/files/{id}

# Design
GET /v1/files/{id}/design
PUT /v1/files/{id}/design

# Sharing
POST /v1/files/{id}/share
GET  /v1/files/{id}/share

# Components
POST /v1/files/{id}/components
GET  /v1/files/{id}/components
```

---

## 💡 EN KOLAY YÖNTEM (ÖNERİLEN)

**Cline Stitch.io web'e direkt girsin:**

```
1. https://www.stitch.io/ → Sign Up/Login
2. Workspace oluştur
3. "New Design File" tıkla
4. Tasarım panelinde mockup'ları çiz
5. Share link oluştur
6. DONE!
```

**Avantajları:**
- ✅ Kod gerek yok
- ✅ GUI ile rahat tasarım
- ✅ Collab features
- ✅ Version history
- ✅ Share linki kolay

---

## 🚀 QUICK CHECKLIST

- [ ] Stitch.io hesabı oluşturuldu
- [ ] Workspace oluşturuldu
- [ ] Design File oluşturuldu
- [ ] Admin mockup tasarlandı
- [ ] Blog mockup tasarlandı
- [ ] Parent Portal tasarlandı
- [ ] Social Media Dashboard tasarlandı
- [ ] Pages bağlandı (interactive)
- [ ] Share linki oluşturuldu
- [ ] Stakeholder'lara gönderildi

---

## 📞 CLINE'IN İLK YAPACAĞI

1. **Stitch.io'ya giriş yap** ← BURADAN BAŞLA
2. **FAZA_0_STITCH_BRIEF.md oku** ← Talimatlar
3. **CAMPUS_MAYA_FAZA_0_DEMO_DESIGN.md oku** ← Mockup'lar
4. **Web'te tasarım yapmaya başla**

---

**En basit = Web browser kullan, kod gerek yok!** 🎨

Stitch.io → Account → New File → Tasarım Yap → Share
