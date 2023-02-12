<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bg-color="link"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <button @click="$router.push('/')" class="button is-link is-light mr-4">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          :disabled="!noteContent"
          class="button is-link has-background-link"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
IMPORTS
*/
import { ref } from "vue";
import { useRoute } from "vue-router";
import AddEditNote from "../components/Notes/AddEditNote.vue";

import { useNotesStore } from "../stores/notes.js";

/*
STORE
*/
const storeNotes = useNotesStore();

/*
ROUTER
*/
const route = useRoute();

/*
NOTES
*/
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
};
</script>
