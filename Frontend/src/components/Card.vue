<template>

<div class="__wrapper"> 
   <div v-for="contents in content" :key="contents._id" class="__card">
      <div class="card__header" :style="{ 'background-image': 'url(' + contents.imagem + ')' }">
        <span>{{contents.title}}</span>
      </div>
      <div class="card__description">
        <p>{{contents.description}}</p>
        <div class="autordate">
         <p class="autor">{{contents.autor}}-</p>
         <p class="date">{{contents.createdAt.slice(0,10)}}</p>
        </div>
      </div>
      <a :href="'/post/' + contents._id">
        <button class="learn-more">
           <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
          </span>
         <span class="button-text">Learn More</span>
      </button>
      </a>
    </div>  
</div>
</template>
<script>
export default {
    props:{
        content:{
            type:String,
            default:String
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
.__wrapper{
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 12px;
}




.__card {
  position: relative;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.2);
  margin: 50px 100px 0 2px;
  
}


.__card .card__header {
  position: relative;
  transition: transform .5s ease;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
}
.__card .card__header:hover{
  transform: scale(1.1);
}

.__card .card__header span {
  position: absolute;
  top: 5%;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  padding: 5px;
  box-shadow: 0 0 56px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  border-radius: 0 5px 5px 0;
}

.__card .card__description h1 {
  
  
  font-size: 1.375em;

}

.__card .card__description {

  width: 250px;
  overflow: hidden;
  height: 200px;
  text-overflow: ellipsis;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;



}


.__card button {
  position: absolute;
  bottom: -25px;
  right: 0;
  border: none;
  margin-top: 20px;
  align-self: flex-end;
  font-size: 18px;
  border-radius: 5px;
}
.autordate{
  display: flex;
}
.date{
  font-weight: bold;
  margin-left: 5px;
  font-size: 0.74em;
}
.autor{
    font-size: 0.74em;
    font-weight: bold;
    color: #ff4e00;
}
span{
  font-family: 'Roboto Condensed' , sans-serif;
}


button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
button.learn-more {
  width: 12rem;
  height: auto;
}
button.learn-more .circle {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(4%, #58f17b), color-stop(93%, #16cd6f)) no-repeat;
  background: linear-gradient(-180deg, #58f17b 4%, #16cd6f 93%) no-repeat;
  border-radius: 1.625rem;
}
button.learn-more .circle .icon {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
button.learn-more .circle .icon.arrow {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
button.learn-more .button-text {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: linear-gradient(-180deg, #58f17b 4%, #16cd6f 93%) no-repeat;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: #fff;
  -webkit-transform: translate(1rem, 0);
          transform: translate(1rem, 0);
}
button:hover .button-text {
  color: #fff;
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}

</style>