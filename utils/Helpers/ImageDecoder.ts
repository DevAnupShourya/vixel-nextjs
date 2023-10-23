const ImageDecoder = (base64ImageInput: string) => {
    const base64Image = base64ImageInput;
    const imageData = base64Image.split(',')[1];
    const decodedImage = Buffer.from(imageData, 'base64');
    return decodedImage;
}
export default ImageDecoder;