- 将第二行修改成如下代码：

        var product_num = (function (a,b)
        {
            var product = a * b;
            return product;
        })(3,5);