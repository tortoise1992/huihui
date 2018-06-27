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
        <div class="nav-item l">
          <a href="#">技术分享</a>
          <div class="sub-nav">
              <a href="#">前端</a>
              <a href="#">后台</a>
              <a href="#">运维</a>
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
        text-align: center;
        a{
          color: #bfbfbf;
          transition: all 0.5s;
          &:hover{
            color: #fff;
          }
        }
        .nav-item{
          height: 70px;
          line-height: 70px;
          padding: 0 15px;
          position: relative;
          &:hover{
            .sub-nav{
              display: block;
              // transform: translate3d(0,-30px,0);
            }
          }
          .sub-nav{
            position: absolute;
            left: 0;
            top: 70px;
            display: none;
            background-color: #fff;
            padding: 10px 0;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
            transition: all 0.5s;
            a{
              display: block;
              width: 150px;
              height: 50px;
              line-height: 50px;
              transition: all 0.5s;
              text-align: left;
              text-indent: 20px;
              color: #333;
              &:hover{
                background-color: #000;
                color:#fff;
              }
            }
          }
        }
      }
      .info{

      }
    }
  }
</style>
