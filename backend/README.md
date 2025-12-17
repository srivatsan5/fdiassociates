# FDI Associates Backend API

A simple Express.js backend that connects to MongoDB Atlas for storing chat conversations.

## 🚀 Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` with your MongoDB credentials:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fdi_associates
   MONGODB_DATABASE=fdi_associates
   ALLOWED_ORIGINS=http://localhost:5173,https://yourdomain.com
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

5. **Test the API:**
   - Health check: http://localhost:3001/
   - Get conversations: http://localhost:3001/api/conversations

## 🌐 Deploy to Render (Free)

1. **Create a Render account:** https://render.com

2. **Connect your GitHub repository**

3. **Create a new Web Service:**
   - Select your repository
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Add Environment Variables:**
   - `MONGODB_URI`: Your MongoDB connection string
   - `MONGODB_DATABASE`: `fdi_associates`
   - `ALLOWED_ORIGINS`: Your Hostinger domain URL

5. **Deploy!** Render will give you a URL like `https://fdi-associates-api.onrender.com`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/health` | Database connection status |
| GET | `/api/conversations` | Get all conversations |
| GET | `/api/conversations/:id` | Get single conversation |
| POST | `/api/conversations` | Create/update conversation |
| DELETE | `/api/conversations/:id` | Delete conversation |
| DELETE | `/api/conversations/device/:deviceId` | Clear all for device |
| POST | `/api/conversations/bulk` | Bulk import |
| POST | `/api/contact` | Submit contact form |

## 🔒 Security Notes

- Never commit your `.env` file
- Keep your MongoDB password secure
- Update `ALLOWED_ORIGINS` to only include your actual domain
