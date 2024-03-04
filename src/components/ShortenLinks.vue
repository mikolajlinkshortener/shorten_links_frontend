<template >

    <div class="center">
        <div class="margin">
            <form>
                <div class= "center_horizontally">
                    <span id="center_ai">center_ai</span>
                </div>
                <div class= "center_horizontally">
                    <span id="title">Short link</span>   
                </div>
                <div>
                    <label for="fname">Link to shortcut</label>
                    <input type="text" v-model="url" />
                </div>
                <div class="center_horizontally">
                    <button type="button" @click="sendUrl">Shorten-it</button>
                </div>
                <div class="in_line">
                <label>{{urlResult}}</label>
                <button class="rigth" type="button">copy</button>
                </div>
            </form>
        </div>
    </div>

</template>
<script>
import axios from 'axios'

export default {
  data() {
    return { 
        url: '',
        urlResult: ''
    }
  },
methods: { 
    sendUrl(event) {
        axios.post('short_links/', {"link": this.url})
        .then((response) => {
            var baseUrl = window.location.origin
            this.urlResult = baseUrl +"/"+ response.data.short_link
        })
        .catch((error) => {
        
        })
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
#title {
    font-size: 1.5em;

    font-weight: bold;
}
.margin{
    margin: 25px;
}
body{
    background-color: #ebedf0;
}
.center {
  /* border: 5px solid; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  width: 40%;
  height: 40%;
  background-color: #ffffff;
}
.center_horizontally{
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}
.in_line{
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    padding: 15px;
    background-color: #e6e3e3;
    width: 92%;
}
.rigth{
    float: right;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 100%;  
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}

</style>