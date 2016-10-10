(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/entry.js":1}]},{},[2]);
