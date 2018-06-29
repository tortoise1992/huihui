<template>
  <div class="top">
    <div class="header w clearfix">
      <div class="logo l">

      </div>
      <div class="nav l clearfix">
        <a href="#" class="active">首页</a>
        <a href="#">技术文章</a>
        <a href="#">生活随笔</a>
        <a href="#">GITHUB</a>
      </div>
      <div class="info r">
        <a href="#">登录</a>
        <a href="#">注册</a>
      </div>
    </div>

  </div>
</template>
<script>
  export default {

  }
</script>

<style scoped lang='less'>

  .top{
    height: 70px;
    background-color:rgba(0, 0, 0, 0.8);
    .header{
      .logo{
        width: 200px;
        height: 70px;
        background-color: #fff;
      }
      .nav{
        width: 800px;
        font-size: 0;
        a{
          color: #bfbfbf;
          display: inline-block;
          height: 70px;
          line-height: 70px;
          padding: 0 25px;
          transition: all 0.5s;
          font-size: 14px;
          &:hover,&.active{
            color: #333;
            background-color: #fff;
          }

        }

      }
      .info{

      }
    }
  }
</style>
