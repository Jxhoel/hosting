function generarCV() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const dni = document.getElementById('dni').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const experiencias = document.getElementById('experiencias').value;
  const estudios = document.getElementById('estudios').value;
  const foto = document.getElementById('foto').files[0];

  const cvPreview = document.createElement('div');

  cvPreview.innerHTML = `
    <h2>Información Personal</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Correo Electrónico:</strong> ${correo}</p>
    <p><strong>DNI:</strong> ${dni}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Dirección:</strong> ${direccion}</p>

    <h2>Experiencias Laborales</h2>
    <p>${experiencias}</p>

    <h2>Estudios</h2>
    <p>${estudios}</p>

    <h2>Foto</h2>
    <img src="${foto ? URL.createObjectURL(foto) : 'placeholder.png'}" alt="Foto de Perfil" style="max-width: 100px;">
  `;

  const cvPreviewContainer = document.getElementById('cv-preview');
  cvPreviewContainer.innerHTML = '';
  cvPreviewContainer.appendChild(cvPreview);

  // Agregar botón de descarga en PDF
  const downloadBtn = document.createElement('button');
  downloadBtn.innerText = 'Descargar como PDF';
  downloadBtn.addEventListener('click', () => {
    descargarComoPDF(cvPreview);
  });

  // Insertar el botón de descarga debajo del CV generado
  cvPreviewContainer.appendChild(downloadBtn);
}

function descargarComoPDF(elemento) {
  const pdfOptions = {
    margin: 10,
    filename: 'mi_cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(elemento).set(pdfOptions).save();
}

function seleccionarFoto() {
  document.getElementById('foto').click();
}

document.addEventListener('DOMContentLoaded', function () {
  const formSections = document.querySelectorAll('#cv-form section');

  formSections.forEach(section => {
    section.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();

        const nextSection = getNextSection(section);
        if (nextSection) {
          nextSection.querySelector('input, textarea').focus();
        } else {
          // Si no hay más secciones, ejecutar la función de generarCV
          generarCV();
        }
      }
    });
  });

  // Agregar evento de clic al botón "Generar CV"
  document.getElementById('btn-generar').addEventListener('click', function () {
    generarCV();
  });

  function getNextSection(currentSection) {
    const index = Array.from(formSections).indexOf(currentSection);
    return formSections[index + 1];
  }
});
