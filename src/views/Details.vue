<template>
  <div class="about">
    <el-carousel id="carousel" :interval="6000" type="card" height="400px">
      <el-carousel-item v-for="event in events" :key="event.name">
        <h3 text="2xl" justify="center">{{ event.time }}</h3>
        <h3 text="2xl" justify="center">{{ event.desc }}</h3>
        <h5>{{ event.detailed }}</h5>
      </el-carousel-item>
    </el-carousel>
    <el-row class="info">
      <strong>Food</strong><br/>
      Classic stonebaked pizzas alongside fried chicken and other sides.<br>
      The menu caters for vegetarians, vegans and other dietary requirements.<br>
      Food will be served family style at 6pm. 
    </el-row>
    <el-row class="info">
      <strong>Drinks</strong><br/>
      You will recieve a drinks-token upon arrival that you can exchange for a free drink on us.<br>
      We'll have access to a private bar in the Yurt with cider and beer on tap, as well as standard bar options wtih non-alcoholic drinks.
    </el-row>
    <el-row class="info">
      <strong>Attire</strong> <br/>
      We request smart casual but feel free to dress up more - we will! 
    </el-row>
    
  </div>
  
</template>

<script>
const events = [
  {
    name: 'Family',
    time: '3pm',
    desc: 'Family Hour',
    detailed: 
    "We're having an hour for our family to arrive so we can spend some time with close family whom have travelled far to see us, and to get some early emotions out of the way!",
  },
  {
    name: 'Friend',
    time: '4pm',
    desc: 'General Arrival Time',
    detailed: 'We are not doing a traditional ceramony and will both be present to greet you as you arrive, and there will not be any reserved seating so feel free!',
  },
  {
    name: 'Vows',
    time: '5pm',
    desc: 'Vow renewal',
    detailed: "When we got married last year we didn't have the chance to write any vows so we'd like to take this opportunity to share a bit about ourselves with our loved ones.",
  },
  {
    name: 'Food',
    time: '6pm',
    desc: 'Dinner is served',
    detailed: 'We will be pre-paying for a "meal" per persons that RSVP 4 weeks before the even - the food will be buffet style but the amount of food will still be proportional.',
  },
  {
    name: 'Party',
    time: '7pm',
    desc: 'The party starts!',
    detailed: '',
  },
  {
    name: 'Fin',
    time: '1am',
    desc: 'Fin',
    detailed: 'It has to finish sometime...',
  }
];


export default {
  data(){
    return{
      events
    }
  }
}
</script>

<style scoped>
.el-row{
  padding-bottom:15px;
}

#carousel{
  padding-bottom:30px;
}

.el-carousel__item h3 {
  color: rgb(225, 235, 228);
  opacity: 0.75;
  line-height: 30px;
  margin: 0;
  text-align: center; 
}

.el-carousel__item h5 {
  color: rgb(225, 235, 228);
  opacity: 0.75;
  margin-left:15px;
  margin-right:15px;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgb(37,88,53);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(95,64,111);
}
</style>
