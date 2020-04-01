
var slideShow = {

    photoList: ['photoOne', 'photoTwo', 'photoThree','photoFour','photoFive'],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        if (this.currentPhotoIndex < this.photoList.length-1) {
        // console.log('inside next photo statement');
            this.currentPhotoIndex++;
         return console.log((this.photoList[this.currentPhotoIndex]));
        } else {
            this.pause()
            return console.log(("End of slide show"));
            
        };
    },
    previousPhoto: function () {
        // looking to not go beyond beginning of the array.
        if (this.currentPhotoIndex > 0 ){
            this.currentPhotoIndex --;
            return (this.photoList[this.currentPhotoIndex]);
        } else {
            return("Beginning of Slideshow");
        };

    },
    getCurrentPhoto: function () {
        return (this.photoList[this.currentPhotoIndex]);
    },
    // 3. Create an empty property named playInterval
    playInterval: null,
    play: function() {
        var currentScope = this;
        this.playInterval = setInterval(function() {
        return currentScope.nextPhoto()},2000);
	},
       
    pause: function(){
        //stop the show.
        var currentScope = this;
        clearInterval(currentScope.playInterval);
        //automatically do this at the end of the photolist while it is playing.
    }

};

slideShow.play();

// Day ONE struggle: working on my logic as I am getting undefined before the first & last photo, and not sure why.

// Day Two struggle: cannot get the first photo to print in the console. 
