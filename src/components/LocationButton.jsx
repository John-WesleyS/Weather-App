import { MapPin } from "lucide-react";

function LocationButton({ onLocation }) {

    const handleLocation = () => {

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;

                onLocation(latitude, longitude);
            },

            (error) => {

                console.log(error);

                alert("Unable to get your location.");
            }
        );
    };

    return (
        <button
            type="button"
            onClick={handleLocation}
            className="
                w-full
                sm:w-auto
                whitespace-nowrap
                bg-slate-800
                hover:bg-slate-700
                text-white
                px-6
                py-4
                rounded-2xl
                shadow-sm
                font-medium
                flex
                items-center
                justify-center
                gap-2
                transition
            "
        >

            <MapPin size={21} />

            <span>
                Use My Location
            </span>

        </button>
    );
}

export default LocationButton;