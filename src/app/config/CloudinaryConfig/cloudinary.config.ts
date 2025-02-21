import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary';
import multer from 'multer';

const removeExtension = (fileName: string) => {
  return fileName.split('.').slice(0, -1).join('.');
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (_req, file) =>
      Math.random().toString(36).substring(2) +
      '-' +
      Date.now() +
      '-' +
      file.fieldname +
      '-' +
      removeExtension(file.originalname),
  },
});

export const multerUpload = multer({ storage: storage });
