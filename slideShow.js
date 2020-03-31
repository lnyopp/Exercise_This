
var slideShow = {

    photoList: ['photoOne', 'photoTwo', 'photoThree','photoFour','photoFive'],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        console.log('inside next photo function');
        if (this.currentPhotoIndex < this.photoList.length-1) {
        console.log('inside next photo statement');
         this.currentPhotoIndex++;
         return this.photoList[this.currentPhotoIndex];
        } else {
            return ("End of slide show");
        };
    },
    previousPhoto: function () {
        // looking to not go beyond beginning of the array.
        if (this.currentPhotoIndex > -1 ){
            this.currentPhotoIndex --;
            return (this.photoList[this.currentPhotoIndex]);
        } else {
            return("Beginning of Slideshow");
        };

    },
    getCurrentPhoto: function () {
        return (this.photoList[this.currentPhotoIndex]);
    }
};

// working on my logic as I am getting undefined before the first & last photo, and not sure why.