# Naver Maps Integration Setup Guide

## 🗺️ Naver Maps API Configuration

This project has been configured to use Naver Maps instead of Leaflet for a more localized Korean mapping experience.

### 📋 Prerequisites

1. **Naver Cloud Platform Account**: You need a valid NCP account
2. **Maps API Application**: Create an application in the Naver Cloud Platform console

### 🚀 Setup Steps

#### Step 1: Create Naver Cloud Platform Account
1. Visit [Naver Cloud Platform](https://www.ncloud.com/)
2. Sign up for an account if you don't have one
3. Verify your account

#### Step 2: Create Maps API Application
1. Login to [NCP Console](https://console.ncloud.com/)
2. Navigate to **AI·Application Service** > **Maps**
3. Click **Application 등록** (Register Application)
4. Fill in the application details:
   - **Application Name**: Real Estate Portal
   - **Service URL**: http://localhost:5174 (for development)
   - **Application Type**: Web Application
5. Save the application and copy the **Client ID**

#### Step 3: Configure the Client ID
1. Open `src/components/NaverMapContainer.jsx`
2. Find the line: `const NAVER_CLIENT_ID = 'YOUR_NAVER_CLIENT_ID'`
3. Replace `'YOUR_NAVER_CLIENT_ID'` with your actual client ID
4. Save the file

#### Step 4: Test the Integration
1. Start the development server: `npm run dev`
2. Navigate to the map page: http://localhost:5174/map
3. The map should load with property markers

### 🔧 Component Features

The `NaverMapContainer` component includes:

- **Custom Property Markers**: Color-coded price bubbles
  - 🔵 월세 (Monthly Rent) - Blue
  - 🟢 전세 (Jeonse) - Green  
  - 🔴 매매 (Sale) - Red

- **Interactive Info Windows**: Click markers to see property details
- **Event Handling**: Map movement and zoom change callbacks
- **Fallback UI**: Graceful fallback when API key is not configured

### 🎨 Design Integration

The component follows the project's design specifications:
- **Premium Aesthetics**: Subtle shadows and rounded corners
- **Teal Accent Color**: Uses #00BCD4 for selected filters
- **Modern Korean UI**: Optimized for Korean real estate terminology

### 📍 Property Data Structure

Properties should follow this format:
```javascript
{
  id: number,
  title: string,        // e.g., "강남구 신축 아파트"
  price: string,        // e.g., "12억" or "150/200"
  location: string,     // e.g., "강남구 역삼동"
  type: string,         // "매매", "전세", "월세"
  size: string,         // e.g., "84㎡"
  floor: string,        // e.g., "15/20층"
  coordinates: [lat, lng], // [37.5010, 127.0374]
  image: string
}
```

### 🚫 Troubleshooting

**Map not loading?**
- Check if your client ID is correct
- Verify the domain is registered in NCP console
- Check browser console for error messages

**Markers not appearing?**
- Ensure property coordinates are valid
- Check if properties array is properly formatted

**API Key Issues?**
- The component shows a placeholder when API key is invalid
- Follow the setup steps to get a valid client ID

### 🌟 Next Steps

Once the map is working:
1. Add more property data from your backend
2. Implement advanced filtering by location
3. Add clustering for better performance with many markers
4. Integrate with property detail pages

---

**Note**: Naver Maps provides excellent coverage and features for Korean locations, making it the ideal choice for this real estate portal targeting the Korean market.