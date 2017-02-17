(function(exports) {

  function NoteController(notelist = new NoteList()){
    this.notelist = notelist;
    this.view = new NoteListView(this.notelist);
  }

  function getsHtml() {
    document.getElementById('app').innerHTML = this.view.returnHTMLString();
  }

  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
       showNote(getNoteFromUrl(window.location));
    };

    function getNoteFromUrl(location) {
          return location.hash.split("#")[1];
    };

    function showNote (note_id){
       noteArray = this.notelist._notes;
      for (var i = 0; i < noteArray.length; i++){
        if (noteArray[i].id == note_id) {
           document.getElementById('page').innerHTML = new SingleNoteView(this.noteArray[i]).getHtml();
        }
      }
    };

    function listenForFormSubmit(){
    document.getElementById('text').addEventListener( 'submit', function(submitEvent){
      submitEvent.preventDefault();
    });
    }

    listenForFormSubmit();

  exports.NoteController = NoteController;
  NoteController.prototype.getsHtml = getsHtml;
  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = makeUrlChangeShowNoteForCurrentPage;

})(this);
