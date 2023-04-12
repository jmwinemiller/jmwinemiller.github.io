import { createSignal, For } from "solid-js";
import { portfolioList } from "../data/portfolioList";

const Portfolio = () => {
  const [posts] = createSignal(portfolioList);

  return (
    <div id="Portfolio" class="content-container">
      <h3 class="content-container-title">Portfolio</h3>
      <h5 class="content-container-subtitle">
        Currently migrating projects to Github
      </h5>
      <div id="portfolio-grid" class="portfolio-layout">
        <For each={posts()}>
          {post => <PortfolioPost
            name={post.name}
            image={post.image}
            description={post.description}
            link={post.link}
            categories={post.categories}
            languages={post.languages}
            skills={post.skills}
            date={post.date}
          />}
        </For>
      </div>
    </div>
  );
};

const PortfolioPost = (props) => (
  <div class="portfolio-post">
    <div class="portfolio-card">
      <a href={props.link} target="_blank">
      <img
        class="portfolio-card-image"
        src={props.image}
        alt={props.name} />
      </a>
      <div class="portfolio-card-info">
        <h5 class="portfolio-card-title">
          {props.name}
        </h5>
        <p class="portfolio-card-description">
          {props.description}
        </p>
        <div id="post-categories">
          <For each={props.categories}>
            {category =>
              <span class="portfolio-card-tags">
                {category}
              </span>
            }
          </For>
        </div>
        <div id="post-languages">
          <For each={props.languages}>
            {language =>
              <span class="portfolio-card-tags">
                {language}
              </span>
            }
          </For>
        </div>
        <div id="post-skills">
          <For each={props.skills} >
            {skill =>
              <span class="portfolio-card-tags">
                #{skill}
              </span>
            }
          </For>
        </div>
        <div class="portfolio-card-date">
          {props.date}
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;