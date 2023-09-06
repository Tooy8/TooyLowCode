/*
 * @Description: 文件上传

 */

const sftpUploader = require('sftp-uploader')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const sftp = new sftpUploader({
  dir: path.join(__dirname, 'dist/'),
  host: process.env.VUE_APP_HOSE,
  url: process.env.VUE_APP_URL,
  port: process.env.VUE_APP_PROT,
  username: process.env.VUE_APP_USERNAME,
  password: process.env.VUE_APP_PASSWORD,
  previewPath: 'http://110.42.184.128:8000/#/'
})

// 仅支持手动上传
sftp.put()
