<template>
  <div class="js-accordion" v-cloak>
    <button class="js-accordion--trigger" type="button" :class="{ '_state-open': isOpened }" @click="accordionToggle()">
      <slot class="title" name="title"></slot>
    </button>
    <transition name="js-accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave"
                @leave="leave">
      <div class="js-accordion--target" :class="{ '_state-open': isOpened }" v-if="isOpened">
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpened: false
      };
    },

    methods: {
      accordionToggle: function () {
        this.isOpened = !this.isOpened;
      },
      beforeEnter: function (el) {
        el.style.height = '0';
      },
      enter: function (el) {
        el.style.height = el.scrollHeight + 'px';
      },
      beforeLeave: function (el) {
        el.style.height = el.scrollHeight + 'px';
      },
      leave: function (el) {
        el.style.height = '0';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .js-accordion {
    & + .js-accordion {
      margin-top: 18px;
    }

    button {
      background-color: #EEF0F3;
    }

    .header {
      display: flex;
      align-items: center;
      line-height: 1;

      .q-count {
        font-size: 33px;
        margin-top: -5px;
      }

      .q {
        font-size: 14px;
        line-height: 1.5;
        margin-left: 15px;
      }

    }

    .body {
      margin: 20px;
    }

    &:last-child {
      border-bottom-width: 1px;
    }

    &--trigger {
      position: relative;
      display: block;
      width: 100%;
      transition: all 0.2s ease-in;
      color: #000;
      display: block;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      padding: 14px 55px 14px 22px;
      outline: none;
      border: none;
      cursor: pointer;

      &:after {
        display: inline-block;
        width: 15px;
        height: 15px;
        border: solid transparent;
        content: "";
        position: absolute;
        top: 40%;
        right: 1em;
        @include tablet() {
          right: 1.5em;
        }
        margin-top: -5px;
        transition: all .8s ease-in;

        border-bottom: solid 2px #697b91;
        border-right: solid 2px #697b91;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &._state-open {
        text-decoration: none;

        &:after {
          transform: rotateX(180deg) rotate(45deg);
          margin-top: 5px;
        }
      }

      &:hover {
        text-decoration: none;
      }
    }

    &--target {
      overflow: hidden;
      transition: height 1s ease-in-out;
    }

    &--body {
      padding: 30px;
    }

    &-enter-active {
      animation-duration: 1s;
      animation-fill-mode: both;
      /*animation-name: js-accordion--anime__opend;*/
    }

    &-leave-active {
      animation-duration: 1s;
      animation-fill-mode: both;
      /*animation-name: js-accordion--anime__closed;*/
    }
  }

  @keyframes js-accordion--anime__opend {
    0% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes js-accordion--anime__closed {
    0% {
      opacity: 1;
    }

    100% {
      opacity: .8;
    }
  }

</style>
