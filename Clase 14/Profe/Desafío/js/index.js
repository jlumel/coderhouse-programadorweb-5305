$(document).ready(function() {
  let container = $('<div class="container"></div>');
  let table = $(`
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Género</th>
        <th scope="col">Altura</th>
        <th scope="col">Peso</th>
        <th scope="col">Color de ojos</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody id="tableBody">
    </tbody>
  </table>
  `);

  let row1 = $(`
    <tr style="overflow: hidden;">
    <td>1</td>
    <td>Luke Skywalker</td>
    <td>Hombre</td>
    <td>172 cm</td>
    <td>77 kg</td>
    <td>Azul</td>
    <td style="padding:0">
      <button type="button" class="btn btn-danger">Eliminar</button>
    </td>
    </tr>
  `);

  let row2 = $(`
    <tr style="overflow: hidden;">
    <td>1</td>
    <td>Luke Skywalker</td>
    <td>Hombre</td>
    <td>172 cm</td>
    <td>77 kg</td>
    <td>Azul</td>
    <td style="padding:0">
      <button type="button" class="btn btn-danger">Eliminar</button>
    </td>
    </tr>
`);

  let row3 = $(`
    <tr style="overflow: hidden;">
    <td>1</td>
    <td>Luke Skywalker</td>
    <td>Hombre</td>
    <td>172 cm</td>
    <td>77 kg</td>
    <td>Azul</td>
    <td style="padding:0">
      <button type="button" class="btn btn-danger">Eliminar</button>
    </td>
    </tr>
`);

  container.append(table);
  $("body").append(container);

  let tableBody = $("#tableBody");
  row1.appendTo(tableBody);
  row2.appendTo(tableBody);
  row3.appendTo(tableBody);

  $("button").on("click", removeElementWithAnimation);

  function removeElementWithAnimation(event) {
    let td = $(this).parent();
    let tr = td.parent();

    tr.hide(1000, function() {
      $(this).remove();
    });
  }
});
