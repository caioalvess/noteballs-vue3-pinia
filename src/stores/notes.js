import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [
      {
        id: "1",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elitr, adipisicing elitr, adipisicing elitr, adipisicing elitr, adipisicing elitr, adipisicing elitr, adipisicing elitr, adipisicing elitr, adipisicing elit.",
      },
      {
        id: "2",
        content: "adipisicing elit.",
      },
      {
        id: "3",
        content: "elit.",
      },
    ],
  }),
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    }
  },
  actions: {
    addNewNote(newNoteContent) {
      let id = new Date().getTime().toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },

    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete);
    },

    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
});
