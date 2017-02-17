function init(){

notelist = new NoteList();
notecontroller = new NoteController(notelist);
notelist.createNote("Favourite drink: Coca cola")
notelist.createNote("Favourite food: Chicken Curry")
notelist.createNote("Favourite movie: The perfect book")
notelist.createNote("Favourite song: Summer Time")
notecontroller.getsHtml();
notecontroller.makeUrlChangeShowNoteForCurrentPage();

}

window.onload = init
