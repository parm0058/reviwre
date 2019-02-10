let app = {
            pages: null,
            init: function() {
                
              
                let isReady = (window.hasOwnProperty("cordova")) ? 'deviceready' : 'DOMContentLoaded';
                document.addEventListener(isReady, () => {
                    app.pages = document.querySelectorAll('.page');
                    app.pages[0].classList.add('active');
                    app.pages.forEach(page => {
                        page.querySelector('button').addEventListener('click', app.navigate);
                    })
                });
                
                let btn=document.getElementById('btn')
                console.log(btn)
//                    .addEventListener('click', app.takephoto);
            },
            navigate: function(ev) {
                ev.preventDefault();
                document.querySelector('.active').classList.remove('active');
                let target = ev.currentTarget.getAttribute('data-target');
                document.getElementById(target).classList.add('active');
            },
            takephoto : function(ev) {
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
         
                            document.getElementById('msg').textContent = imgURI;
                            document.getElementById('photo').src = imgURI;

                        },
                nag: function (msg) {
                            document.getElementById('msg').textContent = msg;
                        },
        };
        app.init();
        
        