let app = {
            KEY: 'parm0058',
            pages: null,
            photos: [],
    
            init: function() {
                
              
                let isReady = (window.hasOwnProperty("cordova")) ? 'deviceready' : 'DOMContentLoaded';
                document.addEventListener(isReady, () => {
                    app.pages = document.querySelectorAll('.page');
                    app.pages[0].classList.add('active');
                    
                    let controls = document.querySelectorAll('.btn');
                    controls.forEach(page => {
                        page.addEventListener('click', app.navigate);
                    })
                });
                
                document.querySelector('#save').addEventListener('click',app.saveReview);
                document.querySelector('#takePicture').addEventListener('click',app.takephoto);
                
                
                
     },
            navigate: function(ev) {
                ev.preventDefault();
                
                console.log("click")
                document.querySelector('.active').classList.remove('active');
                let target = ev.currentTarget.getAttribute('data-target');
                document.getElementById(target).classList.add('active');
            },
            takephoto : function(ev) {
                
                ev.preventDefault();
                console.log(ev);
                            let opts = {
                                quality: 80,
                                destinationType: Camera.DestinationType.FILE_URI,
                                sourceType: Camera.PictureSourceType.CAMERA,
                                mediaType: Camera.MediaType.PICTURE,
                                encodingType: Camera.EncodingType.JPEG,
                                cameraDirection: Camera.Direction.BACK,
                                targetWidth: 600,
                                targetHeight: 800,
                            };

                            navigator.camera.getPicture(app.posi, app.nag, app.opts);
                        },
    
               posi: function (imgURI) {
                   document.querySelector('.gary').classList.remove('heena');
                   
                   console.log('photos');
                            console.log(document.querySelector('form'));
                            document.getElementById('msg').textContent = imgURI;
                            document.getElementById('photo').src = imgURI;
//                            document.getElementById('takePicture').style.display = "none";
//                            document.querySelector('form').style.display = "block";
                   

                        },
                nag: function (msg) {
                            document.getElementById('msg').textContent = msg;
                        },
        };
        app.init();
        


//document.getElementById("takePicture").addEventListener 
//   ("click", cameraTakePicture);
//
////function cameraTakePicture() { 
//   navigator.camera.getPi(onSuccess, onFail, {  
//      quality: 50, 
//      destinationType: Camera.DestinationType.DATA_URL 
//   });  
//   
//   function onSuccess(imageData) { 
//      var image = document.getElementById('photo'); 
//      image.src = "data:image/jpeg;base64," + imageData; 
//   }  
//   
//   function onFail(message) { 
//      alert('Failed because: ' + message); 
//   } 
//}