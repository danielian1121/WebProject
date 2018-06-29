

function check_upload() {
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var amount = document.getElementById("amount").value;
    var itemInfo = document.getElementById("itemInfo").value;
    var form1 = document.getElementsByName("form1");
    var category;
    for (var i = 0; i < form1.name.length; i++) {
        if (form1.name[i].checked) {
            category = form1.name[i].value;
            break;
        }
    }
    var hashtag = document.getElementById("hashtag").value;
    var ke_ent = document.getElementById("kf-ent").value;
    var kf_cor = document.getElementById("kf-cor").value;
    var lib = document.getElementById("lib").value;
    var kf_dong = document.getElementById("kf-dong").value;
    var other = document.getElementById("other").value;
}