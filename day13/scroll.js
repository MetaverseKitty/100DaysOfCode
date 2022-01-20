$(document).on('scroll', function() {

    // the scrolltop ethod gives us back a pixel vaoue for how far
    //it is to the top of the page from our current scroll position
  var pixelsFromTop = $(document).scrollTop()
  $('.progress').text(pixelsFromTop + ' pixels from top')
  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }


  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff') 
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#a29c97') 
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#fff0f0') 
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#cdccc7') 
  }


  // 1. make some variables for our documentHeight and windowhEIGHT
  // 2. make a variable to work out the difference between the two as we are comparing this to our 
  // scrollTop pisition which goes from the top of the window) so it will be documentHeight - windowHeight
  // 3. Using the difference and the scrollPosition, divide them into each other to make a percentage
  // 4. multiply by 100 to get back a % value

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight
  var percentage = 100 * pixelsFromTop / difference
  console.log(percentage)


// here we join the number of % scrolled with the % symbol otherwise it will 
// assume we are talking about pixels
$('.bar').css('width', percentage + '%') 

  })

