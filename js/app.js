'use-strict';

$('ul').on('click', (e) => {
  console.log(e);
  if(e.target.text === 'Page 1') {
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

    console.log('Page 1 was clicked');
    $.get('./data/page-1.json').done(data => {
      data.forEach(element => {
        new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
      });
      console.log('image objects: ', allImgObjs);
      console.log('keywords: ', keywords);

      let template = $('#photo-template');
      $('main').empty();
      $('main').append(template[0]);
      console.log(template);
  
      let optionTemplate = $('option');
      $('select').empty();
      $('select').append(optionTemplate[0]);
      console.log(optionTemplate);

      //creates a new section for each image
      allImgObjs.forEach((img) => {
        let template = $('section');
        let clone = template.clone();
    
        clone.attr('class', `${img.keyword} all`);
        clone.attr('id', `${img.title}`);
        // clone.attr('class', 'all');
        clone.children('h2').text(img.title);
        clone.children('img').attr('src', `${img.image_url}`);
        clone.children('img').attr('alt', `${img.title}`);
        clone.children('p').text(img.description);
        $('main').append(clone[0]);
        
        //adds each keyword to a list
        if(!keywords.includes(img.keyword)) {
          keywords.push(img.keyword);
        }
      });
    
      //creates a select option for each keyword from the list
      keywords.forEach((keyword) => {
        let template = $('option');
        let clone = template.clone();
    
        clone.attr('value', keyword);
        clone.text(keyword);
        $('select').append(clone[0]);
      });
    });
  }
  if(e.target.text === 'Page 2') {
    console.log('Page 2 was clicked');
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

    $.get('./data/page-2.json').done(data => {
      data.forEach(element => {
        new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
      });
      console.log('image objects: ', allImgObjs);
      console.log('keywords: ', keywords);

      let template = $('#photo-template');
      $('main').empty();
      $('main').append(template[0]);
      console.log(template);
  
      let optionTemplate = $('option');
      $('select').empty();
      $('select').append(optionTemplate[0]);
      console.log(optionTemplate);


      //creates a new section for each image
      allImgObjs.forEach((img) => {
        let template = $('section');
        let clone = template.clone();
    
        clone.attr('class', `${img.keyword} all`);
        clone.attr('id', `${img.title}`);
        // clone.attr('class', 'all');
        clone.children('h2').text(img.title);
        clone.children('img').attr('src', `${img.image_url}`);
        clone.children('img').attr('alt', `${img.title}`);
        clone.children('p').text(img.description);
        console.log('clone', clone[0]);
        $('main').append(clone[0]);
        
        //adds each keyword to a list
        if(!keywords.includes(img.keyword)) {
          keywords.push(img.keyword);
        }
      });
    
      //creates a select option for each keyword from the list
      keywords.forEach((keyword) => {
        let template = $('option');
        let clone = template.clone();
    
        clone.attr('value', keyword);
        clone.text(keyword);
        $('select').append(clone[0]);
      });
    });
  }
})



      // //handles option selection event
      // $('select').change((e) => {
      //   $('section').each(function() {
      //     // $(this).show();
      //     if( $(this).attr('id') !== e.target.value) {
      //       $(this).hide();
      //     }
      //     if ( $(this).attr('id') === e.target.value ) {
      //       $(this).show();
      //     }
      //     // if ( $(this).attr('class') === e.target.value) {
      //     //   $(this).toggle();
      //     // }
      //   });
      // });

      // //handles option selection event
      // $('select').change((e) => {
      //   $('section').each(function() {
      //     // $(this).show();
      //     if( $(this).attr('id') !== e.target.value) {
      //       $(this).hide();
      //     }
      //     if ( $(this).attr('id') === e.target.value ) {
      //       $(this).toggle();
      //     }
      //     // if ( $(this).attr('class') === e.target.value) {
      //     //   $(this).toggle();
      //     // }
      //   });
      // });