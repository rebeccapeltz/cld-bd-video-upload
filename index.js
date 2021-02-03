require("dotenv").config();
var cloudinary = require('cloudinary').v2;
cloudinary.uploader
  .upload('Basic_Tee_Clip_2x.mp4', 
  {
    resource_type: 'video', 
    type: "upload",
    public_id: 'Basic_Tee', 
    folder: "Cloudinary-Partner-Training/eCommerce-videos",     
    tags:["position_1","whiteTee","pwg01"],       
    overwrite:"true"    
  })
  .then(result => {
    console.log(result)
    console.log(cloudinary.video('Cloudinary-Partner-Training/eCommerce-videos/Basic_Tee', { controls: 'true' }))
  })
  .catch(error => console.log(error))