import React, { useRef } from 'react';

const FeatureProductCard = ({ product }) => {
  const hiddenVideoRef = useRef(null); // Hidden video reference for PiP

  const logPiPStatus = () => {
    console.log("Picture-in-Picture API Supported:", document.pictureInPictureEnabled); // Check if PiP is enabled
    console.log("Current PiP Element:", document.pictureInPictureElement); // Check if a video is in PiP mode
  };

  const handleImageClick = async () => {
    logPiPStatus(); // Log PiP status

    // Ensure PiP is supported and the hidden video is available
    if (document.pictureInPictureEnabled && hiddenVideoRef.current) {
      try {
        if (document.pictureInPictureElement) {
          console.log("Exiting Picture-in-Picture...");
          await document.exitPictureInPicture(); // Exit PiP if already in PiP
        } else {
          console.log("Entering Picture-in-Picture...");

          // Autoplay the video before requesting PiP
          await hiddenVideoRef.current.play();
          await hiddenVideoRef.current.requestPictureInPicture(); // Request PiP mode for the video
        }
      } catch (error) {
        console.error('Error with PiP:', error); // Log any error
      }
    } else {
      console.log('PiP is not supported in this browser or the video is unavailable.');
    }
  };

  return (
    <div className="flex min-w-[130px] sm:min-w-[200px] justify-center m-4">
      {/* Feature Product Card */}
      <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer group">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-64 object-cover"
        />

        {/* Play Button Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleImageClick} // Trigger PiP on play button click
        >
          <button
            className="w-12 h-12 bg-[#858585] rounded-full flex items-center justify-center text-black shadow-md"
            aria-label="Play Video"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Hidden Video (This video won't be visible, but is referenced for PiP) */}
        <video
          ref={hiddenVideoRef}
          className="hidden" // Hide video
          controls
        >
          <source src={product.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FeatureProductCard;
