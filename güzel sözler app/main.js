var quoteDisplay = document.getElementById("quote");
var authorDisplay = document.getElementById("yazar");
//textContent:elementin metin içeriğini al demekmiş

function getQuote(){
$.getJSON("https://api.myjson.com/bins/15yxt9", function(json){
var RandomQuote = json[Math.floor(Math.random() * json.length)];
quoteDisplay.textContent = RandomQuote.Quote;
authorDisplay.textContent = RandomQuote.Author;
});
};

function paylas(){
  
var url = "dede";
var text = quoteDisplay.textContent;
var author=authorDisplay.textContent;
var hashtags='güzelsözler'

window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&hashtags='+encodeURIComponent(hashtags)+'&text='+encodeURIComponent(text)+"  - "+encodeURIComponent(author),'', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

            
};


 $(document).ready(function(){
   getQuote();

      
   
 });


 $("#yenile").on("click", getQuote );

