import multer from "multer";

// Create upload middleware. This should create a folder called uploads
export const localUpload = multer({dest: 'uploads'});