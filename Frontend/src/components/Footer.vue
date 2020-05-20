<template>
    
    <div id="footer" class="__footer">

    <div>
        <ul>
            <li>Name</li>
            <li>Store</li>
            <li>Subscribe</li>
            <li>About Us</li>
        </ul>
    </div>
    <div>
         <ul>
            <li>Contact US</li>
            <li>Staff</li>
            <li>Advertived</li>
            <li>Reprints</li>
        </ul>
    </div>
    <div>
        <ul>
            <li>Newlestter SIGNUP</li>
            <button class="btn btn-info">SIGN ME UP</button>
        </ul>
    </div>
    </div>

</template>


<style>
.__footer{
    margin-top: 200px;
    height: 250px;
    background-color: #675E5E;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    align-items: center;
}
ul{
    cursor: pointer;
    font-size: 24px;
    list-style: none;
}
ul  button{
    margin-top: 50px;
}
ul li{
    color: cyan;
}
ul li:hover{
    color: cornflowerblue;
}
</style>