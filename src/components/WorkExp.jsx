function WorkExp({ institution, position, startDate, endDate, editing, callback }) {

    if (editing) {
        return (
            <form onSubmit={callback} className="flex flex-wrap mb-6 -mx-3 border-gray-200 border">
                <h1 className="mx-auto font-sans text-sky-700 font-bold px-4 uppercase text-sm -mt-2 bg-white">
                    Work Experience
                </h1>
                <div className="w-full px-3 mb-6 my-2">
                    <label htmlFor="institution" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Institution
                    </label>
                    <input id="institution" name="institution" type="text"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="facebook" defaultValue={institution} />
                </div>
                <div className="w-full px-3 mb-3">
                    <label htmlFor="position"
                        className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Position</label>
                    <input id="position" type="text" name="position"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="Universidad Mayor de San Andres" defaultValue={position} />
                </div>
                <div className="w-full px-3 mb-6 md:w-1/2">
                    <label htmlFor="start-date" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Start ate</label>
                    <input id="startDate" type="date" name="startDate"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        defaultValue={startDate} />
                </div>
                <div className="w-full px-3 mb-6 md:w-1/2">
                    <label htmlFor="startDate" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        End date</label>
                    <input id="endDate" type="date" name="endDate"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        defaultValue={endDate} />
                </div>
                <div className="flex justify-center w-full mb-3">
                    <button type="submit" className="bg-blue-500 mx-3 w-full hover:bg-blue-700 text-white font-bold border rounded p-3">Submit</button>
                </div>
            </form>
        )
    }

    return (
        <form onSubmit={callback} className="flex flex-wrap mb-6 -mx-3 border-gray-200 border ">
            <h1 className="mx-auto font-sans text-sky-700 font-bold px-4 uppercase text-sm -mt-2 bg-white">
                Work Experience
            </h1>
            <div className="w-full block">
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Institution</p>
                    <div className="block md:w-2/3">
                        {institution}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Position</p>
                    <div className="block md:w-2/3">
                        {position}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Start date </p>
                    <div className="block md:w-2/3">
                        {startDate}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">End date </p>
                    <div className="block md:w-2/3">
                        {endDate}
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mb-3">
                <button type="submit" className="bg-orange-400 mx-3 w-full hover:bg-orange-500 text-white font-bold border rounded p-3">
                    Edit
                </button>
            </div>
        </form>
    )
}

export { WorkExp }