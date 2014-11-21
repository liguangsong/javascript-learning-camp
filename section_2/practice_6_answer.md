- 在第15行添加如下代码：

        if(all_scores[stu_name][0] > all_scores[stu_name][1])
        {
            highest_score = all_scores[stu_name][0];
        }
        else
        {
            highest_score = all_scores[stu_name][1];
        }
        if(highest_score < all_scores[stu_name][2])
        {
            highest_score = all_scores[stu_name][2];
        }