'use-strict';

let allImgObjs = [];

$.get('../data/page-1.json').done((data) => {
  console.log(data);
  data.forEach(element => {
    new Img(element.image_url, element.title, element.description, element.keyword, element.horns);
  });
  allImgObjs.forEach((img) => {
    let template = $('section');
    let tempHTML = template.html();
    console.log(tempHTML);
    console.log('this is the img url:', img.image_url);
    console.log('this is the template html:', template[0]);
    console.log('this is template jquery: ', template);
    let templateTitle = $(template).children('h2');
    templateTitle.text(`${img.title}`);
    let templateImg = $(template).children('img');
    templateImg.attr('src', `${img.image_url}`);
    let templateDescription = $(template).children('p');
    templateDescription.text(`${img.description}`);
    $('main').append(template);
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
