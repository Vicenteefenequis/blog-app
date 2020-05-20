<template>
    <div>
        <Content/>
        <Banner/>
        <Section/>
    </div>


</template>




<script>
import Content from './Content'
import Banner from './Banner'
import Section from './Section'
    export default { 
        name: 'Allcontent',
        components: {
            Content,
            Banner,
            Section
        }
    }
</script>