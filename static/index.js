const arrows = document.querySelectorAll(".arrow");
        const container= document.querySelectorAll(".container");

        arrows.forEach((arrow, i) => {
            const ItemNo = container[i].querySelectorAll("img").length;
            let clickitem = 0;
            arrow.addEventListener("click", () => {
                clickitem++;
                if(ItemNo - (5 + clickitem) >= 0){
                    container[i].style.transform = `translateX(${
                        container[i].computedStyleMap().get("transform")[0].x.value
                        - 455}px)`;
                }else{
                    container[i].style.transform = "translateX(0)";
                    clickitem = 0;
                }
            });
        });