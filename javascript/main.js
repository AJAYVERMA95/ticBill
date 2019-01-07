let number_of_item;

$("select#number_of_item").change(function(){
    number_of_item = $(this).children("option:selected").val();
    // alert("You have selected the country - " + number_of_item);
    let htmlToBeappended = "";
    if(number_of_item){
        $("#itemsInfo").empty();
        for (let index = 0; index < number_of_item; index++) {
            htmlToBeappended += `<div class="form-group col-md-1">
                                    <label for="sl_no">Serial No.</label>
                                    <input disabled type="text" class="form-control" id="sl_no" value="${index+1}">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="goods_description">Good's Description</label>
                                    <input type="text" class="form-control" id="goods_description" placeholder="Description of goods">
                                </div>
                                <div class="form-group col-md-1">
                                    <label for="hsn_code">HSN CODE</label>
                                    <input type="text" class="form-control" id="hsn_code" placeholder="Enter HSN code">
                                </div>
                                <div class="form-group col-md-2 ">
                                    <label for="quantity">QUANTITY</label>
                                    <input type="text" class="form-control" id="quantity" placeholder="Enter quantity">
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="rate">RATE</label>
                                    <input type="text" class="form-control" id="rate" placeholder="Enter rate">
                                </div>
                                `;
        }
        $("#itemsInfo").append(htmlToBeappended);
    }
});