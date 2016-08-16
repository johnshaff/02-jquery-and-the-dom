var articles = [];

function Article (opts) {
  //TODO: Use the JS object that we pass in to complete the constructor.
  //Save all the properties of the 'opts' into 'this'
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;

};


Article.prototype.toHtml = function () {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  $newArticle.h1.text(this.title);

  //TODO: fill in the rest of the attributes

  //Display the date as a relative number of days ago
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  //TODO: This cloned article is no longer a template, as it now has real data attached to it. We need to account for that before this current article gets rendered to our dom. Just remove the class from the new article.

  return $newArticle;
};


//This is sorting the current data array
ourLocalData.sort(function (firstElement, secondElement) {
  return (new Date(secondElement.publishedOn)) - (new Date(firstElement.publishedOn));
});

//This is instantiating and then pushing each instance into a new a different array
ourLocalData.forEach(function (opts) {
  articles.push(new Article (opts));
};


//this is taking each object in the new array running the toHtml method on it and then putting it on the DOM
articles.forEach(function (article) {
  $('#articles').append(article.toHtml());
)};
