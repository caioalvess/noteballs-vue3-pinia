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
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" class="card-footer-item" href="#">
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
EMITS
*/
const emit = defineEmits(["deleteClicked"]);

/*
CHARACTERE LENGTH
*/
const charactereLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characteres" : "charactere";
  return `${length} ${description}`;
});

/*
HANDLE DELETE CLICKED
*/

const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>

<style>
.content {
  white-space: unset;
}
</style>
