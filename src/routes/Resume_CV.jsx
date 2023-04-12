import { createSignal, For } from "solid-js";
import {
  experienceList,
  projectExperienceList,
} from "../data/resumeCV";

const Resume_CV = () => {
  const [projectJobs] = createSignal(projectExperienceList);
  const [jobs] = createSignal(experienceList);

  return (
    <div id="ResumeCV" class="content-container">
      <h3 class="content-container-title">Curriculum Vitae</h3>
      <h5 class="content-container-subtitle">
        Includes links to a summary Resume and full Curriculum Vitae
      </h5>
      <div id="cv-grid" class="resume-layout">
        <For each={projectJobs()}>
          {projectJob => <ProjectExperience
            job_title={projectJob.job_title}
            company={projectJob.company}
            department={projectJob.department}
            company_description={projectJob.company_description}
            start_date={projectJob.start_date}
            end_date={projectJob.end_date}
            city={projectJob.city}
            project_list={projectJob.project_list}
            research_list={projectJob.research_list}
            responsibility_list={projectJob.responsibility_list}
          />}
        </For>
        <For each={jobs()}>
          {job => <Experience
            job_title={job.job_title}
            company={job.company}
            department={job.department}
            company_description={job.company_description}
            start_date={job.start_date}
            end_date={job.end_date}
            city={job.city}
            responsibility_list={job.responsibility_list}
          />}
        </For>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300" />
          <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-gray-50
                  text-center text-sm">1</div>
        </div>
      </div>
    </div>
  );
};

const ProjectExperience = (props) => (
  <div class="resume-post">
    <div class="resume-card">
      <span class="text-base">
      <span class="resume-card-title">{props.job_title}</span>
        <p class="text-base">{props.city}</p></span>
      <p class="resume-card-subtitle">{props.company} - {props.department}</p>
      <div id="project-list">
        <div class="resume-card-list-title">Projects</div>
        <For each={props.project_list}>
          {project =>
            <li class="resume-card-list">{project}</li>
          }
        </For>
      </div>
      <div id="research-list">
        <div class="resume-card-list-title">Research</div>
        <For each={props.research_list}>
          {research =>
            <li class="resume-card-list">{research}</li>
          }
        </For>
      </div>
      <div id="responsibility-list">
        <div class="resume-card-list-title">Key Responsibilities</div>
        <For each={props.responsibility_list}>
          {responibility =>
            <li class="resume-card-list">{responibility}</li>
          }
        </For>
      </div>
    </div>
  </div>
);

const Experience = (props) => (
  <div class="resume-post">
    <div class="resume-card">
      <span class="text-base">
      <span class="resume-card-title">{props.job_title}</span>
        <p class="text-base">{props.city}</p></span>
      <p class="resume-card-subtitle">{props.company} - {props.department}</p>
      <div id="responsibility-list">
        <For each={props.responsibility_list}>
          {responibility =>
            <li class="resume-card-list">{responibility}</li>
          }
        </For>
      </div>
    </div>
  </div>
);

export default Resume_CV;