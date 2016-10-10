function Entry(titles, texts) {
  this.title = titles;
  this.text = texts;
}

Entry.prototype.wordCount = function() {
  var entry_text = this.text;
  var output = entry_text.split(" ");
  return output.length;
}

Entry.prototype.vowelCount = function() {
  var vowels = 0;
  var vcompare = "aeiou";
  var entry_text = this.text;
  var letterArray = entry_text.split("");

  letterArray.forEach(function(letter){
    if (vcompare.includes(letter)){
      vowels++;
    }
  })
  return vowels;
}

Entry.prototype.consonantCount = function() {
  var consonants = 0;
  var ccompare ="qwrtypsdfghjklzxcvbnm";
  var entry_text = this.text;
  var letterArray = entry_text.split("");

  letterArray.forEach(function(letter){
    if (ccompare.includes(letter)){
      consonants++;
    }
  })
  return consonants;
}

Entry.prototype.getTeaser = function() {

  var entry_text = this.text;
  var by_sentence = entry_text.split(".");
  var first_sentence = by_sentence[0];
  var by_word = first_sentence.split(" ");
  var return_value = "";
  if (by_word.length > 8){
    var holder = [];
    for (var i = 0; i <= 7; i++) {
      holder.push(by_word[i]);
    }
    return_value = holder.join(" ");
  } else {
    return_value = first_sentence;
  }
  return return_value;

  letterArray.forEach(function(letter){
    if (ccompare.includes(letter)){
      consonants++;
    }
  })
  return consonants;
}


exports.entryModule = Entry;
