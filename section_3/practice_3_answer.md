- 在第14行添加如下代码：

        for(var i = 0; i < all_scores.length; i ++)
        {
            for(var j = 0; j < all_scores[i].length; j ++)
            {
                if(highest_score < all_scores[i][j])
                {
                    highest_score = all_scores[i][j];
                }
            }
        }