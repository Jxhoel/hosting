body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  overflow-y: auto;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 20px auto;
}

#cv-form {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

section {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #2980b9;
}

#cv-preview {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  max-height: 500px;
  padding: 20px;
  border-radius: 8px;
  aspect-ratio: 1/1;

}
#cv-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

#cv-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

#cv-preview.cv-generated::before {
  opacity: 1;
  
}
