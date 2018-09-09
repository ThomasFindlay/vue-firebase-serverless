<template functional>
  <div class="form-section">
    <label v-if="props.label">{{props.label}}</label>
    <input @input="listeners['input']($event.target.value)" :value="props.value" :type="props.type" :name="props.name" />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      default: 'Label',
      type: String
    },
    type: {
      type: String,
      default: 'Text'
    },
    name: {
      required: true,
      type: String
    },
    value: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.form-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    width: 20%;
    text-align: left;
    font-weight: 600;
  }

  input {
    flex-grow: 1;
    display: block;
    padding: 4px;
    border-radius: 3px;
    border: 1px solid #333;
  }
}
</style>
