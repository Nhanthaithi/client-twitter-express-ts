import cloudinary from 'cloudinary';
import { Request } from 'express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Cấu hình Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME || 'dhkbrdktp',
  api_key: process.env.CLOUD_API_KEY || '957845425157256',
  api_secret: process.env.CLOUD_API_SECRET_KEY || '_i7d0O9G5KFBV8HdAW9pxz7Db7Q',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req: Express.Request, file: Express.Multer.File): Promise<cloudinary.UploadApiOptions> => {
    let format: string;
    switch (file.mimetype) {
      case 'image/jpeg':
        format = 'jpg';
        break;
      case 'image/png':
        format = 'png';
        break;
      case 'image/gif':
        format = 'gif';
        break;
      case 'image/jpg':
        format = 'jpg';
        break;
      default:
        throw new Error('Unsupported file format.');
    }

    return {
      folder: 'tweets',
      format: format,
    };
  },
});

export default storage;
