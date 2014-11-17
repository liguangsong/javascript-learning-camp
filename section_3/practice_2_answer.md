- 在第7行添加如下代码：

        for(var i = 0; i < all_math_scores.length; i ++)
        {
            if(all_math_scores[i] > 140)
                count_A ++;
            else if(all_math_scores[i] > 130)
                count_B ++;
            else
                count_C ++;
        }