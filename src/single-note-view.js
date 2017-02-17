(function(exports) {

function SingleNoteView(notemodel) {
  this.notemodel = notemodel;
}

function getHtml(){
  return '<div>' + this.notemodel.text + '</div>';
}

  exports.SingleNoteView = SingleNoteView;
  SingleNoteView.prototype.getHtml = getHtml;

})(this);
