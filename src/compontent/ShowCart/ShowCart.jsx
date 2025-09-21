
const ShowCart = ({ product,hendleRemoveItem }) => {
    return (
        <div className=''>
           <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      <tr className="flex justify-between">
        <td><img className="w-[100px] rounded" src={product.image} alt="" /></td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <button onClick={() =>hendleRemoveItem(product.id)} className="btn btn-sm btn-error">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ShowCart;