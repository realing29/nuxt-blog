<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img 
          src="https://cdn21.img.ria.ru/images/155959/50/1559595090_0:0:3160:2048_600x600_80_0_1_be476b2955b5e027bdbb47b9ff1945f2.jpg" 
          alt=""
        >
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet aliquam corrupti tempora soluta nam, voluptatum doloremque, quos incidunt quas molestiae adipisci voluptas, dolore mollitia deleniti facere qui nemo culpa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet aliquam corrupti tempora soluta nam, voluptatum doloremque, quos incidunt quas molestiae adipisci voluptas, dolore mollitia deleniti facere qui nemo culpa!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet aliquam corrupti tempora soluta nam, voluptatum doloremque, quos incidunt quas molestiae adipisci voluptas, dolore mollitia deleniti facere qui nemo culpa!</p>
    </main>
    <footer>
      
    </footer>
  </article>
</template>

<script>
export default {
  validate({ params }) {
    return Boolean(params.id);
  }
};
</script>
<style lang="stylus" scoped>
  .post
    max-width 600px
    margin 0 auto
  .post-title, .post-info
    display flex
    justify-content space-between
    align-items center
    margin-bottom 1rem
  .post-info
    margin-bottom 0.5rem
  .post-image img 
    width 100%
    height auto
  .post-header
    margin-bottom 1.5rem
  .post-content
    margin-bottom 2rem
</style>