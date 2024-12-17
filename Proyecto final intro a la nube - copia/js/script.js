// Configuración de AWS SDK
// Configuración de AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,  
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  
    region: 'us-east-1'  
});


const s3 = new AWS.S3();
const bucketName = 'imagenesproyecto'; 

// Función para subir una imagen
document.getElementById('uploadForm').onsubmit = async (e) => {
    e.preventDefault();
    const file = document.getElementById('fileInput').files[0];
    if (!file) return alert('Please select a file');

    const params = {
        Bucket: bucketName,
        Key: file.name,
        Body: file,
        ContentType: file.type,
        
    };

    try {
        await s3.upload(params).promise();
        alert('Image uploaded successfully');
        displayImage(file.name);  
    } catch (error) {
        console.error('Upload error:', error);
    }
};

// Mostrar la imagen subida en la galería
function displayImage(filename) {
    const imageURL = `https://${bucketName}.s3.amazonaws.com/${filename}`;
    const img = document.createElement('img');
    img.src = imageURL;
    document.getElementById('gallery').appendChild(img);
}

// Funcionalidad de búsqueda
document.getElementById('searchInput').oninput = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const images = document.querySelectorAll('#gallery img');
    images.forEach(img => {
        const imageName = img.src.split('/').pop().toLowerCase();
        img.style.display = imageName.includes(searchValue) ? 'block' : 'none';
    });
};
