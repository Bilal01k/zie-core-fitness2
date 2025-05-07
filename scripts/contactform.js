 // ajax
 $("#contactForm").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxd_JLcrBcti3yyLn2zdZ7bMwBhQkfTF700Xx0GftNO7tkHxTSy8sC_utpd5UtLLKtTfA/exec",
        data:$("#contactForm").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})