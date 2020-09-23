import React from "react";

const JobCard = (props) => {
  console.log("props from JobCard", props);
  function stripHTML(text) {
    const cleanText = text.replace(/<.*?>/gm, "");
    // truncatedtext= truncatefunction(cleantext)
    return cleanText;
  }
  // truncate function
  // return truncatedtext

  return (
    <div className="jobResults">
      <p>Job type: {props.job.type}</p>
      <div className="companyInfo">
        <p>Company: {props.job.company}</p>
        <img src={props.job.company_logo} alt="company name here + logo" />
      </div>
      <p>Location: {props.job.location}</p>
      <p>Title: {props.job.title}</p>
      <p>Description: {stripHTML(props.job.description)}</p>
      <p>Posted: {props.job.created_at}</p>
      <p>Company url: {props.job.company_url}</p>

      <a href={props.job.url}>Click for Job Posting</a>
    </div>
  );
};

export default JobCard;

// {
//   "id": "522f4744-0601-453e-bcff-e239cc6e78d9",
//   "type": "Full Time",
//   "url": "https://jobs.github.com/positions/522f4744-0601-453e-bcff-e239cc6e78d9",
//   "created_at": "Tue Sep 22 14:39:08 UTC 2020",
//   "company": "Roadie",
//   "company_url": "http://Roadie",
//   "location": "Atlanta, GA",
//   "title": "Senior Software Engineer",
//   "description": "<p>Roadie is a crowdsourced delivery service that connects businesses with items to deliver with drivers already on the road. Roadie works with businesses across virtually every industry to provide a faster, cheaper, and more scalable solution for same-day deliveries nationwide.  Roadie reaches 89% of U.S. households — the largest local same-day delivery footprint in the nation.</p>\n<p>As a Senior Software Engineer, you will work to create technology solving real-world problems in the crowdsourced delivery space. Your work will evolve the architecture and design of the backend frameworks to meet the ever-increasing scalability and performance requirements. The ideal candidate is comfortable working in a fast-paced environment and wants to do more than write code.</p>\n<p>What You’ll Do</p>\n<p>Play an integral role in the development, design, testing, and maintenance of Roadie’s platform APIs and services</p>\n<p>Work across the engineering team to refactor existing systems and architect new features and solutions at scale</p>\n<p>Apply experience and knowledge of industry best practices to support and continuously improve the performance, efficiency, and maintainability of existing applications</p>\n<p>Lead by example and mentor developers in all aspects of planning, development and testing</p>\n<p>Collaborate with Engineering, Product, and Data Science team members, providing a voice in backend architectural design decisions</p>\n<p>Contribute to establishing and improving software engineering best practices</p>\n<p>Technology we're using now</p>\n<p>Backend: Python, Ruby on Rails\nPostgres, Redis, Kafka, Redshift\nHeroku, AWS\nDocker, Kubernetes\ngit, GitHub, Travis</p>\n<p>What You Bring</p>\n<p>5+ years of software architecture and software development experience</p>\n<p>Strong expertise in multiple programming languages such as Python, Ruby, Go, or Javascript</p>\n<p>Exposure to microservices design and architecture</p>\n<p>Demonstrated ability to learn new technologies quickly</p>\n<p>Proven track record of providing stable and secure code in production environments</p>\n<p>Strong communication skills with the ability to distill complex problems into digestible insights</p>\n<p>Roadie does not engage in immigration sponsorship at this time.</p>\n",
//   "how_to_apply": "<p>Apply using the link below:</p>\n<p><a href=\"https://boards.greenhouse.io/roadie/jobs/4789330002\">https://boards.greenhouse.io/roadie/jobs/4789330002</a></p>\n",
//   "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckNLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--18eabd2ddd0e02e3196402ec50b3dbd829fb512d/Roadie%20R%20Logo%20Horizontal_BROWN.png"
//   },
