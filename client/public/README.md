# TankGame 3D - เว็บไซต์ดาวน์โหลดเกม

เว็บไซต์หน้าเดียวสำหรับแฟนคลับ YouTube ที่ต้องการดาวน์โหลดเกม TankGame 3D พร้อม JavaScript เอฟเฟกต์และเสียงเพลงพื้นหลัง

## 📁 ไฟล์ในโปรเจกต์

```
tankgame-website/
├── index.html           # ไฟล์ HTML หลัก
├── style.css           # ไฟล์ CSS สำหรับการออกแบบ
├── script.js           # ไฟล์ JavaScript สำหรับเอฟเฟกต์
├── tank-background.jpg # ภาพพื้นหลังรถถัง
└── README.md          # คู่มือการใช้งาน (ไฟล์นี้)
```

## 🎨 ฟีเจอร์พิเศษที่เพิ่มเข้ามา

### 🎵 เสียงและดนตรี
- **เพลงพื้นหลัง**: เล่นอัตโนมัติเมื่อโหลดเว็บเสร็จ
- **ปุ่มควบคุมเสียง**: อยู่มุมขวาบน สามารถเปิด/ปิดเพลงได้
- **เอฟเฟกต์เสียง**: เมื่อกดปุ่มดาวน์โหลด

### ✨ เอฟเฟกต์พิเศษ
- **Loading Screen**: หน้าจอโหลดพร้อมรถถังเคลื่อนไหว
- **Particle Animation**: อนุภาคสีเขียวลอยและเชื่อมต่อกัน
- **Mouse Trail**: เส้นทางเมาส์ที่ติดตามการเคลื่อนไหว
- **Typing Effect**: ชื่อเกมพิมพ์ทีละตัวอักษร
- **Counter Animation**: ตัวเลขสถิตินับขึ้นเมื่อเลื่อนดู
- **Scroll Animation**: การ์ดต่างๆ เคลื่อนไหวเมื่อเลื่อนดู
- **Hover Effects**: เอฟเฟกต์พิเศษเมื่อเอาเมาส์ชี้

### 🎮 ฟีเจอร์เพิ่มเติม
- **ตัวนับดาวน์โหลด**: นับจำนวนครั้งที่กดดาวน์โหลด
- **ระบบแจ้งเตือน**: Toast notification สวยงาม
- **สถิติเกม**: แสดงตัวเลขสถิติแบบเคลื่อนไหว
- **Responsive Design**: รองรับทุกอุปกรณ์

## 🚀 วิธีใช้งาน

### วิธีที่ 1: เปิดไฟล์ในเครื่อง (สำหรับทดสอบ)

1. แตกไฟล์ zip ที่ได้รับ
2. เปิดไฟล์ `index.html` ด้วย Web Browser (Chrome, Firefox, Edge)
3. เว็บไซต์จะทำงานได้ทันที!

### วิธีที่ 2: รันด้วย VS Code + Live Server

1. เปิด VS Code
2. ติดตั้ง Extension: **Live Server** โดย Ritwick Dey
3. เปิดโฟลเดอร์ `tankgame-website` ใน VS Code
4. คลิกขวาที่ไฟล์ `index.html`
5. เลือก **Open with Live Server**
6. เว็บจะเปิดที่ `http://127.0.0.1:5500`

### วิธีที่ 3: รันด้วย Python HTTP Server

```bash
# เข้าไปในโฟลเดอร์โปรเจกต์
cd tankgame-website

# รัน HTTP Server
python -m http.server 8000

# เปิดเบราว์เซอร์ไปที่
# http://localhost:8000
```

### วิธีที่ 4: อัปโหลดไปยัง GitHub Pages

```bash
# สร้าง repository ใหม่บน GitHub
# จากนั้นรันคำสั่งต่อไปนี้ในโฟลเดอร์ tankgame-website

git init
git add .
git commit -m "Initial commit: TankGame 3D website with JavaScript effects"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**เปิดใช้งาน GitHub Pages:**
1. ไปที่ Repository Settings
2. เลือก **Pages** จากเมนูด้านซ้าย
3. ในส่วน **Source** เลือก `main` branch
4. คลิก **Save**
5. เว็บไซต์จะพร้อมใช้งานที่ `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## ⚙️ การปรับแต่งเว็บไซต์

