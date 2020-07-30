<template>
    <div>
        <div class="calculatorAll">
            <div class="displayInfo">
                <div class="displayInput">
                    <input type="text" class="displayInputA" disabled v-model="resultInput">
                    <input type="text" class="displayInputB" autofocus="autofocus">
                </div>
                <div class="keyboardInfo">

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
            resultInput: 0
        }
    },
}
</script>
<style>
    .calculatorAll {
        height: 18rem;
        width: 100%;
        background-color: #dbd6d6;
        
    }
    .displayInfo {
        height: 4.25rem;
        width: 100%;
        background-color: #eee7e7;
    }
    .displayInput{
        position: relative;
        top: 10px;
    }
    
    .displayInput>input {
        background-color: #FFFFFF;
        width: 80%;     
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
        height: 12.5rem;
        background-color: #eee7e7;
        position: relative;
        top: 1.8rem;
        /* left: 1.2rem; */
        margin: 0 auto;
    }
</style>
