'use-strict';



let pageOneKeywords = ['all'];
let pageTwoKeywords = ['all'];


$('ul').on('click', function(e) {
  console.log(e.target.text);
  if(e.target.text === "Page 1") {
    //fire page-1.json
    getPageOne();
  }
  if (e.target.text === "Page 2") {
    //fire page-2.json
    getPageTwo();
  }
});



function getPageOne() {
  $.get('./data/page-1.json').done(data => {
    let pageOneImgs = [];
    data.forEach(element => {
      console.log(element);
      new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
      pageOneImgs.push(element);
    });
    //creates a new section for each image
    pageOneImgs.forEach((img) => {
      let template = $('section');
      let clone = template.clone();

      $('.page-2').css('display', 'none');
  
      clone.attr('id', `${img.keyword}`);
      clone.attr('class', 'all page-1');
      clone.children('h2').text(img.title);
      clone.children('img').attr('src', `${img.image_url}`);
      clone.children('img').attr('alt', `${img.title}`);
      clone.children('p').text(img.description);
      $('main').append(clone[0]);
      
      //adds each keyword to a list
      if(!pageOneKeywords.includes(img.keyword)) {
        pageOneKeywords.push(img.keyword);
      }
    });
  
    //creates a select option for each keyword from the list
    pageOneKeywords.forEach((keyword) => {
      let template = $('option');
      let clone = template.clone();
  
      clone.attr('value', keyword);
      clone.addClass('page-1 all');
      clone.text(keyword);
      $('select').append(clone[0]);
    });
  
    //handles option selection event
    $('select').change((e) => {
      $('section').each(function() {
        $(this).show();
        if( $(this).attr('id') !== e.target.value) {
          $(this).hide();
        }
        if ( $(this).attr('id') === e.target.value ) {
          $(this).toggle();
          console.log('hello from page one');
        }
        if ( $(this).attr('class') === e.target.value) {
          $(this).toggle();
          console.log('hello from all');
        }
      });
    });
  });
}

function getPageTwo() {
  $.get('./data/page-2.json').done(data => {
    let pageTwoImgs = [];
    data.forEach(element => {
      new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
      pageTwoImgs.push(element);
    });
    //creates a new section for each image
    pageTwoImgs.forEach((img) => {
      let template = $('section');
      let clone = template.clone();
      console.log(clone[0]);

      $('.page-1').css('display', 'none');
  
      clone.attr('id', `${img.keyword}`);
      clone.attr('class', 'all page-2');
      clone.children('h2').text(img.title);
      clone.children('img').attr('src', `${img.image_url}`);
      clone.children('img').attr('alt', `${img.title}`);
      clone.children('p').text(img.description);
      $('main').append(clone[0]);
      
      //adds each keyword to a list
      if(!pageTwoKeywords.includes(img.keyword)) {
        pageTwoKeywords.push(img.keyword);
      }
    });

    //creates a select option for each keyword from the list
    pageTwoKeywords.forEach((keyword) => {
      let template = $('option');
      let clone = template.clone();
  
      clone.attr('value', keyword);
      clone.addClass('page-2 all');
      clone.text(keyword);
      $('select').append(clone[0]);
    });
  
    //handles option selection event
    $('select').change((e) => {
      $('section').each(function() {
        $(this).show();
        if( $(this).attr('id') !== e.target.value) {
          $(this).hide();
        }
        if ( $(this).attr === e.target.value ) {
          $(this).toggle();
        }
        if ( $(this).attr('class') === e.target.value) {
          $(this).toggle();
        }
      });
    });
  });
}

function Img(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

function clearOptions() {
  $('select').empty();
}