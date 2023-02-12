<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          @click="addNotes()"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <div v-auto-animate>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script setup>
/*
IMPORTS
*/
import { ref } from "vue";
import { vAutoAnimate } from "@formkit/auto-animate";

import Note from "../components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";

import { useNotesStore } from "../stores/notes.js";

/*
STORE
*/
const storeNotes = useNotesStore();

/*
NOTES
*/
const newNote = ref("");
const addEditNoteRef = ref(null);

const addNotes = () => {
  storeNotes.addNewNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};
</script>
