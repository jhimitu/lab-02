'use-strict';

//gets page one on pageload
$(() => {
  getPageOne();
});

//gets data for each page
$('ul').on('click', (e) => {
  console.log(e);
  if(e.target.text === 'Page 1') {
    getPageOne();
  }
  if(e.target.text === 'Page 2') {
    getPageTwo();
  }
});

//handles option selection event
$('select').change((e) => {
  $('section').each(function() {
    // $(this).show();
    if( $(this).attr('id') !== e.target.value) {
      $(this).hide();
    }
    if ( $(this).attr('id') === e.target.value ) {
      $(this).show();
    }
    if ( $(this).attr('class') === e.target.value) {
      $(this).toggle();
    }
  });
});

function getPageOne() {
  let allImgObjs = [];
  let keywords = ['all'];

  function Img(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    allImgObjs.push(this);
  }

  let template = $('.placeholder');
  $('main').empty();
  $('main').append(template[0]);
  console.log(template);

  let optionTemplate = $('option');
  $('select').empty();
  $('select').append(optionTemplate[0]);

  console.log('Page 1 was clicked');
  $.get('./data/page-1.json').done(data => {
    data.forEach(element => {
      new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
    });

    allImgObjs.forEach((img) => {
      let theTemplateScript = $('#image-template').html();
      console.log('the template script: ', theTemplateScript);
  
      let theTemplate = Handlebars.compile(theTemplateScript);
      let context = {
        "title": `${img.title}`,
        "image_url": `${img.image_url}`,
        "alt-tag": `${img.title}`,
        "description": `${img.description}`
      }
  
      let theCompiledHTML = theTemplate(context);
      console.log('compiled HTML: ', theCompiledHTML);
      let template = $('.placeholder');
      let clone = template.clone();
      clone.attr('class', 'all');
      clone.attr('id', `${img.keyword}`);
      console.log('clone: ', clone);
      clone.html(theCompiledHTML);
      $('main').append(clone[0]);
      clone.show();
      console.log('clone HTML: ', clone[0]);

      if(!keywords.includes(img.keyword)) {
        keywords.push(img.keyword);
      }
    });

      // creates a select option for each keyword from the list
    keywords.forEach((keyword) => {
      let template = $('option');
      let clone = template.clone();
  
      clone.attr('value', keyword);
      clone.text(keyword);
      $('select').append(clone[0]);
    });
  });
}

function getPageTwo() {
  let allImgObjs = [];
  let keywords = ['all'];

  function Img(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    allImgObjs.push(this);
  }

  let template = $('.placeholder');
  $('main').empty();
  $('main').append(template[0]);
  console.log(template);

  let optionTemplate = $('option');
  $('select').empty();
  $('select').append(optionTemplate[0]);

  console.log('Page 2 was clicked');
  $.get('./data/page-2.json').done(data => {
    data.forEach(element => {
      new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
    });

    allImgObjs.forEach((img) => {
      let theTemplateScript = $('#image-template').html();
      console.log('the template script: ', theTemplateScript);
  
      let theTemplate = Handlebars.compile(theTemplateScript);
      let context = {
        "title": `${img.title}`,
        "image_url": `${img.image_url}`,
        "alt-tag": `${img.title}`,
        "description": `${img.description}`
      }
  
      let theCompiledHTML = theTemplate(context);
      console.log('compiled HTML: ', theCompiledHTML);
      let template = $('.placeholder');
      let clone = template.clone();
      clone.attr('class', 'all');
      clone.attr('id', `${img.keyword}`);
      console.log('clone: ', clone);
      clone.html(theCompiledHTML);
      $('main').append(clone[0]);
      clone.show();
      console.log('clone HTML: ', clone[0]);

      if(!keywords.includes(img.keyword)) {
        keywords.push(img.keyword);
      }
    });

      // creates a select option for each keyword from the list
    keywords.forEach((keyword) => {
      let template = $('option');
      let clone = template.clone();
  
      clone.attr('value', keyword);
      clone.text(keyword);
      $('select').append(clone[0]);
    });
  });
}
