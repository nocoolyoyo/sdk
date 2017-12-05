<template>
  <div id="index1" class="page">
    <header>
      <a class="btn-back">
        <img class="normal" src="../assets/images/onemt_back.png"/>
        <img class="active" src="../assets/images/onemt_back_gray.png"/>
      </a>
      <div class="box-center">{{headData.title}}</div>
    </header>
    <main>
      <div class="list">
        <div class="item" v-for="item in listData">
          <img class="avatar item-left" :src="item.avatar">
          <div class="item-center">
            <div class="author">{{item.author}}</div>
            <div class="content">{{item.content}}</div>
          </div>
          <div class="item-right">{{item.timestamp}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import IMG_headerBg from '@/assets/images/onemt_topframe.png';
  const headData = {
    title: 'Account'
  }
  const listData = [{
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }, {
    avatar: 'http://m.vstou.com/img/201503/llkt5.jpg',
    author: 'Levis',
    content: 'xewrdw werfwe sdad ere23',
    timestamp: 1512469705
  }]

  export default {
    name: 'index1',
    data() {
      return {
        headData: headData,
        listData: listData,
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/variables';
  @import '../modules/mobileSCSS/mixins';
  $size-header: 50px;
  $size-btn-back: 60px;
  $transition-btn: opacity .2s ease;
  .page {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;
    header {
      background-image: url('../assets/images/onemt_topframe.png');
      height: $size-header;
      background-position: center;
      background-size: cover;
      .box-center {
        height: inherit;
        line-height: $size-header;
        font-size: 18px;
        font-weight: bold;
        color:$c-stoneGray;
        text-align: center;
      }
      .btn-back {
        height: $size-btn-back;
        width: $size-btn-back;
        float: left;
        left: 0;
        top: 0;
        position: absolute;
        img {
          width: 100%;
          height: 100%;
        }
        .normal {
          height: $size-btn-back;
          width: $size-btn-back;
          left:0;
          top:0;
          position: absolute;
          z-index: 1;
          transition: $transition-btn;
          opacity: 1;
          &:active {
            opacity: 0;
          }
        }
      }
    }
    main {
      min-height: calc(100% - #{$size-header});
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      will-change: scroll-position;
      contain: size style layout;
      width: 100%;
      background-image: url('../assets/images/onemt_social_background.jpg');
      background-position: center;
      background-size: contain;
      background-repeat: repeat-y;
    }

    .list {
      $size-list-avatar: 50px;
      .item {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
        &:active {
          opacity: .8;
        }
        .item-center {
          flex: 1;
          overflow: hidden;
          .author {

          }
          .content {
            @include ellipsis(1);
          }
        }
        .avatar {
          margin-right: 20px;
          border-radius: 25%;
          height: $size-list-avatar;
          width: $size-list-avatar;
        }
        .item-right {
          width: 100px;
        }
        border-bottom: 1px solid #dcdcdc;
      }
    }
  }
</style>
