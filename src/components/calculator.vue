<template>
    <div>
        <div class="calculatorAll">
            <div class="displayInfo">
                <div class="displayInput">
                    <input type="text" class="displayInputA" disabled v-model="resultInput">
                    <input type="text" class="displayInputB" autofocus="autofocus" v-model="resultDisplay">
                </div>
                <div class="keyboardInfo">
                    <div class="keyNumber">
                        <div class="keyNumberA">
                            <button class="keybutton" @click="infoadd(7)">7</button>
                            <button class="keybutton" @click="infoadd(8)">8</button>
                            <button class="keybutton" @click="infoadd(9)">9</button>
                            <button class="keybutton" @click="infoadd('+')">+</button>
                            <button class="keybutton" @click="infoadd('-')">-</button>
                        </div>
                        <div class="keyNumberA">
                            <button class="keybutton" @click="infoadd(4)">4</button>
                            <button class="keybutton" @click="infoadd(5)">5</button>
                            <button class="keybutton" @click="infoadd(6)">6</button>
                            <button class="keybutton" @click="infoadd('x')">x</button>
                            <button class="keybutton" @click="infoadd('÷')">÷</button>
                        </div>
                        <div class="keyNumberA">
                            <button class="keybutton" @click="infoadd(1)">1</button>
                            <button class="keybutton" @click="infoadd(2)">2</button>
                            <button class="keybutton" @click="infoadd(3)">3</button>
                            <button class="keybutton" >C</button>
                            <button class="keybutton" >←</button>
                        </div>
                        <div class="keyNumberA">
                            <button class="keybutton" @click="infoadd(0)">0</button>
                            <button class="keybutton" @click="infoadd('.')">.</button>
                            <button class="keybuttoninfo">确定</button>
                            <button class="keybuttoninfo">取消</button>
                        </div>
                    </div>
                </div>         
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'calculator',
    data() {
        return {
            resultInput: 0,
            resultDisplay: ''
        }
    },
    methods:{
        infoadd(x) {
            this.resultDisplay += x
        }
    }
}
</script>
<style>
    .calculatorAll {
        height: 17rem;
        width: 250px;
        background-color: #eee7e7;
        
    }
    .displayInfo {
        height: 4.25rem;
        width: 100%;
        /* background-color: #eee7e7; */
    }
    .displayInput{
        position: relative;
        top: 10px;
    }
    
    .displayInput>input {
        background-color: #FFFFFF;
        width: 76%;     
        height: 22px;
        border:#eee7e7;
        text-align: right;
    }
    .displayInputA {
        border-bottom: none;
    }
    .displayInputB {
        border-top: none;
    }
    .keyboardInfo {
        width: 80%;
        height: 10.3rem;
        background-color: #eee7e7;
        position: relative;
        top: 1.26rem;
        margin: 0 auto;
    }
    .keyNumberA {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        position: relative;
        top: 10px;
    }
    .keybutton {
        height: 40px;
        width: 36px;
        background-color: bisque;
        border: 1px solid #f5f5f5;
        border-radius: 3px;
        flex: 1;
    }
    .keybuttoninfo {
        height: 40px;
        width: 56px;
        background-color: bisque;
        border: 1px solid #f5f5f5;
        border-radius: 3px;
        flex: 1;
        position: relative;
        top: 2px;
    }
</style>
