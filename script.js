const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, and pass to the video element to play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch errors here
        console.log('oopsie, something went wrong', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button on click
    button.disabled = true;
    // Start P-I-P
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On Load
selectMediaStream();