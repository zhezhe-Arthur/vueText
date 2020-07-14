<template>
    <div>
        <van-search 
            shape="round" 
            placeholder="请输入搜索关键词" 
            :clearable='true'
            show-action
            @input="inputSearch"
            v-model="dataList"
            :autofocus='true'>
        </van-search>
        <!-- <div v-for="(v, x) in showSearchList" :key="x">{{v}}</div> -->
        <van-cell :title="v" v-for="(v, x) in showSearchList" :key="x" icon="contact" />
    </div>
</template>

<script>
export default {
    name: 'fuzzySearch',
    data() {
        return {
            dataList: '',
            showSearchList: [],
            searchData: [],
            valueSearch: [
                {name: '小黑', number: '324545'},
                {name: '小蓝', number: '538254'},
                {name: '小紫', number: '213713'},
                {name: '小绿', number: '423545'},
                {name: '小白', number: '643408'},
                {name: '小灰', number: '139234'},
                {name: '小红', number: '320112'},
                {name: '小黄', number: '980231'},
                {name: '小青', number: '454329'},
            ]
        }
    },
    created() {
       this.addressDataRemould()
    },
    methods: {
        // 数据重新排列
        addressDataRemould () {
            for (let x = 0; x < this.valueSearch.length; x++) {
                // 组建关键字数组
                this.searchData.push([this.valueSearch[x].name + this.valueSearch[x].number])
            }
        },
  
        // 搜索
        inputSearch () {
            if (this.dataList === '') {
                this.showSearchList = []
                return
            }
            this.showSearchList = []
            let itReg = new RegExp(this.dataList) // 获取搜索输入框里的数据正则
            for (let v = 0; v < this.searchData.length; v++) {            
                if (this.searchData[v][0].match(itReg)) {
                    this.showSearchList.push(this.searchData[v][0]) // 搜索成功的数据
                }
            }
        }
    }
}
</script>
<style>
    .titleFont {
        font-size: .9375rem;
        line-height: 2.375rem;
        font-weight:400;
        color:rgba(34,34,34,1);
}
</style>