<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charactereLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        class="card-footer-item"
        href="#"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
/*
IMPORTS
*/
import { computed } from "vue";

import { useNotesStore } from "../../stores/notes.js";

/* 
PROPS
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
STORE
*/
const storeNotes = useNotesStore();

/*
CHARACTERE LENGTH
*/
const charactereLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characteres" : "charactere";
  return `${length} ${description}`;
});
</script>

<style>
.content {
  white-space: unset;
}
</style>
