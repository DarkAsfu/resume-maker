const Title = ({ title, color }) => {
    return (
        <div>
            <h1 className="text-center my-10 text-3xl  md:text-4xl font-bold">{title}</h1>
            <div
                className="w-48 mx-auto inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#B91C1C] to-transparent opacity-75"
            ></div>
        </div>
    )
}

export default Title;