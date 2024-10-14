// googleMapsLoader.ts
let isScriptLoaded = false;

export const loadGoogleMapsScript = (apiKey: string) => {
    return new Promise<void>((resolve, reject) => {
        if (isScriptLoaded) {
            resolve();
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            isScriptLoaded = true;
            console.log("Google Places API script loaded");
            resolve();
        };

        script.onerror = () => {
            console.error("Failed to load Google Places API script");
            reject(new Error("Google Maps script failed to load"));
        };

        document.head.appendChild(script);
    });
};
