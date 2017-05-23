<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div id="loader8"></div>

    <div id="code">
      <span class="comments">/**</span><br />
      <span class="space"/><span class="comments">* We are both XXX Unversity  business administration and programmers,</span><br />
      <span class="space"/><span class="comments">* so I write some code to show my love to you.</span><br />
      <span class="space"/><span class="comments">*/</span><br />
      Boy i = <span class="keyword">new</span> Boy(<span class="string">"boyname"</span>);<br />
      Girl u = <span class="keyword">new</span> Girl(<span class="string">"girlname"</span>);<br />
      <span class="comments">// April 28, 2012, I told you I love you. </span><br />
      i.love(u);<br />
      <span class="comments">// but..., what you said that meaning we are still good friends.</span><br />
      u.sayOtherthing();<br />
      <span class="comments">// Since then, I ask you for the reason.</span><br />
      <span class="keyword">var</span> reason=i.ask(u);<br />
      <span class="comments">// you say we were not understand enough for each other .</span><br />
      $("body").append(reason);<br />
      <span class="comments">// You say that it is too quickily to turn our relation of lover.</span><br />
      <span class="comments">// And take care of u and our love.</span><br />
      i.takeCareOf(u);<br />
      <span class="comments">// So I keep waiting and I have confidence that you will.</span><br />
      <span class="keyword">boolean</span> isAccept = <span class="keyword">false</span>;<br />
      <span class="keyword">while</span> (isAccept) {<br />
      <span class="placeholder"/>i.waitFor(u);<br />
      <span class="placeholder"/><span class="comments">// I think it is an important decision</span><br />
      <span class="placeholder"/><span class="comments">// and you should forgot the unhappy things that happended before.</span><br />
      <span class="placeholder"/>isAccept = u.thinkOver();<br />
      }<br />
      <span class="comments">// After a please sound of accept, we will live happily ever after.</span><br />
      u.accept(i);<br />
      i.liveHappilyWith(u);<br />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      document.getElementById("code").typewriter(200);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*旋转圆环*/
  #loader8 {
    margin: 30px 50px;
    float: left;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 128, 0, 0.2);
    border-right: 1.1em solid rgba(255, 128, 0, 0.2);
    border-bottom: 1.1em solid rgba(255, 128, 0, 0.2);
    border-left: 1.1em solid rgba(255, 128, 0, 1);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }

  #loader8,
  #loader8:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /**/
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
