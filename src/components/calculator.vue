<template>
    <div>
        <div class="calculatorAll">
            <div class="displayInfo">
                <div class="displayInput">
                    <input type="text" class="displayInputA" disabled v-model="resultInput">
                    <input type="text" class="displayInputB" autofocus="autofocus" v-model="resultDisplay">
                </div>
                <div class="promptinfo" v-show="!promptInfoShow"></div>
                <div class="promptinfo" v-show="promptInfoShow">
                    <img src="../assets/prompt.svg" alt="">
                    <span>等式计算顺序仅从左到右</span>
                </div>
                <div class="keyboardInfo">
                    <div class="keyNumber">
                        <div class="keyNumberA keyTop">
                            <button class="keybutton " @click="markInfoadd(7)">7</button>
                            <button class="keybutton " @click="markInfoadd(8)">8</button>
                            <button class="keybutton " @click="markInfoadd(9)">9</button>
                            <button class="keybutton buttonOperator " @click="markInfoadd('+')">+</button>
                            <button class="keybutton buttonOperator " @click="markInfoadd('-')">-</button>
                        </div>
                        <div class="keySpacing"></div>
                        <div class="keyNumberA">
                            <button class="keybutton " @click="markInfoadd(4)">4</button>
                            <button class="keybutton " @click="markInfoadd(5)">5</button>
                            <button class="keybutton " @click="markInfoadd(6)">6</button>
                            <button class="keybutton  buttonOperator" @click="markInfoadd('x')">x</button>
                            <button class="keybutton  buttonOperator" @click="markInfoadd('÷')">÷</button>
                        </div>
                        <div class="keySpacing"></div>
                        <div class="keyNumberA">
                            <button class="keybutton " @click="markInfoadd(1)">1</button>
                            <button class="keybutton " @click="markInfoadd(2)">2</button>
                            <button class="keybutton " @click="markInfoadd(3)">3</button>
                            <button class="keybutton  buttonEmpty" @click='infoEmpty()'>C</button>
                            <button class="keybutton  buttonEmpty" @click='goBack'>←</button>
                        </div>
                        <div class="keySpacing"></div>
                        <div class="keyNumberA">
                            <button class="keybutton " @click="markInfoadd(0)">0</button>
                            <button class="keybutton " @click="markInfoadd('.')">.</button>
                            <button class="keybuttoninfo" @click="markConfirmNumber('1')" >取消</button>
                            <button class="keybuttoninfo" @click="markConfirmNumber('0')">确定</button>
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
            resultInput: null,
            resultDisplay: '',
            resultStatus: null,
            promptInfoShow: false
        }
    },
    watch: {
        resultDisplay() {
            let resultDisplayArr = this.resultDisplay.replace(/÷/g,"+").replace(/-/g,"+").replace(/x/g,"+")
            resultDisplayArr = resultDisplayArr.split('+') // 截出等式数字数组
            if (resultDisplayArr.length) {
                this.resultStatus = resultDisplayArr.length
            }    
            let operatorArr = []
            // 截出等式运算符数组
            let lastResultDisplay = this.resultDisplay.substr( this.resultDisplay.length-1, 1)
            if (lastResultDisplay==='+' || lastResultDisplay==='-' || lastResultDisplay==='x' || lastResultDisplay==='÷') {
                return
            }
            for(let i of this.resultDisplay){
                if (i==='+' || i==='-' || i==='x' || i==='÷') {
                    operatorArr.push(i)
                }
            }
            if (resultDisplayArr.length > 2) {
                this.promptInfoShow = true
            } else {
                this.promptInfoShow = false
            }
            if (resultDisplayArr.length > 1) {
                this.resultInput = resultDisplayArr.reduce((acc,cur,inx,src) => {
                    let valueA = null // 首项
                    let valueB = null // 次项
                    // 上次计算的数
                    if (acc) {
                        valueA = Number(acc)
                    } else {
                        valueA = Number(resultDisplayArr[inx-1])
                    }                        
                    valueB = Number(resultDisplayArr[inx])
                    // 计算它
                    if (operatorArr.length > 0 && valueB) {
                        if (operatorArr[inx-1] === '+') {
                            acc = valueA + valueB
                            return acc
                        }else if (operatorArr[inx-1] === '-') {
                            acc = valueA - valueB
                            return acc
                        }else if (operatorArr[inx-1] === 'x') {
                            acc = valueA * valueB
                            return acc
                        }else if (operatorArr[inx-1] === '÷') {
                            acc = valueA / valueB
                            return acc
                        }
                    }  
                })
            }
           
        }
    },
    methods:{
        markInfoadd(x) { // 显示
            this.resultDisplay += x
        },
        infoEmpty() { // 清空
            this.resultInput = null,
            this.resultDisplay = ''
        },
        goBack() { // 回退
            this.resultDisplay = this.resultDisplay.substring(0,this.resultDisplay.length - 1)
            // 回退到最后一位显示值清零
            if (this.resultStatus === 2) {
                this.resultInput = null
            }
        },
        markConfirmNumber(val) {
            if (val === '0') {
                if (this.resultInput) {
                    this.$emit('closeDialog', this.resultInput);
                } else {
                    this.$emit('closeDialog', this.resultDisplay);
                }
            } else if (val === '1') {
                this.$emit('closeDialog', '0');
            }   
        }
    }
}
</script>
<style>
    .calculatorAll {
        height: 18rem;
        width: 250px;
        background-color: #c2bdbd;
        
    }
    .displayInfo {
        height: 4.25rem;
        width: 100%;
        /* background-color: #c2bdbd; */
    }
    .displayInput{
        position: relative;
        top: 10px;     
    }
    
    .displayInput>input {
        background-color: #FFFFFF;
        width: 76%;     
        height: 20px;
        border:#c2bdbd;
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
        background-color: #c2bdbd;
        position: relative;
        top: 1.26rem;
        margin: 0 auto;
    }
    .keyNumberA {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        position: relative;
        top: 5px;
    }
    .keybutton {
        height: 40px;
        width: 36px;
        background-color: bisque;
        border: 1px solid #f5f5f5;
        border-radius: 3px;
        flex: 1;
        box-shadow: .2px .3px;
        font-weight: bold;
        font-size: 18px;
        /* position: relative;
        top: 8px; */
    }
    .keybuttoninfo {
        height: 40px;
        width: 56px;
        background-color: bisque;
        border: 1px solid #f5f5f5;
        border-radius: 3px;
        flex: 1;
        box-shadow: .2px .3px;
        font-weight: bold;
    }
    .buttonEmpty {
        color: #ff5e67
    }
    .buttonOperator {
        color: #4fbcfe
    }
    .promptinfo {
        height: 10px;
        position: relative;
        top: 12px;
        font-size: 12px;
        color: #409EFF;
    }
    .promptinfo>img {
        height: 15px;
        width: 15px;
        position: relative;
        top: 3px;
    }
    .keySpacing {
        height: 7px;
    }
</style>
