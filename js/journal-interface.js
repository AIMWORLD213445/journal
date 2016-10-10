var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
    $('#journal-form').submit(function(event){
      event.preventDefault();
      var title = $('#title').val();
      var text = $('#text').val();
      var anEntry = new Entry(title, text);
      var output = anEntry.wordCount();
      var vowels = anEntry.vowelCount();
      var consonants = anEntry.consonantCount();
      var teaser = anEntry.getTeaser();
      console.log(output);
      console.log(vowels);
      console.log(consonants);
      console.log(teaser);
      $('#results').text('   wordcount =   ' + output +'   vowel count =   ' + vowels + '   consonant count =   ' + consonants + '   teaser =   '+ teaser);
    });
});
