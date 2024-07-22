import { config } from 'dotenv';
config();
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {rateLimit} from 'express-rate-limit';
import cookieParser from 'cookie-parser';

const app:Application = express();

// Middleware to parse JSON request bodies

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware to secure Express app by setting various HTTP headers

app.use(helmet());


// Middleware to limit the number of requests from the same IP address within a certain time frame

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// Middleware to log request method, URL, and timestamp

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${req.method} ${req.url} - ${timestamp}`);
  next();
});


// Start the server

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
