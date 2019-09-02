<template>
  <div class="">
    <Loading :active.sync="isLoading"></Loading>
    <Alert/>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: #8674A1 !important">
      <router-link class=" logo" to="/">
        <img src="../assets/image/sheep.svg" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
       aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse toggle-menu" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center w-100">
          <li class="nav-item">
            <router-link class="nav-link h5 pt-4" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link h5 pt-4" to="/productslist"
             :class="{'active': $route.name === 'ProductsList' && 'router-link-active'}">
             Products
            </router-link>
          </li>
          
          <li class="nav-item ml-lg-auto pt-1">
            <router-link class="nav-link" to="/login">
              <i class="fas fa-user-circle fa-2x"></i>
            </router-link>
          </li>
        </ul>

        <div class="btn-group cart" :class="{'show': isCartShow}">
          <button type="button" class="btn cart-btn" data-toggle="dropdown">
            <i class="fas fa-shopping-cart fa-2x"></i>
            <span class="badge badge-pill badge-danger">{{ cartsLength }}</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right" :class="{'show': isCartShow}">
            <div class="p-2 px-sm-3">
              <h5 class="text-center">購物車清單</h5>
              <table class="table mb-2" style="min-width:270px">
                <tbody>
                  <tr v-for="cart in carts.carts" :key="cart.id">
                    <td class="px-1">
                      <a href="#" class="text-danger" @click.prevent="removeCartItem(cart.id)">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                    <td class="px-1">{{ cart.product.title }}</td>
                    <td class="px-1">{{ cart.qty }} {{ cart.product.unit }}</td>
                    <td class="text-right px-1">{{ cart.total | currency }}</td>
                  </tr>
                  <tr v-if="!carts.total">
                    <td class="text-center">購物車是空的</td>
                  </tr>
                </tbody>
              </table>
              <router-link to="/createorder" class="btn btn-primary d-block mb-2"
              v-if="carts.total">
                <i class="fas fa-cart-arrow-down"></i> 結帳去
              </router-link>
            </div>
          </div>
        </div>
        <div class="btn-group favorite">
          <button type="button" class="btn favorite-btn" data-toggle="dropdown">
            <i class="fas fa-heart fa-2x"></i>
            <span class="badge badge-pill badge-danger">{{ favoritesLength }}</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="pt-2 px-3">
              <h5 class="text-center">我的最愛</h5>
              <table class="table mb-2" style="min-width:200px">
                <tbody>
                  <tr class="favorite-list"
                  v-for="favorite in favorites" :key="favorite.id">
                    <td class="py-2" width="30">
                      <a href="#" class="text-danger favorite-list-delbtn"
                      @click.prevent="removeFavorite(favorite, false)">
                        <i class="fas fa-times"></i>
                      </a>
                    </td>
                    <td class="py-2">
                      <router-link :to="`/productslist/${favorite.id}`" class="d-block">
                        {{ favorite.title }}
                      </router-link>
                    </td>
                  </tr>
                  <tr :class="{'d-none': favorites.length}">
                    <td class="text-center">我的最愛是空的</td>
                  </tr>
                </tbody>
              </table>
              <button class="btn btn-outline-danger btn-block"
               :class="{'d-none': !favorites.length}"
               data-toggle="modal" data-target="#delFavoriteModal">
                刪除全部
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>

    <router-view></router-view>
        

    <!-- footer -->
    <div class="footer bg-dark py-3 text-dark text-center" style="background-color: #8674A1 !important">
      <div class="copyright">
        ⓒ 圖片皆取自網路 版權歸原作者所有
        <br>此作品僅供面試使用
      </div>
    </div>

    <!-- delFavoriteModal -->
    <div class="modal fade" id="delFavoriteModal" tabindex="-1" role="dialog"
     aria-labelledby="delFavoriteModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger text-light">
            <h5 class="modal-title" id="delFavoriteModalLabel">刪除 全部我的最愛</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否<strong class="text-danger">刪除 全部我的最愛</strong> (刪除後將無法回復)
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-outline-danger" data-dismiss="modal"
             @click.prevent="removeFavorite('', true)">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '@/components/AlertMessage.vue';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('alertMessageModules', ['messages']),
    ...mapGetters('cartModules', ['carts', 'cartsLength', 'isCartShow']),
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength']),
  },
  methods: {
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    removeFavorite(favorite, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: favorite, delall });
    },
    ...mapActions('cartModules', ['getCart', 'showCart']),
    ...mapActions('favoriteModules', ['getFavorite']),
  },
  components: {
    Alert,
  },
  created() {
    this.$store.dispatch('cartModules/getCart');
    this.$store.dispatch('favoriteModules/getFavorite');
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/_custom.scss';

// navbar
.logo {
  background-color: transparent;
  box-shadow: none;
  font-size: 1.25rem;
  font-weight: bold;
}
.dropdown-menu {
  z-index: 9999;
}

.cart, .favorite {
  float: right;
  margin-left: 0.25rem;
}

.cart-btn, .favorite-btn {
  float: right;
  position: relative;
  background-color: transparent;
  text-align: right;
  font-size: inherit;
  .badge {
    position: absolute;
    top: auto;
    bottom: 2px;
    right: -1px;
  }
}

.favorite-list {
  &:hover, &:active {
    background-color: #f0f0f0;
    text-decoration: underline;
  }
  .favorite-list-delbtn:hover, .favorite-list-delbtn:active {
    i {
      font-size: 1.25rem;
    }
  }
}

// footer
.footer {
  margin: 0;
  padding: 2rem 2rem 0;
  line-height: 1.5rem;
  > li {
    flex: 1 1 0;
    margin-bottom: 2rem;
    text-align: center;
  }
}
.footer-title {
  margin-bottom: 1.25rem;
  font-weight: bold;
}
.copyright {
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  text-align: center;
}
</style>
