
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center space-y-4 mb-12 max-w-3/4 md:max-w-4/12 mx-auto">
            <p className="text-[#D99904] italic">{subHeading}</p>
            <h2 className="border-y-2  border-base-300 p-4 text-2xl md:text-3xl text-[#151515] uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;