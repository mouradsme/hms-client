<template>
    <div class="loader-container">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--main-color)"
            animationDuration=".5s"  />
    </div>
</template>

<script>
export default  {
    data() { 
    }
}
</script>

<style >
.loader-container {
  width: 100%;
  text-align: center;
}
</style>