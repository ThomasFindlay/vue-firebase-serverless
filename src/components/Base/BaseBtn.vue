<script>
export default {
  functional: true,
  props: {
    text: {
      required: true,
      type: String
    },
    type: {
      default: 'button',
      type: String
    }
  },
  render(h, { props, listeners }) {
    return h('button', {
      attrs: {
        type: props.type
      },
      domProps: {
        innerText: props.text
      },
      on: listeners
    });
  }
};
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  background-color: orangered;
  color: white;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.2s all;
  width: 100%;

  &:hover {
    background-color: darken(orangered, 5%);
  }
}
</style>
