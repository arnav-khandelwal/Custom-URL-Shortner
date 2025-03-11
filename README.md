# URL Shortener

A simple URL shortener built using Node.js, Express, MongoDB, and NanoID.

## Features
- Generate short URLs
- Redirect short URLs to original URLs
- Track analytics (total clicks and visit history)

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- NanoID

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/url-shortener.git
   cd url-shortener
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB (if not running already):
   ```sh
   mongod
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server runs on `http://localhost:8001`.

## API Endpoints

### 1. Generate a Short URL
**Endpoint:** `POST /url`

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "id": "abcdefgh"
}
```

### 2. Redirect to Original URL
**Endpoint:** `GET /:shortId`

Redirects to the original URL.

### 3. Get URL Analytics
**Endpoint:** `GET /url/analytics/:shortId`

**Response:**
```json
{
  "totalClicks": 5,
  "analytics": [
    { "timeStamp": 1710457890000 },
    { "timeStamp": 1710457900000 }
  ]
}
```

## Project Structure
```
.
├── controllers/
│   ├── url.js
├── models/
│   ├── url.js
├── routes/
│   ├── url.js
├── index.js
├── connection.js
├── package.json
```
