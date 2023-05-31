var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var contenedor = document.getElementById('contenedor');
var estado = 1; // Estado inicial

function mostrarDia() {
  if (estado !== 1) {
    contenedor.innerHTML = `
  <div style='overflow-x:auto;'>
    <table>
      <tr>
        <th>Fecha</th>
      </tr>
      <tr>
        <th>Hora</th>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Clase</th>
        <th>Precio</th>
      </tr>
      <tr>
        <th>8:00 - 9:00</th>
        <th><input type='text' name='nombre' clase='nombre'></th>
        <th><input type='number' name='telefono' clase='telefono'></th>
        <th>
        <select name="clase" class="clase">
        <option value="">Selecciona</option>
        <option value="1">Alquilado</option>
        <option value="2">Torneo</option>
      </select>
        </th>
        <th><input type='number' name='precio' clase='precio'></th>
      </tr>
      <tr>
      <th>9:00 - 10:00</th>
      <th><input type='text' name='nombre' clase='nombre'></th>
      <th><input type='number' name='telefono' clase='telefono'></th>
      <th>
      <select name="clase" class="clase">
      <option value="">Selecciona</option>
      <option value="1">Alquilado</option>
      <option value="2">Torneo</option>
    </select>
      </th>
      <th><input type='number' name='precio' clase='precio'></th>
    </tr>
    <tr>
    <th>10:00 - 11:00</th>
    <th><input type='text' name='nombre' clase='nombre'></th>
    <th><input type='number' name='telefono' clase='telefono'></th>
    <th>
    <select name="clase" class="clase">
    <option value="">Selecciona</option>
    <option value="1">Alquilado</option>
    <option value="2">Torneo</option>
  </select>
    </th>
    <th><input type='number' name='precio' clase='precio'></th>
  </tr>
  <tr>
  <th>11:00 - 12:00</th>
  <th><input type='text' name='nombre' clase='nombre'></th>
  <th><input type='number' name='telefono' clase='telefono'></th>
  <th>
  <select name="clase" class="clase">
  <option value="">Selecciona</option>
  <option value="1">Alquilado</option>
  <option value="2">Torneo</option>
</select>
  </th>
  <th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>12:00 - 13:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>13:00 - 14:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>14:00 - 15:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>15:00 - 16:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>16:00 - 17:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>17:00 - 18:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>18:00 - 19:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>19:00 - 20:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>20:00 - 21:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>21:00 - 22:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>22:00 - 23:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>23:00 - 24:00</th>
<th><input type='text' name='nombre' clase='nombre'></th>
<th><input type='number' name='telefono' clase='telefono'></th>
<th>
<select name="clase" class="clase">
<option value="">Selecciona</option>
<option value="1">Alquilado</option>
<option value="2">Torneo</option>
</select>
</th>
<th><input type='number' name='precio' clase='precio'></th>
</tr>
<tr>
<th>Total</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
    </table>
  </div>
<button id='guardar' class='btn btn-primary' col-12>Guardar</button>
`;

    estado = 1;
  }
}

function mostrarSemana() {
  if (estado !== 2) {
    contenedor.innerHTML = `
        <div id='mostrarSemana' class='container-fluid text-center'>
        <div class='row'>
            <div class='caja text-center col-3'>
                <h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Lunes</h3>
                <h1>1</h1>
            </div>
            <div class='caja text-center col-3'>
            <h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Martes</h3>
            <h1>2</h1>
        </div>
        <div class='caja text-center col-3'>
        <h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Miercoles</h3>
        <h1>3</h1>
    </div>
    <div class='caja text-center col-3'>
    <h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Jueves</h3>
    <h1>4</h1>
</div>
<div class='caja text-center col-3'>
<h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Viernes</h3>
<h1>5</h1>
</div>
<div class='caja text-center col-3'>
<h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Sabado</h3>
<h1>6</h1>
</div>
<div class='caja text-center col-3'>
<h3 id='dia-title' class='bg-danger text-white border border-dark border-lg shadow-lg rounded'>Domingo</h3>
<h1>7</h1>
</div>
</div>
        </div>    
    `;
    estado = 2;
  }
}

p1.onclick = function() {
  if (estado === 1) {
    mostrarSemana();
  } else {
    mostrarDia();
  }
};

p2.onclick = function() {
  if (estado === 2) {
    mostrarDia();
  } else {
    mostrarSemana();
  }
};
