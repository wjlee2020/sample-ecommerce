export async function getAllPhotos() {
    let response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json');
    let respData = await response.json();
    return respData;
}