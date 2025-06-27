function addNewRow() {
    let table = document.querySelector(".content-table");
    let row = table.insertRow();
    row.innerHTML = `
        <td><input type="text" class="Sno"></td>
        <td><input type="text" class="particular"></td>
        <td><input type="text" class="qty"></td>
        <td><input type="text" class="rate"></td>
        <td><input type="text" class="amount"></td>
    `;
}
function printBill() {
  const printContents = document.getElementById("print-area").cloneNode(true);

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <html>
    <head>
      <title>Print Bill</title>
      <link rel="stylesheet" href="styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">
      <style>
        @page { size: A4 portrait; margin: 0; }
        body { margin: 0; padding: 0; }
      </style>
    </head>
    <body></body>
    </html>
  `);
  doc.body.appendChild(printContents);
  doc.close();

  iframe.onload = () => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
  };
}

