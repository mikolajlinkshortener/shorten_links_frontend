<template >

    <div class="center">
        <div class="margin">
                <div class= "center_horizontally">
                    <h1 id="center_ai">center_ai</h1>
                </div>
                <div class= "center_horizontally">
                    <span id="title">Short link</span>   
                </div>
                <div>
                    <label class="text_color">Link to shortcut</label>
                    <input id="url" type="text" v-model="url" @input="change($event)"/>
                    <div class="error" v-if="!isValid">URL is invalid</div>
                </div>
                <div>
                    <button type="button" class="button" @click="sendUrl">Shorten it</button>
                </div>
                <div class="in_line">
                <a :href=urlResult>{{urlResult}}</a>
                <button class="rigth" type="button" @click="copy"><img src="@/assets/content_copy_black_24dp.svg" /></button>
                </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios'

export default {
  data() {
    return { 
        url: '',
        urlResult: '',
        isValid: true,
        regex: /(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,2048}(\.)?[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
    }
  },
methods: { 
    sendUrl() {
        if (this.isURLValid(this.url)){
        axios.post('short_links/', {"link": this.url})
        .then((response) => {
            var baseUrl = window.location.origin
            this.urlResult = baseUrl +"/"+ response.data.short_link
        })
        .catch((error) => {
        
        })
    }
    },
    copy() {
        navigator.clipboard.writeText(this.urlResult)
    },
    change:function(){

      this.isURLValid(this.url);
    },
    isURLValid: function(inputUrl) {
      this.isValid=   this.regex.test(inputUrl)
      return this.isValid
    }
},
}

</script>

<style>

#center_ai {
    font-size: 3em;
    color: #4a24ac;
    font-weight: bold;
}
#url{
    border: none;
    border-bottom: 1px solid #4a24ac;
}
#title {
    font-size: 1.5em;
    font-weight: bold;
}
.margin{
    margin: 0px, 15px;
}
.button{
  background-color: #4a24ac;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  border-radius: 25px;
}


</style>