### เปลี่ยนลิงก์ดาวน์โหลดเกม

เปิดไฟล์ `index.html` และแก้ไขบรรทัดที่ 44:

```html
<!-- เดิม -->
<a href="#" class="download-btn" id="downloadBtn">

<!-- เปลี่ยนเป็นลิงก์ดาวน์โหลดจริง -->
<a href="https://your-download-link.com/game.zip" class="download-btn" id="downloadBtn">
```

**ตัวอย่างลิงก์ที่ใช้ได้:**
- Google Drive: `https://drive.google.com/uc?export=download&id=FILE_ID`
- GitHub Release: `https://github.com/username/repo/releases/download/v1.0/game.zip`
- Dropbox: `https://www.dropbox.com/s/xxxxx/game.zip?dl=1`
- MediaFire: ใช้ลิงก์ดาวน์โหลดโดยตรง

### เปลี่ยนเพลงพื้นหลัง

เปิดไฟล์ `index.html` และแก้ไขบรรทัดที่ 12:

```html
<!-- เดิม -->
<source src="https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3" type="audio/mpeg">

<!-- เปลี่ยนเป็น URL เพลงของคุณ -->
<source src="your-music-url.mp3" type="audio/mpeg">
```

**แหล่งเพลงฟรีที่แนะนำ:**
- Mixkit: https://mixkit.co/free-stock-music/
- Free Music Archive: https://freemusicarchive.org/
- YouTube Audio Library: https://www.youtube.com/audiolibrary

**หรือใช้ไฟล์เพลงในเครื่อง:**
1. วางไฟล์เพลง (เช่น `background.mp3`) ในโฟลเดอร์เดียวกับ `index.html`
2. เปลี่ยน URL เป็น: `<source src="background.mp3" type="audio/mpeg">`

### เปลี่ยนภาพพื้นหลัง

**วิธีที่ 1: ใช้ภาพจากคอมพิวเตอร์**

1. เตรียมภาพที่ต้องการ (แนะนำขนาด 1920x1080 หรือใหญ่กว่า)
2. เปลี่ยนชื่อภาพเป็น `tank-background.jpg`
3. แทนที่ไฟล์เดิมในโฟลเดอร์

**วิธีที่ 2: ใช้ภาพจาก URL ภายนอก**

เปิดไฟล์ `style.css` และแก้ไขบรรทัดที่ 35:

```css
/* เดิม */
background-image: url('tank-background.jpg');

/* เปลี่ยนเป็น URL ภายนอก */
background-image: url('https://example.com/your-image.jpg');
```

### ปรับแต่งสี

เปิดไฟล์ `style.css` และแก้ไขสีในส่วนต่างๆ:

- **สีเขียวทหาร**: `#4CAF50` → เปลี่ยนเป็นสีที่ต้องการ
- **สีพื้นหลัง**: `#0a0a0a` (สีดำ)
- **สีข้อความ**: `#e0e0e0` (สีขาวอมเทา)

### เปิด/ปิดเอฟเฟกต์

เปิดไฟล์ `script.js`:

**ปิด Particle Animation:**
```javascript
// Comment บรรทัดนี้
// animateParticles();
```

**ปิด Mouse Trail:**
```javascript
// Comment บรรทัดนี้
// animateTrail();
```

**ปิด Auto-play Music:**
```javascript
// Comment ฟังก์ชันนี้ใน window.addEventListener('load')
// playBackgroundMusic();
```

**ปิด Loading Screen:**
```css
/* เพิ่มใน style.css */
.loading-screen {
    display: none;
}
```

### เปลี่ยนข้อมูลทีมงาน

เปิดไฟล์ `index.html` และแก้ไขส่วน Team Section (บรรทัดที่ 102-129):

```html
<div class="team-member">
    <div class="member-avatar">👨‍💻</div>
    <h4 class="member-name">ชื่อของคุณ</h4>
    <p class="member-id">รหัสนักศึกษา</p>
    <p class="member-role">ตำแหน่ง</p>
</div>
```

### ปรับจำนวนดาวน์โหลดเริ่มต้น

เปิดไฟล์ `script.js` และแก้ไขบรรทัดที่ 106:

```javascript
let downloadCount = 1234; // เปลี่ยนเป็นจำนวนที่ต้องการ
```

### ปรับสถิติเกม

