interface DescriptionProps {
  job?: string;
}

const Description: React.FC<DescriptionProps> = ({ job, children }) => {
  return (
    <>
      <h2 className="text-2xl text-gray-800 dark:text-gray-400 mb-3">{job}</h2>
      <p className="leading-relaxed text-xl text-gray-700 dark:text-white font-light mb-8">
        {children}
      </p>
    </>
  );
};

export default Description;
