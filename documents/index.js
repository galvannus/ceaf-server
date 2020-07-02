module.exports = ({ name, fieldPrice, receiptId }) => {
    const today = new Date();
    let actualPrice = 0;
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 500px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 10px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 10px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 5px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 16px;
             line-height: 20px;
             color: #333;
             }
             
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title">
                              <img  src="https://fotos.subefotos.com/451872819ea29e6b7e6526470beb2aeeo.png"
                                 style="width:100%; max-width:100px;"></td>
                            <td>
                               Fecha: ${`${today.getDate()}/ ${today.getMonth() + 1}/ ${today.getFullYear()}`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Nombre: ${name}
                            </td>
                            <td>
                               Recibo Numero: ${receiptId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Concepto:</td>
                   <td>Importe</td>
                </tr>
               ${
                  fieldPrice.map(quantity => {

                     return (
                        `<tr class="item">
                           <td>${quantity.concept.toUpperCase()}</td>
                           <td>$${quantity.price}.00</td>
                        </tr>`
                     )
                  })
               }
                
                
             </table>
             <br />
             ${
                  
                  fieldPrice.map((item,quantity) => {

                     let totalfields = fieldPrice.length;
                     actualPrice = actualPrice + parseInt(item.price);

                     if(quantity+1 == totalfields){
                        return `<h3 class="justify-center">
                                 Precio total:$ ${actualPrice}.00 pesos
                              </h3>`
                     }
                        
                  })
               }
          </div>
       </body>
    </html>
    `;
};