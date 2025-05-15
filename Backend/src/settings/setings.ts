export const settings = {
    MONGO_URI: process.env.MONGOURL || 'mongodb://localhost:27017',
    JWT_SECRET: process.env.JWT_SECRET || 'abs',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'abcd',
    Email: process.env.EMAIL || 'deliziosorestoran@gmail.com',
    Password: process.env.PASSWORD || 'drpqzdprktnvbsww',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
    API_URL: process.env.API_URL || 'localhost:3001',
}