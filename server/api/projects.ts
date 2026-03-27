export default eventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const contentLibProjects = await queryCollection(event, 'projects').order('year', 'ASC').all()

  const projects = contentLibProjects.map((project) => {
    return {
      title: project.title,
      description: project.description,
      stack: project.stack,
      github: project.github,
      demo: project.demo,
      url: `${config.public.siteUrl}${project.path}`,
      image:`${config.public.siteUrl}${project.image}`,
      year: project.year,
    }
  })

  return projects
})