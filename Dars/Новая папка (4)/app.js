
              var firstMessage = "Сумма займа:<strong>" + summ + " рублей</strong><br>Годовой процент:<strong>" + percent + "%</strong><br>Срок займа<strong>" + srok + " месяцев</strong><br>";
                $("#itog").html(firstMessage);
                for (i = 1; i <= srok; i++) {
                    monthPer = summ * ((percent / 12) / 100);
                    //itog = summ / 12;
                    itog = Math.round(monthPer * 100) / 100;
                    $("#itog").html($("#itog").html() + "<br>Процент за " + i + " месяц равен " + itog + " руб.");
                    ret = ret + itog;
                }
                ret = Math.round(ret + summ);
                $("#itog").html($("#itog").html() + "<br> <h3>Итого:" + ret + " руб</h3>");
            
