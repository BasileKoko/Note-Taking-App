'use strict';
(function(exports){

  function NoteListView(notelists = new NoteList()) {
    this.notelists = notelists;
    this.view = notelists._notes
  }

function returnHTMLString()  {
  var string = "";
  for (var i = 0; i < this.view.length; i++){
  	if (this.view[i].displayNote().length > 20) {
  		string += "<li><div><a href='#" + this.view[i].id + "'>" + this.view[i].displayNote().substring(0, 20) + "...</a></div></li>"
  	} else {
  		string += "<li><div><a href='#" + this.view[i].id + "'>"+ this.view[i].displayNote()+ "</a></div></li>"
  	}
  }
return "<ul>" + string + "</ul>";
}


exports.NoteListView = NoteListView;
NoteListView.prototype.returnHTMLString = returnHTMLString;

}(this));
