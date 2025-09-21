import React from 'react';

const ShowCart = ({ product }) => {
    return (
        <div className=''>
           <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      <tr>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <button className="btn btn-sm">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ShowCart;