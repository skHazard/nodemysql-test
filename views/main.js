/**
 * Ajax requests and rendering data to ejs page
 */

function getData() {
    $.ajax({
        url: '/inventory/',
        method: 'GET',
        success: (res) => renderData(res),
        error: (err) => console.log(err)
    })
}

function renderData(data) {
    var bodyEl = $('.inventory-list');
    var innerHtml = '';
    data.forEach((item, index) => {
        innerHtml += `<tr class="inventory-list-${item.id}">
            <td>${index + 1}</td>
            <td><input type="text" class=" form-control inventory-name-${item.id}" value="${item.name}"></td>
            <td><textarea class="form-control inventory-desc-${item.id}" rows="5">${item.description}</textarea></td>
            <td>
                <div class="btn-group-sm">
                    <button type="button" class="btn btn-primary edit-button" data-id=${item.id}>Edit</button>
                    <button type="button" class="btn btn-primary delete-button" data-id=${item.id}>Delete</button>
                </div>
            </td>
        </tr>`
    });

    innerHtml += `<tr class="inventory-list-x">
        <td>New Item</td>
        <td><input type="text" class="form-control inventory-name-x"></td>
        <td><textarea class="form-control inventory-desc-x" rows="5"></textarea></td>
        <td>
            <div class="btn-group-sm">
                <button type="button" class="btn btn-primary add-button">Add</button>
            </div>
        </td>
    </tr>`;

    bodyEl.html(innerHtml);

    $('.edit-button').click((e) => {
        var id = $(e.currentTarget).data('id');
        var data = {
            Name: $(`.inventory-name-${id}`).val(),
            Description: $(`.inventory-desc-${id}`).val(),
            id
        };

        $.ajax({
            url: `/inventory/${id}`, 
            method: "PUT",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: (res) => console.log(res),
            error: (err) => console.log(err)
        });
    });

    $('.delete-button').click((e) => {
        var id = $(e.currentTarget).data('id');

        $.ajax({
            url: `/inventory/${id}`, 
            method: "DELETE",
            success: (res) => getData(),
            error: (err) => console.log(err)
        });
    });

    $('.add-button').click((e) => {
        var data = {
            Name: $(`.inventory-name-x`).val(),
            Description: $(`.inventory-desc-x`).val()
        };

        $.ajax({
            url: `/inventory/`, 
            method: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: (res) => getData(),
            error: (err) => console.log(err)
        });
    });
}

getData();
