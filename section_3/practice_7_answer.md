- 在第15行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
              if(stu_names[i] == stu_name)
              {
                     for(var j = 0; j < all_scores[stu_name].length; j ++)
                     {
                         console.log(all_scores[stu_name][j]);
                     }
              }
        }