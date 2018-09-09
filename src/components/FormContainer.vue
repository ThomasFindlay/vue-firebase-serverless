<script>
export default {
  functional: true,
  props: {
    width: {
      default: '450px',
      type: String
    }
  },
  render(h, ctx) {
    return h(
      'form',
      {
        style: {
          width: ctx.props.width
        }
      },
      ctx.slots().default
    );
  }
};
</script>
<style lang="scss" scoped>
form {
  margin: 0 auto;
  box-shadow: 1px 1px 5px #333;
  padding: 20px 40px;
}
</style>
