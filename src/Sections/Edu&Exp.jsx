const EducationAndExprience = () => {
  const cardStyle = "bg-[#1a1a1a] text-white p-4 rounded-md shadow-md mb-4";
  const titleStyle = "text-white font-semibold text-lg";
  const subtitleStyle = "text-yellow-500 text-sm mb-1";
  const descriptionStyle = "text-sm text-gray-300";

  return (
    <div className="min-h-auto bg-black text-white px-6 py-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left: Education */}
        <div>
          <div className="mb-4" data-aos="fade-up">
            <h2 className="text-3xl font-bold ">Education</h2>
          </div>
          <div className={cardStyle} data-aos="fade-up">
            <h3 className={titleStyle}>National University</h3>
            <p className={subtitleStyle}>2022 - Present</p>
            <p className={descriptionStyle}>Bachelor of Arts</p>
          </div>

          <div className={cardStyle} data-aos="fade-up">
            <h3 className={titleStyle}>Satkhira Day and Night College</h3>
            <p className={subtitleStyle}>2019 - 2021</p>
            <p className={descriptionStyle}>Higher Secondary</p>
          </div>
        </div>

        {/* Right: Experience */}
        <div>
          <div className="mb-4" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className={cardStyle} data-aos="fade-up">
            <h3 className={titleStyle}>Team Project</h3>
            <p className={subtitleStyle}>2025 - under progamming-hero</p>
            <p className={descriptionStyle}>Role - A Fullstack Developer</p>
          </div>

          <div className={cardStyle} data-aos="fade-up">
            <h3 className={titleStyle}>Real World Project</h3>
            <p className={subtitleStyle}>2024 - under a senior developer</p>
            <p className={descriptionStyle}>Role - A Frontend Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExprience;
