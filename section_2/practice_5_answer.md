- 根据注释要求，分别在相应的位置添加如下两段代码：
- 1.第一段

        if(all_scores['李鉴学'][0] > all_scores['李鉴学'][1])
        {
            highest_score = all_scores['李鉴学'][0];
        }
        else
        {
            highest_score = all_scores['李鉴学'][1];
        }

- 2.第二段

        if(highest_score < all_scores['李鉴学'][2])
        {
            highest_score = all_scores['李鉴学'][2];
        }