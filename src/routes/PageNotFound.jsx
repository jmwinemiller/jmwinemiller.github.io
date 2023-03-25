import { A } from "@solidjs/router";

const PageNotFound = () => {
  return (
    <div id="PageNotFound" class="content-container">
      Page Not Found
      <A href="/" class="page-not-found-link">
        Return to Home Page</A>
    </div>
  );
};

export default PageNotFound;