เปิดไฟล์ `index.html` และแก้ไข `data-target` ในส่วน Stats Section:

```html
<div class="stat-number" data-target="50">0</div>
<!-- เปลี่ยน 50 เป็นตัวเลขที่ต้องการ -->
```

## 🎯 เคล็ดลับการใช้งาน

### ทดสอบบนมือถือ
- ใช้ Chrome DevTools กด F12 → Toggle Device Toolbar (Ctrl+Shift+M)
- เลือกอุปกรณ์ต่างๆ เพื่อดู Responsive Design

### ปรับความเร็วแอนิเมชั่น
- เปิด `style.css` และแก้ไข `animation-duration` ในแต่ละ animation
- เช่น `animation: float 3s` → เปลี่ยน `3s` เป็น `2s` เพื่อให้เร็วขึ้น

### เพิ่มหน้าใหม่
- สร้างไฟล์ HTML ใหม่ เช่น `about.html`
- คัดลอก structure จาก `index.html`
- เพิ่มลิงก์ใน navigation

### SEO Optimization
เพิ่ม meta tags ใน `<head>`:

```html
<meta name="description" content="ดาวน์โหลด TankGame 3D เกมรถถัง 3 มิติสุดมันส์">
<meta name="keywords" content="tank game, เกมรถถัง, 3D game, ดาวน์โหลดเกม">
<meta property="og:title" content="TankGame 3D - ดาวน์โหลดเกมฟรี">
<meta property="og:image" content="tank-background.jpg">
```

## 📱 ความเข้ากันได้

### เบราว์เซอร์ที่รองรับ:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### อุปกรณ์ที่รองรับ:
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablet (iPad, Android Tablet)
- ✅ Mobile (iPhone, Android Phone)

## 🐛 การแก้ปัญหา

### เพลงไม่เล่น
- บางเบราว์เซอร์ block auto-play audio
- คลิกปุ่มเพลงมุมขวาบนเพื่อเปิดเพลง
- ตรวจสอบ URL เพลงว่าใช้งานได้

### Loading Screen ไม่หาย
- รีเฟรชหน้าเว็บ (F5)
- ลองเปิดใน Incognito Mode
- ตรวจสอบ Console (F12) ดู error

### เอฟเฟกต์ไม่แสดง
- ตรวจสอบว่าไฟล์ `script.js` โหลดสำเร็จ
- เปิด Console (F12) ดู error message
- ลองปิด browser extensions ที่อาจบล็อก JavaScript

### ภาพพื้นหลังไม่แสดง
- ตรวจสอบชื่อไฟล์ว่าถูกต้อง (`tank-background.jpg`)
- ตรวจสอบว่าไฟล์อยู่ในโฟลเดอร์เดียวกับ `index.html`
- ลองใช้ URL เต็มแทน relative path

## 📞 ติดต่อทีมพัฒนา

- นายชัยณรงค์ ชัยสงค์ - 6610070 - Lead Developer
- นายสุภากร บัวชัยชิต - 6610076 - Game Designer
- นายกิตติพงศ์ อุดมลาภ - 6610068 - 3D Artist
- นายเฉลิมชัย คำแหงพล - 6610104 - Sound Engineer

---

## 🎮 ฟีเจอร์ที่มีในเว็บไซต์

✅ หน้าเว็บเดี่ยว (Single Page)  
✅ Loading Screen แบบเคลื่อนไหว  
✅ เพลงพื้นหลังพร้อมปุ่มควบคุม  
✅ Particle Animation สวยงาม  
✅ Mouse Trail Effect  
✅ ปุ่มดาวน์โหลดพร้อมเอฟเฟกต์  
✅ ตัวนับดาวน์โหลดแบบ Real-time  
✅ สถิติเกมแบบเคลื่อนไหว  
✅ ระบบแจ้งเตือน (Toast Notification)  
✅ Scroll Animation  
✅ Hover Effects  
✅ Responsive Design  
✅ รายชื่อทีมงาน 4 คน  
✅ ธีมสีเขียวทหาร-ดำ-เทา  

---

**🎮 เว็บไซต์พร้อมใช้งานแล้ว! ขอให้โปรเจกต์ TankGame 3D ของคุณประสบความสำเร็จ!**

**สร้างด้วย ❤️ โดยทีม TankGame 3D**
