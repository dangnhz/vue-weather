<template>
    <div id="hamburger" class="hamburger" @click="toggleMenu">
        <div class="element"></div>
        <div class="element"></div>
        <div class="element"></div>
    </div>
</template>

<script>
    export default {
        name:'hamburger',
        data() {
            return {
                active: false
            }
        },
        methods: {
            toggleMenu() {
                if (!this.active) {
                    
                    this.$el.classList.add('active')
                    this.active = true
                } else {
                    this.$el.classList.remove('active')
                    this.active = false
                }

                this.$emit('toggle-hourly', this.active)
            }
        },
    }
</script>

<style lang="scss" scoped>
.hamburger {
    position: absolute;
    top: 1.2rem;
    right: 1rem;
    z-index: 99;
    cursor: pointer;
    transition: 0.5s;
    .element {
        content: '';
        display: block;
        height: 2px;
        width: 20px;
        background: white;
        margin-bottom: 5px;
        transition: all 0.5s;
        &:nth-child(2){
            width: 10px;
        }
        &:nth-child(3){
            width: 0px;
        }
    }

    &:hover {
        .element:nth-child(3), :nth-child(2) {
            width: 20px;
        }

    }
}

.hamburger.active {
    .element:nth-child(3) {
        display: none;
    }
    .element:nth-child(1) {
        transform: rotate(45deg) translate(5px,5px);
    }
    .element:nth-child(2) {
        width: 20px;
        transform: rotate(-45deg) translate(0,0);
    }
}
</style>