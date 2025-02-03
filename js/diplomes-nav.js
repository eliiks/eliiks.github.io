let dut = document.getElementById("DUT")
let l3 = document.getElementById("L3")
let mi = document.getElementById("MI")
let tips = document.getElementById("tips_diplome_nav")

let array = [dut, l3, mi]
let selected_index = array.length - 1

let darker_gray = "md:bg-gray-400"
let lighter_gray = "md:bg-gray-300"
let white = "bg-white"

let first_zindex = "z-30"
let second_zindex = "z-20"
let third_zindex = "z-10"

let third_height = "md:h-[65%]"
let second_height = "md:h-[70%]"
let first_height = "md:h-[75%]"

array.forEach((element, index)=> {
    if(window.innerWidth >= 768){
        element.addEventListener("click", () => {
            if(tips.checkVisibility()){ tips.classList.remove("md:block"); }

            let items_colors = [darker_gray, lighter_gray, white];
            let items_zindex = [third_zindex, second_zindex, first_zindex];
            let items_heights = [third_height, second_height, first_height];

            switch(index){
                case 0:
                    items_colors = items_colors.reverse();
                    items_zindex = items_zindex.reverse();
                    items_heights = items_heights.reverse();
                    
                    break;
                case 1:
                    items_colors = [lighter_gray, white, lighter_gray];
                    items_zindex = [second_zindex, first_zindex, second_zindex];
                    items_heights = [second_height, first_height, second_height];
                    break;
                default:
                    break;
            }

            selected_index = index;
            updateClass(items_colors, items_zindex, items_heights);
        })
    }
});

function updateClass(items_colors, items_zindex, items_heights){
    array.forEach((element, index) => {
        element.classList.remove(darker_gray, lighter_gray, white, first_zindex, second_zindex, third_zindex, first_height, second_height, third_height);
        element.classList.add(items_colors[index], items_zindex[index], items_heights[index]);
    })

    if(selected_index == 1){
        array[array.length - 1].classList.add("text-end");
        array[array.length - 2].classList.remove("text-end");
    }else if(selected_index == 0){
        array[array.length - 1].classList.add("text-end");
        array[array.length - 2].classList.add("text-end");
    }else{
        array[array.length - 1].classList.remove("text-end");
        array[array.length - 2].classList.remove("text-end");
    }

}