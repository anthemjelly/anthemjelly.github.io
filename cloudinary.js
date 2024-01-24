import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'djuiluc1r',
  api_key: '486281245995686',
  api_secret: 'JmK81pNlSyF5gpmv3mZJsaVM5ns'
});

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function(error, result) {console.log(result); });
