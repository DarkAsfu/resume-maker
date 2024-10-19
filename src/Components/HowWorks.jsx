import Title from '../ReusableCompo/Title';

const HowWorks = () => {
    const howItWorks = [
        {
            id: 1,
            step: "Step 1",
            title: "Choose a Template",
            description: "Select from a range of modern, industry-specific resume templates designed to stand out. Each template is fully customizable to meet your needs.",
            icon: "template-icon", // You can customize the icon field as needed
        },
        {
            id: 2,
            step: "Step 2",
            title: "Fill in Your Details",
            description: "Enter your personal information, skills, work experience, education, and more using our simple form. You’ll see your resume build in real-time as you go.",
            icon: "details-icon",
        },
        {
            id: 3,
            step: "Step 3",
            title: "Download Your Resume",
            description: "Once you're satisfied with your resume, click ‘Download’ to get your resume in PDF format. It’s ready to be sent out to employers!",
            icon: "download-icon",
        },
    ];

    return (
        <div className='bg-[#DBCDFF] pb-10'>
            <Title title={"How It Works"} subHeading={"Build your professional resume in 3 easy steps."} />


        </div>
    );
};

export default HowWorks;