function testingNoteListview(){
  notelist = new NoteList();
  notelist.createNote("Book");
  notelist.createNote("Food");


  notelistview = new NoteListView(notelist);

  if (notelistview.returnHTMLString() !== "<ul><li><div><a href='#5'>Book</a></div></li><li><div><a href='#6'>Food</a></div></li></ul>") {
    throw new Error('It should return Book and Food');
  }
}

testingNoteListview();

function testFormattingOfLongNotes(){
	notelist = new NoteList();
	notelist.createNote("This is a very very very long note");
	notelistview = new NoteListView(notelist);

	if (notelistview.returnHTMLString() !== "<ul><li><div><a href='#7'>This is a very very ...</a></div></li></ul>") {
		throw new Error('It should only display the first 20 characters of a note');
	}
}

testFormattingOfLongNotes()
