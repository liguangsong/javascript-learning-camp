- 在第17行添加代码如下：

        for(var i = 0; i < stu_names.length; i ++)
        {
            for(var j = 0; j < all_scores[stu_names[i]].length; j ++)
            {
                if(all_scores[stu_names[i]][j] > 140)
                {
                    scores_A_count ++;
                }
                else if(all_scores[stu_names[i]][j] >= 130)
                {
                    scores_B_count ++;
                }
                else
                {
                    scores_C_count ++;
                }
            }
        }