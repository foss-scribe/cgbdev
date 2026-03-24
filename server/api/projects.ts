export default eventHandler(async (event) => {
  const config = useRuntimeConfig()
  const contentLibProjects = await queryCollection(event, 'projects').all()

  const projects = contentLibProjects.map((project) => {
    return {
      title: project.title,
      description: project.description,
      stack: project.stack,
      github: project.github,
      demo: project.demo,
      image: project.image,
      url: `${config.public.siteUrl}${project.path}`
    }
  })

  return projects
})