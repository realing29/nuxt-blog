<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{$route.params.id}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>