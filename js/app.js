'use-strict';

let allImgObjs = [];
let keywords = [];

$.get('../data/page-1.json').done(data => {
  data.forEach(element => {
    new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
  });
  allImgObjs.forEach((img) => {
    let template = $('section');
    let clone = template.clone();

    clone.children('h2').text(img.title);
    clone.children('img').attr('src', `${img.image_url}`);
    clone.children('img').attr('alt', `${img.title}`);
    clone.children('p').text(img.description);
    $('main').append(clone[0]);

    if(!keywords.includes(img.keyword)) {
      keywords.push(img.keyword);
    }
  });

  keywords.forEach((keyword) => {
    let template = $('option');
    let clone = template.clone();

    clone.attr('value', keyword);
    clone.text(keyword);
    $('select').append(clone[0]);
  });

  $('select').change(() => {
    console.log('this was clicked!');
  });
});

function Img(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allImgObjs.push(this);
}
