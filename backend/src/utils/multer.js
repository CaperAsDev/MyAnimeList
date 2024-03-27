import multer from 'multer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = join(__dirname, '..', 'public', 'uploads')
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

export const uploadFields = upload.fields([{ name: 'poster', maxCount: 1 }, { name: 'banner', maxCount: 1 }])

export default upload
