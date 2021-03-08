<template>
    <div>
        <div class="contentItem">
            <div class="textTitle">
                {{title}}
            </div>
            <div class="navBtn">
                <div class="item" v-for="item in itemList" :key="item.label" @click="loadPage({title:item.label,route:item.route})">
                    <svg t="1614240683864" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="93904" width="63" height="63"><path d="M254.72 430.272c72.064 0 145.92 19.392 219.712 191.168l75.52 168.512 178.56 14.72-34.944-88.192s2.624-11.52 34.88-11.52c32.32 0 60.544 84.992 74.24 113.856 0 0 45.76 11.456 45.76 69.12 0 57.6-38.144 72.064-85.376 72.064h-321.28s-41.152-16.512-101.504-137.6c-55.744-112.064-67.776-136.384-69.248-139.392l-0.128-0.32-51.904 30.912 122.88 225.472H0s34.368-370.88 90.368-437.824C146.56 434.24 219.776 430.272 254.72 430.272z m441.344 43.328L1024 605.632s-131.584 202.88-148.608 200.768c-17.024-2.176-4.48-52.608-4.48-52.608l89.536-126.72-243.84-105.28L599.68 703.36c-39.68-52.608 11.328-118.144 37.44-143.872 26.048-25.728 58.88-85.888 58.88-85.888zM416.064 64c100.48 0 181.952 80.192 181.952 179.008 0 98.88-81.472 179.136-181.952 179.136S234.112 341.888 234.112 243.008C234.112 144.192 315.52 64 416 64z" p-id="93905" fill="#73B9FF"></path></svg>
                    <span>{{item.label}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            itemList:{
                type:Array,
                default:[]
            },
            title:{
                type:String,
                default:'基本信息'
            }
        },
        
    }
</script>

<style scoped>
    .contentItem{
        height: 3.62rem;
        margin-bottom: 0.42rem;
    }
    .textTitle{
        width: 1.34rem;
        height: 0.48rem;
        margin-top: 0.32rem;
        line-height: 150%;
        font-size: 0.32rem;
    }
    .navBtn{
        display: flex;
        height: 2.82rem;
        padding: 0 0.46rem;
        align-items: center;
        justify-content: space-between;

    }
    .navBtn>.item{
        display: flex;
        flex-direction: column;
    }
    .navBtn>.item .icon{
        margin-bottom: 0.18rem;
    }
    .navBtn>.item span{
        width: 1.12rem;
        height: 0.42rem;
        color: rgba(80, 80, 80, 1);
        font-size: 0.28rem;
        line-height: 150%;
        text-align: left;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>