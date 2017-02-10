angular.module('userProfiles')
    .service('mainService', function(){
        const data = [
            
                {
                    "id": 1,
                    "first_name": "george",
                    "last_name": "bluth",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
                    "isFavorite": false
                },
                {
                    "id": 2,
                    "first_name": "lucille",
                    "last_name": "bluth",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
                    "isFavorite": false
                },
                {
                    "id": 3,
                    "first_name": "oscar",
                    "last_name": "bluth",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
                    "isFavorite": false
                }
            
        ];
        


        this.getUsers = function(){
            return data.slice();
        };
        
        this.toggleFavorite = function(userId){
           data.forEach(item => {
               if (item.id === userId) {
                    item.isFavorite = !item.isFavorite;
                }
           });
            return data.slice();
        }
    });