<template>
  <div>
    <div class="mb-5">
      <h1>External API</h1>
      <p>
        Call an external API using an access token, and the API will validate it using the API's
        audience value.
      </p>
    </div>

    <div class="result-block-container">
      <div :class="['result-block', executed ? 'show' : '']">
        <h6 class="muted">Result</h6>
        {{ events }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, inject, onBeforeMount } from 'vue'

export default {
  name: 'Api',

  setup() {
    const events = ref([])
    const executed = ref(false)
    const auth = inject('Auth')

    onBeforeMount(async () => {
      const accessToken = await auth.getTokenSilently()
      try {
        const { data } = await axios.get('http://localhost:5000/events', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        events.value = data
        executed.value = true
      } catch (error) {
        console.log(error)
      }
    })

    return {
      events,
      executed,
    }
  },
  //   data() {
  //     return {
  //       apiMessage: null,
  //       executed: false,
  //     }
  //   },
  //   inject: ['Auth'],
  //   methods: {
  //     async callApi() {
  //       const accessToken = await this.Auth.getTokenSilently()
  //       try {
  //         const { data } = await axios.get('http://localhost:5000/events', {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         this.apiMessage = data
  //         this.executed = true
  //       } catch (e) {
  //         this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
  //       }
  //     },
  //   },
}
</script>
