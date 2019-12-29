const getPopularProjects = async () => {
  const baseUrl = 'https://api.github.com/repos';
  const reqOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: ''
    }
  };
  let projects = {};

  try {
    const visualStudioCode = await (await fetch(`${baseUrl}/microsoft/vscode`, reqOptions)).json();
    const bootstrap = await (await fetch(`${baseUrl}/twitter/bootstrap`, reqOptions)).json();
    const freeCodeCamp = await (await fetch(
      `${baseUrl}/freeCodeCamp/freeCodeCamp`,
      reqOptions
    )).json();
    const react = await (await fetch(`${baseUrl}/facebook/react`, reqOptions)).json();

    projects.visualStudio = visualStudioCode;
    projects.bootstrap = bootstrap;
    projects.freeCodeCamp = freeCodeCamp;
    projects.react = react;
  } catch (error) {
    console.error(`Error getting popular projects ${error}`);
    projects.error = error;
  } finally {
    return projects;
  }
};

export default getPopularProjects;
