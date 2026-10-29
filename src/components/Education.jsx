function EducationInfo({ title, school, date, editing, callback }) {

    if (editing) {
        return (
            <form onSubmit={callback} className="flex flex-wrap mb-6 -mx-3 border-gray-200 border">
                <h1 className="mx-auto font-sans text-sky-700 font-bold px-4 uppercase text-sm -mt-2 bg-white">
                    Education
                </h1>
                <div className="w-full px-3 mb-6 my-2">
                    <label htmlFor="title" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Title
                    </label>
                    <input id="title" name="title" type="text"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="Chemical Engineering" defaultValue={title} />
                </div>
                <div className="w-full px-3 mb-3 md:w-1/2">
                    <label htmlFor="school"
                        className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        School</label>
                    <input id="school" type="text" name="school"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="Universidad Mayor de San Andres" defaultValue={school} />
                </div>
                <div className="w-full px-3 mb-6 md:w-1/2">
                    <label htmlFor="date" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Date</label>
                    <input id="date" type="date" name="date"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        defaultValue={date} />
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
                Education
            </h1>
            <div className="w-full block">
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Title</p>
                    <div className="block md:w-2/3">
                        {title}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">School</p>
                    <div className="block md:w-2/3">
                        {school}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Date </p>
                    <div className="block md:w-2/3">
                        {date}
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

export { EducationInfo }