- 在第6行添加如下代码：

        for(var i = 0; i < all_math_scores.length; i ++)
        {
            if(highest_score < all_math_scores[i])
            {
                highest_score = all_math_scores[i];
            }
        }