'use strict';

(function(exports){

  var NOTE_ID_COUNT = 0;

  function Note(text){
  this.text = text;
  this.id = NOTE_ID_COUNT;
  NOTE_ID_COUNT ++;
  }

  function displayNote() {
    return this.text;
  }

exports.Note = Note;
Note.prototype.displayNote = displayNote;

})(this);
