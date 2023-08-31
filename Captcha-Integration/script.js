$(document).ready(function () {
    $("#tabs").tabs();
    $(document).tooltip();
    $("#btnSave").click(createListItem);
    $("#GEN_4").datepicker({ dateFormat: "yy-mm-dd" }).val();
  });
  
  
  function createListItem() {
   listCreationInformation = new SP.ListItemCreationInformation(); 
   listItem = list.addItem(listCreationInformation);
  
   var input_list = $('input');
  
   var id, name, text;
  
   for (var i = 0; i < input_list.length; i++) {
       name = $(input_list[i]).attr('name');
  
       if ($(input_list[i]).attr('type') === 'radio') {
           //text = $(input_list[i]); //this code should be added to in some way!
  
            // I have tried these versions, and none of them will work.
  
           // text =$(input_list[i]).is(':checked');
          // text = $(input_list[i]).prop('checked');
           //text = $(input_list[i].checked('type') & 'radio');
  
       }
       else {
           text = $(input_list[i]).val();
       }
       listItem.set_item(name, text);
    }
    listItem.update(); //Update the List Item
    clientContext.executeQueryAsync(
      Function.createDelegate(this, success),
      Function.createDelegate(this, fail)
     );
   }

   
   const form = document.querySelector('form');

   form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const captchaResponse = grecaptcha.getResponse();
    if(!captchaResponse.length>0){
        throw new Error("Captcha not Complete");
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);
    fetch('http://httpbin.org/post',{
        method: "Post",
        body: URLSearchParams,
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

   });