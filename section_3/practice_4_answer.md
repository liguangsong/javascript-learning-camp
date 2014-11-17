- 在第14行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            if(stu_scores[stu_names[i]] !== undefined)
            {
                stu_names_scores[stu_names[i]] = stu_scores[stu_names[i]];
            }
        }