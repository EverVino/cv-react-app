function GeneralInfo({ name, email, phone, editing, callback }) {

    if (editing) {
        return (
            <form onSubmit={callback} className="flex flex-wrap mb-6 -mx-3 border-gray-200 border">
                <h1 className="mx-auto font-sans text-sky-700 font-bold px-4 uppercase text-sm -mt-2 bg-white">
                    General Information
                </h1>
                <div className="w-full px-3 mb-6 my-2">
                    <label htmlFor="name" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Full Name
                    </label>
                    <input id="name" name="name" type="text"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="Jane Doe" defaultValue={name} />
                    {name ? null : <p className="text-red-500 text-xs italic">
                        Please fill out this field
                    </p>}
                </div>
                <div className="w-full px-3 mb-3 md:w-1/2">
                    <label htmlFor="email"
                        className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        e-mail</label>
                    <input id="email" type="email" name="email"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="example@test.com" defaultValue={email} />
                </div>
                <div className="w-full px-3 mb-6 md:w-1/2">
                    <label htmlFor="phone" className="block mb-2 text-gray-700 tracking-wide font-bold uppercase">
                        Phone number</label>
                    <input id="phone" type="number" name="phone"
                        className="w-full py-3 px-4 mb-3 text-gray-700 leading-tight bg-gray-200 border border-gray-200 appearance-none rounded focus:bg-white focus:outline-none"
                        placeholder="591*******" defaultValue={phone} />
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
                General Information
            </h1>
            <div className="w-full block">
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Full Name</p>
                    <div className="block md:w-2/3">
                        {name}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Email</p>
                    <div className="block md:w-2/3">
                        {email}
                    </div>
                </div>
                <div className="flex mx-6 my-6">
                    <p className="block text-gray-500 font-bold mx-6 ">Phone </p>
                    <div className="block md:w-2/3">
                        {phone}
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mb-3">
                <button type="submit" className="bg-orange-400 mx-3 w-full hover:bg-orange-500 text-white font-bold border rounded p-3">Edit</button>
            </div>
        </form>
    )
}

export { GeneralInfo }