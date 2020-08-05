<template>
    <div class="navigation center">
        <h1 class="navigation_h1">New Arrivals</h1>
        <nav class="product_nav">
            <ul class="breadcrumbs">
                <li class="breadcrumbs_li"><a class="breadcrumbs_a" href="index.html">home</a></li>
                <li class="breadcrumbs_li"><a class="breadcrumbs_a" href="">/men</a></li>
                <li class="breadcrumbs_li"><a class="breadcrumbs_a breadcrumbs_a_active" href="">/new arrivals</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .navigation{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 148px;
    background-color: #f8f3f4;
    .navigation_h1{
        font-size: 24px;
        font-weight: 900;
        color: $color-site-active;
        text-align: center;
        line-height: 20px;
        text-transform: uppercase;
    }
    .breadcrumbs{
        display: flex;
        list-style-type: none;   
        .breadcrumbs_a{
            font-size: 14px;
            font-weight: 300;
            color: #636363;
            text-align: center;
            line-height: 20px;
            text-transform: uppercase;
        }
        .breadcrumbs_a_active{
            font-weight: bold;
            color: $color-site-active;
        }
        .breadcrumbs_a:hover{
            color: $color-site-active;
        }
    }
}

</style>