export default function AccessCamp({ TitleComponent, TypeInput, PlaceInput }) {
    return (
        <div className="mb-3 w-full">
                <p className="mb-3">{TitleComponent}</p>
                <input className="py-4 px-5 w-full
            border-b-emerald-600 border border-b-4 rounded" type={TypeInput} placeholder={PlaceInput} required />
            
        </div>
    )
}