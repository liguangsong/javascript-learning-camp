- 在第15行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            if(stu_names[i] == stu_name)
            {
                for(var j = 0; j < all_scores[stu_name].length; j ++)
                {
                    if(j == 0)
                    {
                        console.log(stu_name+'是第'+i+'个学生，他的语文成绩为：'+all_scores[stu_name][j]);
                    }
                    if(j == 1)
                    {
                        console.log(stu_name+'是第'+i+'个学生，他的数学成绩为：'+all_scores[stu_name][j]);
                    }
                    if(j == 2)
                    {
                        console.log(stu_name+'是第'+i+'个学生，他的英语成绩为：'+all_scores[stu_name][j]);
                    }
                }
            }
        }