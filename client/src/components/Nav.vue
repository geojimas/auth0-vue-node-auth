<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div v-if="isAuthenticated" class="me-auto mb-lg-0">
          <!-- <img :src="user.picture" alt="User's profile picture" width="50" /> -->
          <h5>{{ user.nickname }}</h5>
          <h6>{{ user.email }}</h6>
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
        <ul v-if="isAuthenticated" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
        </ul>
        <ul v-if="isAuthenticated" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/external">External API</router-link>
          </li>
        </ul>
        <div class="d-flex" v-if="!isAuthenticated && !loading">
          <div>
            <button @click.prevent="loginWithPopup" class="btn btn-outline-success" type="submit">
              Login with popup
            </button>
          </div>
          <div>
            <button @click.prevent="login" class="btn btn-outline-success" type="submit">
              Login
            </button>
          </div>
        </div>
        <div v-else>
          <div>
            <button @click.prevent="logout" class="btn btn-outline-danger" type="submit">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Nav',
  setup() {
    const router = useRouter()
    const auth = inject('Auth')
    //const userDetalis = computed(() => auth.user.data)

    const login = () => {
      auth.loginWithRedirect()
    }

    const loginWithPopup = () => {
      auth.loginWithPopup()
    }

    const logout = () => {
      auth.logout()
      router.push({ path: '/' })
    }

    return {
      ...auth,
      login,
      loginWithPopup,
      logout,
      //userDetalis
    }
  },
}
</script>
