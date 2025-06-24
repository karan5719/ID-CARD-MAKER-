function updateCard() {
    document.getElementById('name').innerText = document.getElementById('inputName').value || "N/A";
    document.getElementById('regno').innerText = document.getElementById('inputRegNo').value || "N/A";
    document.getElementById('grade').innerText = document.getElementById('inputGrade').value || "N/A";
    document.getElementById('grad').innerText = document.getElementById('inputGrad').value || "N/A";
    document.getElementById('issued').innerText = document.getElementById('inputIssued').value || "N/A";
  }

  function downloadPDF() {
    const element = document.getElementById("card");
    html2pdf().from(element).save("Student_ID_Card.pdf");
  }