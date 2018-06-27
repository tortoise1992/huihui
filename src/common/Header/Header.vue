<template>
  <div class="top">
    <div class="header w clearfix">
      <div class="logo l">

      </div>
      <div class="nav l clearfix">
        <div class="nav-item l">
          <a href="#">首页</a>
          <div class="sub-nav">
              <a href="#">二级导航</a>
          </div>
        </div>

      </div>
      <div class="info r">

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
        a{
          color: #bfbfbf;
        }
        .nav-item{
          height: 70px;
          line-height: 70px;
          padding: 0 15px;
        }
      }
      .info{

      }
    }
  }
</style>
