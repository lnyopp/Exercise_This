# Exercise_This
Homework Exercise learning this as it relates to functions

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
 4. logs the current photo name.
 5. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.


Next day additional Work. 

1. Create a branch off of your existing slideshow
  (For your branch use the naming convention `async_YOUR_NAME_HERE` )
2. Going back to our slideshow object, let's add some functionality.
3. Create an empty property named playInterval
4. A play() function that moves to the next photo ever 2000ms until the end.
    (Tip - use playInterval = setInterval(fn,ms).)
5. A pause() function that stops the slideshow
    (Tip - use clearInterval(playInterval))
6. Automatically pause the slideshow if it gets to the end of the photolist while      playing. 

7. Merge your branches together and submit the link to the github repo below
