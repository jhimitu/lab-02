'use-strict';

let allImgObjs = [];
let keywords = [];

$.get('../data/page-1.json').done(data => {
  console.log(data);
  data.forEach(element => {
    new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
  });
  console.log(allImgObjs);
  allImgObjs.forEach((img) => {
    console.log(img);
    let template = $('section');
    let clone = template.clone();
    console.log(clone);
    clone.children('h2').text(img.title);
    clone.children('img').attr('src', `${img.image_url}`);
    clone.children('img').attr('alt', `${img.title}`);
    clone.children('p').text(img.description);
    $('main').append(clone[0]);

    if(!keywords.includes(img.keyword)) {
      keywords.push(img.keyword);
    }
  });
  console.log(keywords);
  keywords.forEach((keyword) => {
    let template = $('option');
    let clone = template.clone();
    console.log(clone[0]);
    clone.attr('value', keyword);
    clone.text(keyword);
    $('select').append(clone[0]);
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
