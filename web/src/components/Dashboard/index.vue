<template>
  <div
    style='height: calc(100vh - 100px); position: relative;'
  >
    <button v-if="!user" @click='login'>Login</button>
    <span v-if="user">{{ user.name }} {{user.x}}</span>
    <div
      style='height: 100%; border: 1px solid black; position: relative;'
    >
      <div
        v-if="user"
        :style="`position: absolute; height: 1%; width: 1%; background: red; left: ${user.x}%; top: ${user.y}%;`"
      >
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'Dashboard',
  data () {
    return {
      socket: null,
      user: {
        name: 'Murilo',
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    this.socket = io('http://localhost:3000', {
      query: {
        user: navigator.userAgent.toLowerCase(),
        navigator: navigator
      }
    })
    document.addEventListener('keydown', this.move)
  },
  methods: {
    move (e) {
      if (!this.user) {
        return
      }
      const code = e.keyCode

      if (code === 37) {
        this.user.x -= this.user.x > 0 ? 1 : 0
      }
      if (code === 38) {
        this.user.y -= this.user.y > 0 ? 1 : 0
      }
      if (code === 39) {
        this.user.x += this.user.x < 99 ? 1 : 0
      }
      if (code === 40) {
        this.user.y += this.user.y < 99 ? 1 : 0
      }
    },
    login () {
      this.user = {}
      this.user.name = prompt('Your name')
      this.user.x = 0
      this.user.y = 0
    }
  }
}
</script>
