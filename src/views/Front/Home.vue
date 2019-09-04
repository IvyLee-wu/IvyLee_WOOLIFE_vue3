<template>
  <div>
    <div class="topImage"></div>

    <div class="container">
    <!-- category -->
    <ul class="row category pt-5" style="">
      <li class="col-12 col-lg-6 mb-5 hover" v-for="(category, key) in categories" :key="key"
       @click.prevent="categoryBtn(category.title)" style="position:relative;">
        <!-- <i :class="category.icon"></i> -->
        <!-- <ul class="" style="overflow: hidden;">
          <li>{{category.name}}</li>
          <li>{{category.title}}</li>
          <li style="overflow: hidden; width: 600px; height: 700px; position:relative;"><img :src="category.url" alt="" style="position:absolute;
    top:-20px;left:0; width:100%"></li>
        </ul> -->
        
          <div class="word">
            <span>{{category.name}}</span>
            <span>{{category.title}}</span>
          </div>
        <div class="pic">
          <div :class="category.url"></div>
          
        </div>
        
        
      </li>
    </ul>    
    </div>

    <!-- discount -->
    

    <div class="bottomImage"></div>

    <!-- news -->
    

    <!-- joinus -->
    

  </div>
</template>

<script>


export default {
  data() {
    return {
      categories: [
        { name: 'all', title: '全部商品', url: 'pic1' },
        { name: 'sweater', title: '毛衣', url: 'pic2' },
        { name: 'shawl', title: '披肩', url:'pic3' },
        { name: 'scarf', title: '圍巾', url:'pic4' },
        { name: 'hat', title: '帽子', url:'pic5' },
        { name: 'glove', title: '手套', url:'pic6' },
        { name: 'sock', title: '襪子', url:'pic7' },
        { name: 'wool', title: '毛線', url:'pic8' },
      ],
    };
  },
  methods: {
    categoryBtn(categoryTitle) {
      const vm = this;
      vm.$router.push({ path: '/productslist', query: { category: categoryTitle } });
    },
    joinusBtn() {
      const vm = this;
      vm.$validator.validate().then((result) => {
        if (!result) {
          vm.$store.dispatch('alertMessageModules/updateMessage', { message: '請輸入正確EMAIL格式', status: 'danger' });
        } else {
          vm.$store.dispatch('alertMessageModules/updateMessage', { message: '訂閱成功', status: 'success' });
        }
      });
    },
  },
  components: {
    
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/_custom.scss';

//
.topImage{
  padding: 270px;
  background: url('https://images.unsplash.com/photo-1550376026-7375b92bb318?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max') no-repeat;
  background-size: cover;
  background-position: 50% 10%;
  background-attachment: fixed;
  text-align: center;
  @media(max-width: 569px) {
    background-size: contain;
    padding: 130px;
    background-position: 50% -20%;
  }
}
.bottomImage{
  padding: 270px;
  background: url('https://images.unsplash.com/photo-1550376026-7375b92bb318?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max') no-repeat;
  background-size: cover;
  background-position: 50% 90%;
  background-attachment: fixed;
  text-align: center;
  @media(max-width: 569px) {
    background-size: contain;
    padding: 130px;
    background-position: 50% 100%;
  }
}
.pic1{
  background-image: url('https://images.unsplash.com/photo-1501632865397-94246a9f1521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.hover:hover{
  transform: scale(1.03);
}
.pic2{
  background-image: url('https://images.unsplash.com/photo-1543883804-714e376a8abd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.pic3{
  background-image: url('https://likemary.com/wp-content/uploads/shoreditch-merino-wool-shawl-oversize-scarf-truffle-100-x-215cm-7.jpg');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.pic4{
  background-image: url('https://cdn.shopify.com/s/files/1/1072/3400/products/ee6568e1-2a89-47de-b5fe-7f236c096640_1.jpg?v=1537982775');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.pic5{
  background-image: url('https://www.norwayshop.com/1356-home_default/setesdal-unisex-wool-hat-black-vrikke-of-norway.jpg');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.pic6{
  background-image: url('https://merinoandco.com.au/media/catalog/product/cache/1/small_image/600x800/9df78eab33525d08d6e5fb8d27136e95/g/w/gwp127-black-1.jpg');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.pic7{
  background-image: url('https://images.unsplash.com/photo-1543420629-5350879dd4cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.pic8{
  background-image: url('https://images.unsplash.com/photo-1517146783983-418c681b56c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  border-radius: 30px;
  background-size: cover;
  width: 500px;
  height: 700px;
  @media(max-width: 1200px) {
    width: 400px;
    height: 560px;
  }
  @media(max-width: 569px) {
    width: 300px;
    height: 420px;
  }
}
.word{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  font-size: 20px;
  letter-spacing: 5px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

//category
.category {
  >li {
    display: flex;
    justify-content: center;
    align-items: center;
    //padding: 7rem 0;
    transition: all 0.15s ease;
    cursor: pointer;
    text-align: center;
    color: $secondary-color;
    white-space:nowrap;
    &:hover, &:active {
      //background-color: #E6E6FA;
      color: $primary-color;
    }
  }
  >li:not(:last-child) {
    //border-right: #8674A1 solid 1px;
    @media(max-width: 992px) {
      border: none;
    }
  }
}

// discount
.discount {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  @media (max-width:569px) {
    flex-direction: column;
    text-align: center;
    > div {
      margin-bottom: 1rem;
    }
  }
  .btn {
    width: 20%;
    @media (max-width:569px) {
      width: 100%;
    }
  }
}

//news
.news {
  text-align: center;
  h3 {
    font-family: $font-family-title;
  }
  p {
    font-family: $font-family-text;
  }
}
.news-img {
  padding: 10rem 0;
  color: $white-color;
  text-shadow: 1px 1px 1px $primary-color;
  @media (max-width: 414px) {
    padding: 5rem 0;
  }
}
.news-img-1 {
  background: url('../../assets/image/news-1.jpg') bottom center no-repeat;
  background-size: cover;
}
.news-img-2 {
  background: url('../../assets/image/news-2.jpg') center center no-repeat;
  background-size: cover;
}
.news-content {
  padding: 2rem;
  background-color: $hot-color;
}
.news-border {
  padding: 2.5rem 0;
  border: 2.5px $white-color solid;
}
@media (max-width: 767px) {
  .news-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}

//joinus
.joinus {
  padding: 5rem;
  background: url('https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  @media (max-width: 767px) {
    padding: 5rem 1rem;
  }
  h3 {
    font-family: $font-family-title;
    color: $white-color;
    text-shadow: 1px 1px 1px $primary-color;
  }
}
.joinus-content {
  padding: 3rem 2rem;
  background: rgba($hot-color, 0.8);
  border-radius: 10px;
}
</style>
