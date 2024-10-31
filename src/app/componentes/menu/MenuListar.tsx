export const MenuListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="cold-md-6">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}> No.</th>
                <th style={{ width: "30%" }}> Nombre Plato</th>
                <th style={{ width: "25" }}> Acompañamiento</th>
                <th style={{ width: "20%" }} className="text-center">
                  {" "}
                  Precio
                </th>
                <th style={{ width: "20%" }}> Region</th>
                <th style={{ width: "5%" }}> opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1</td>
                <td>bandeja Paisa</td>
                <td>Con chinchurria</td>
                <td className="text-center">35000</td>
                <td>Andina</td>
                <td>
                  <a href="/menupdt/1">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con arroz de coco</td>
                <td>25000</td>
                <td>Caribe</td>
                <td>
                  <a href="/menupdt/2">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mote de queso </td>
                <td>Con arroz blanco</td>
                <td>30000</td>
                <td>Amazonia</td>
                <td>
                  <a href="/menupdt/3">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
