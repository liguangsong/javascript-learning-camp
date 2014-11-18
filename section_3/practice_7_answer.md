- 在第14行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            if(stu_names[i] == '李鉴学')
            {
                for(var j = 0; j < all_scores['李鉴学'].length; j ++)
                {
                    if(j === 0)
                    {
                        console.log('第'+i+'个学生的语文成绩是：'+all_scores['李鉴学'][j]+'分');
                    }
                    if(j === 1)
                    {
                        console.log('第'+i+'个学生的数学成绩是：'+all_scores['李鉴学'][j]+'分');
                    }
                    if(j === 2)
                    {
                        console.log('第'+i+'个学生的英语成绩是：'+all_scores['李鉴学'][j]+'分');
                    }
                }
            }
        }