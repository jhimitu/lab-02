'use-strict';

let allImgObjs = [];

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
    clone.children('p').text(img.description);
    $('main').append(clone[0]);
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

// let template = $('section');
// let clone = template.clone();
// console.log(clone);
// console.log('this is the img url:', img.image_url);
// let cloneTitle = $(clone).children('h2');
// cloneTitle.text(`${img.title}`);
// let cloneImg = $(clone).children('img');
// cloneImg.attr('src', `${img.image_url}`);
// let cloneDescription = $(clone).children('p');
// cloneDescription.text(`${img.description}`);
// $('main').append(clone);