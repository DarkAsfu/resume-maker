import Title from "../ReusableCompo/Title";

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Customizable Templates",
            description: "Choose from a wide variety of professionally designed templates. Customize the layout, colors, and fonts to match your personal style and career goals.",
            icon: "https://i.ibb.co.com/VwhJXqt/layout.png", // You can use an icon here if needed
        },
        {
            id: 2,
            title: "Easy-to-Use Editor",
            description: "Our user-friendly editor makes it simple to input your information. Just fill in the fields, and watch your resume come to life instantly.",
            icon: "https://i.ibb.co.com/3RmVbkD/Easy-to-Use-Editor.png",
        },
        {
            id: 3,
            title: "Instant Download",
            description: "Once your resume is ready, download it in PDF format with a single click. No waiting or extra steps needed.",
            icon: "https://i.ibb.co.com/6DdLCYx/file.png",
        },
        {
            id: 4,
            title: "Save & Edit Anytime",
            description: "Create an account to save your progress and come back to edit your resume anytime. No need to start from scratch.",
            icon: "https://i.ibb.co.com/TWzYwPp/time.png",
        },
        {
            id: 5,
            title: "Built for Every Industry",
            description: "Whether you're in tech, finance, marketing, or any other field, our templates and customization options will help you create a resume suited to your profession.",
            icon: "https://i.ibb.co.com/WnfPT6j/supplier-1.png",
        },
    ];

    return (
        <div className="bg-white py-14">
            <Title title={"Why Choose ResumeMaker?"} subHeading={"Design your resume with ease. We provide everything you need to create a standout resume that captures employers' attention."} />

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
                {
                    features.map(feature => <div key={feature.id} className="border p-6 rounded-md hover:shadow-md transition-all">
                        <img className="w-16 h-16 mb-4 border-3 border-[#b91c1cd7] p-3 rounded-full" src={feature.icon} alt="" />
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-md mt-4">{feature.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;