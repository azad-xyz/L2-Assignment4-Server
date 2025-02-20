import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });
export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSOWRD,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  ssl_store_id: process.env.SSL_STORE_ID,
  ssl_store_pass: process.env.SSL_STORE_PASS,
  ssl_payment_api: process.env.SSL_PAYMENT_API,
  ssl_validation_api: process.env.SSL_VALIDATION_API,
  success_url: process.env.SUCCESS_URL,
  cancel_url: process.env.CANCEL_URL,
  fail_url: process.env.FAIL_URL,
};
