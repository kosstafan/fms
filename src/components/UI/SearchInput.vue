<template>
    <input
        :value="modelValue"
        type="text"
        class="input"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
    />
</template>
<script>
    export default {
        props: {
            placeholder: {
                type: String,
            },
            modelValue: {
                type: String,
            },
        },

        methods: {
            onInput(event) {
                this.$emit("update:modelValue", event.target.value);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .input {
        min-width: 845px;
        min-height: 48px;
        background: #ffffff;
        border: 2px solid #ebebeb;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 15px;
        outline: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #aeaeae;
        &::-webkit-input-placeholder {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #aeaeae;
        }
        &::-moz-placeholder {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #aeaeae;
        } /* Firefox 19+ */
        &:-moz-placeholder {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #aeaeae;
        } /* Firefox 18- */
        &:-ms-input-placeholder {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #aeaeae;
        }
    }
</style>
