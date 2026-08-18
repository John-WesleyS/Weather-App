import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar({ onSearch }) {

    const [city, setCity] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!city.trim()) {
            return;
        }

        onSearch(city);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full"
        >

            <Search
                size={22}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a city..."
                className="
                    w-full
                    bg-white
                    rounded-2xl
                    shadow-sm
                    px-12
                    py-4
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                    border
                    border-transparent
                    focus:border-slate-300
                    focus:ring-2
                    focus:ring-slate-200
                    transition
                "
            />

        </form>
    );
}

export default SearchBar;