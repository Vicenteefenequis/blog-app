<template>

<div class="__wrapper"> 
   <div v-for="contents in content" :key="contents._id" class="__card">
      <div class="card__header" :style="{ 'background-image': 'url(' + contents.imagem + ')' }">
        <span>{{contents.title}}</span>
      </div>
      <div class="card__description">
        <p>{{contents.description}}</p>
        <p>{{contents.autor}}</p>
        <p>{{contents.createdAt.slice(0,10)}}</p>
      </div>
      <a :href="'/post/' + contents._id">
      <button>Leia mais</button>
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
  bottom: -15px;
  right: 0;
  padding: 5px 15px;
  background-color: lightgreen;
  border: none;
  margin-top: 20px;
  align-self: flex-end;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 0 56px rgba(0, 0, 0, 0.2)
}
</style>