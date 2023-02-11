<template>
  <div class="notes">
    <!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNotes()"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>  -->

    <AddEditNote>
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

const newNoteRef = ref(null);

const addNotes = () => {
  storeNotes.addNewNote(newNote.value);

  newNote.value = "";

  newNoteRef.value.focus();
};
</script>
