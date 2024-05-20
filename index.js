$(document).ready(function(){
    $('#redirect-link').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/';
    });
});
// click home and go to its home page
$(document).ready(function(){
    $('#home').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/';
    });
});
// click GUARANTEES and go to its home page
$(document).ready(function(){
    $('#GUARANTEES').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/guarantees-for-british-citizenship-training/';
    });
});
// click LIFE IN UK and go to its home page
$(document).ready(function(){
    $('#life_in_uk').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/life-in-the-uk-test-training/';
    });
});
// click DRIVING THEORY and go to its home page
$(document).ready(function(){
    $('#driving_theory').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/driving-theory-test-training/';
    });
});
// click A1_English and go to its home page
$(document).ready(function(){
    $('#A1_English').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/a1-english-language-test-training/';
    });
});
// click A2_English and go to its home page
$(document).ready(function(){
    $('#A2_English').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/a2-english-language-test-training/';
    });
});
// click B1_English and go to its home page
$(document).ready(function(){
    $('#B1_English').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/b1-english-test-training/';
    });
});
// click B1_Worker_Visa and go to its home page
$(document).ready(function(){
    $('#B1_Worker_Visa').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/b1-worker-visa-english/';
    });
});
// click Lorry_HGV_Training and go to its home page
$(document).ready(function(){
    $('#Lorry_HGV_Training').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/lorry-hgv-lgv-test-training/';
    });
});
// click Gedling_Taxi_Traning and go to its home page
$(document).ready(function(){
    $('#Gedling_Taxi_Traning').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/gedling-taxi-test-training/';
    });
});
// click Wolverhampton_Taxi_Training and go to its home page
$(document).ready(function(){
    $('#Wolverhampton_Taxi_Training').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/wolverhampton-taxi-test-training/';
    });
});
// click ABOUT_US and go to its home page
$(document).ready(function(){
    $('#ABOUT_US').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/about-us/';
    });
});
// click TESTIMONIALS and go to its home page
$(document).ready(function(){
    $('#TESTIMONIALS').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/reviews/';
    });
});
// click BLOG and go to its home page
$(document).ready(function(){
    $('#BLOG').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/blog/';
    });
});
// click CONTACT_US and go to its home page
$(document).ready(function(){
    $('#CONTACT_US').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/contact-us/';
    });
});
// click get_information and go to its home page
$(document).ready(function(){
    $('#get_information').click(function(event) {
        event.preventDefault(); 
        window.location.href = 'https://fasttracklifeuk.co.uk/free-assessment-life-in-the-uk-course/';
    });
});


// calculate 5k, 10k,15k, 20k

$(document).ready(function() {
    var $number = $('.number');
    var startValue = 5000;
    var endValue = 20000;
    var increment = 5000;
    var duration = 2000; 
    var steps = (endValue - startValue) / increment;
    var stepDuration = duration / steps;
    var currentStep = 0;

    $number.text('0k+'); 

    function updateNumber() {
        var value = startValue + (currentStep * increment);
        $number.text(value / 1000 + 'k+');
        if (currentStep < steps) {
            currentStep++;
            setTimeout(updateNumber, stepDuration);
        } else {
            $number.text(endValue / 1000 + 'k+');
        }
    }

  
    $number.css({ top: '-100px', position: 'absolute' }).animate({ top: 0 }, duration);

   
    setTimeout(updateNumber, 200);
});