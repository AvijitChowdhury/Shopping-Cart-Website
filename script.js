
//minus btn
function minusBtn(inputid,displayid){
    const inputNum=document.getElementById(inputid).value;
    const num=parseFloat(inputNum);
    const total=num-1;
    document.getElementById(inputid).value=total;

    const purchasetext=document.getElementById(displayid).innerText;
    const purchaseAmount=parseFloat(purchasetext);
    document.getElementById(displayid).innerText=purchaseAmount/2;


}
//plus-btn
function plusBtn(inputid1,displayid){
    const inputNum=document.getElementById(inputid1).value;
    const num=parseFloat(inputNum);
    const total=num+1;
    document.getElementById(inputid1).value=total;

    const purchasetext=document.getElementById(displayid).innerText;
    const purchaseAmount=parseFloat(purchasetext);
    document.getElementById(displayid).innerText=purchaseAmount*2;


}


//minus1 btn works
const minusbtn1=document.getElementById('minus-btn');
minusbtn1.addEventListener('click',function(){
   minusBtn('inputNum','price-1');

})


//plus btn works
const plusbtn1=document.getElementById('plus-btn');
plusbtn1.addEventListener('click',function(){
    plusBtn('inputNum','price-1');
    

})


const minusbtn2=document.getElementById('minus-btn2');
minusbtn2.addEventListener('click',function(){
   minusBtn('inputNum2','price-2');

})


//plus btn works
const plusbtn2=document.getElementById('plus-btn2');
plusbtn2.addEventListener('click',function(){
    plusBtn('inputNum2','price-2');
    

})

//checkout btn work

document.getElementById('checkout').addEventListener('click',function(){
    const input1=parseFloat(document.getElementById('price-1').innerText);
    const input2=parseFloat(document.getElementById('price-2').innerText);

    const vat= parseFloat(document.getElementById('vat').innerText);

    document.getElementById('subtotal').innerText=input1+input2;
    document.getElementById('total').innerText=input1+input2+vat;
})

document.getElementById('remove1').addEventListener('click',function(){
    document.getElementById('area1').style.display='none';
  
})

document.getElementById('remove2').addEventListener('click',function(){
    document.getElementById('area2').style.display='none';

})







