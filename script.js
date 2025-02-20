const testText=document.querySelector('.test');
const colorPicker=document.querySelector('#favcolor');
const fontSizeInput = document.querySelector('.font-size-input');
const fontType=document.querySelector('.form-select');


colorPicker.addEventListener('input',(e)=>{
    console.log(e.target.value);
    testText.style.color=e.target.value;
})


fontSizeInput.addEventListener('input', (e) => {
    testText.style.fontSize=`${e.target.value}px`;
});


fontType.addEventListener('change', (e) => {
    testText.style.fontFamily = e.target.value;
});