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
  getters: {},
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
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
  },
});
