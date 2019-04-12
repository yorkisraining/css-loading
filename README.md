# 纯CSS实现LOADING

使用方法
```
<link rel="stylesheet" href="loading.css">

<script src="loading.js"></script>
<script type='text/javascript'>
    var loader = new Loading({
        type: 0, // loading类型，0-6
        size: 1, //loading大小，1 == 10rem
        shade: true, //全屏遮罩
        top: '50%', //String 百分比或px
        left: '50%', //String 百分比或px
    });//配置
    loader.init(); //初始化并且显示
    loader.show(); //打开
    loader.hide(); //关闭
</script>
```

**不支持IE低版本，哼￣へ￣**

***若是一个页面有两个以上的loader，遮罩也只加载一层，所有层关闭遮罩才会关闭***