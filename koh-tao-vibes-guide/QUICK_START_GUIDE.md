# Quick Start Guide - Updating Your Website Content

## 🎯 Easy Content Management System

Your website now uses **JSON data files** that you can easily edit to update:
- ✅ Photos and images
- ✅ Prices
- ✅ Hotel/accommodation listings
- ✅ Business listings
- ✅ Activities
- ✅ Destinations

**No coding required!** Just edit simple JSON files.

---

## 📂 Where to Find Content Files

All content files are in: `koh-tao-vibes-guide/src/data/`

- `accommodations.json` - Hotels, resorts, hostels
- `businesses.json` - Restaurants, shops, services  
- `activities.json` - Tours, rentals, experiences
- `destinations.json` - Beaches, viewpoints

---

## 🏨 Example: Adding a New Hotel

### Step 1: Add Your Photo
1. Save your hotel photo to: `public/assets/my-hotel.jpg`

### Step 2: Edit `accommodations.json`
Open the file and add a new entry:

```json
{
  "id": "my-new-hotel",
  "nameKey": "accommodations.myNewHotel.name",
  "descriptionKey": "accommodations.myNewHotel.description",
  "type": "resort",
  "rating": 4.5,
  "price": "$80-120",
  "location": "accommodations.location.saireeBeach",
  "image": "/assets/my-hotel.jpg",
  "amenities": [
    "accommodations.amenity.pool",
    "accommodations.amenity.wifi",
    "accommodations.amenity.ac"
  ],
  "featured": false
}
```

### Step 3: Add Translations
Open `src/contexts/LanguageContext.tsx` and add translations:

**English section:**
```typescript
"accommodations.myNewHotel.name": "My New Hotel",
"accommodations.myNewHotel.description": "Amazing beachfront hotel",
```

**Spanish section:**
```typescript
"accommodations.myNewHotel.name": "Mi Nuevo Hotel",
"accommodations.myNewHotel.description": "Hotel increíble frente a la playa",
```

**Thai section:**
```typescript
"accommodations.myNewHotel.name": "โรงแรมใหม่ของฉัน",
"accommodations.myNewHotel.description": "โรงแรมริมชายหาดที่ยอดเยี่ยม",
```

### Step 4: Save & Refresh
- Save all files
- Refresh your browser
- Your new hotel appears!

---

## 💰 Changing Prices

Simply edit the `"price"` field in the JSON file:

```json
{
  "price": "$50-80"  ← Change this
}
```

Examples:
- `"$50-80"` - Price range
- `"From $120/night"` - Starting price
- `"Free"` - Free activity

---

## 📸 Changing Photos

1. Replace the image in `public/assets/` folder
2. Update the JSON file's `"image"` field to match the filename

Example:
```json
{
  "image": "/assets/new-photo.jpg"  ← Update this
}
```

---

## 🏪 Adding a Restaurant

Edit `businesses.json`:

```json
{
  "id": "my-restaurant",
  "nameKey": "businesses.myRestaurant.name",
  "descriptionKey": "businesses.myRestaurant.description",
  "category": "restaurant",
  "rating": 4.5,
  "openHours": "11:00 AM - 10:00 PM",
  "phone": "+66 77 123 4567",
  "location": "businesses.location.saireeBeach",
  "image": "/assets/restaurant-photo.jpg"
}
```

Then add translations in `LanguageContext.tsx` following the same pattern.

---

## ⭐ Featured Items

To show an item in the featured section, set:

```json
{
  "featured": true  ← Set to true for featured items
}
```

---

## 📋 Available Types & Categories

### Accommodation Types:
- `"resort"`
- `"villa"`
- `"bungalow"`
- `"hostel"`

### Business Categories:
- `"restaurant"`
- `"diveShop"`
- `"shopping"`
- `"cafe"`
- `"spa"`

### Locations:
Use these existing location keys:
- `"accommodations.location.saireeBeach"`
- `"accommodations.location.maeHaad"`
- `"accommodations.location.chalokBaanKao"`
- `"businesses.location.saireeBeach"`
- `"businesses.location.maeHaad"`
- `"businesses.location.chalokBaanKao"`

---

## ✅ Quick Checklist

When adding new content:
- [ ] Add entry to appropriate JSON file
- [ ] Add photo to `public/assets/` folder
- [ ] Add translations for all 3 languages (EN, ES, TH)
- [ ] Use unique `id` (no duplicates)
- [ ] Save all files
- [ ] Refresh browser to see changes

---

## 🔧 Need More Details?

See `README_CONTENT_UPDATES.md` for complete documentation.

