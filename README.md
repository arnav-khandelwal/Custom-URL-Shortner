# Custom URL Shortener

A full-stack URL shortener web application that allows users to shorten URLs, track analytics, and manage links efficiently.

## Features
- Shorten long URLs into compact, shareable links
- Track analytics such as click count and usage statistics
- User-friendly interface with a modern design
- Backend built with Express.js and MongoDB
- Frontend developed using React.js
- Deployed using Render

## Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose ODM)
- **Database**: MongoDB Atlas
- **Deployment**: Render

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js & npm (or Yarn)
- MongoDB (local or Atlas)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/custom-url-shortener.git
   cd custom-url-shortener/backend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=8001
   ```
4. Start the backend server:
   ```bash
   yarn start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the frontend development server:
   ```bash
   yarn dev
   ```
   
## License
This project is open-source and available under the MIT License.

---
Let me know if you want to add more details or modifications!

