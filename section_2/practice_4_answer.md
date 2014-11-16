- 在第15行添加如下代码：

        for(var i = 0 ; i < all_scores.length; i ++)
        {
            for(var j = 0; j < 3; j ++)
            {
                sum_scores += all_scores[i][j];
            }
        }