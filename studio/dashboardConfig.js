export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6757bd24627b7433b337b4',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-fi2i1yxh',
                  apiId: '10f6e054-8b57-459d-a1c4-b8dbe2ef885d'
                },
                {
                  buildHookId: '5e6757bd9297d39abe962a78',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-twrzi5ek',
                  apiId: 'ee861094-8d76-4357-aed4-e10351e22517'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/farzadalizadehgit/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-twrzi5ek.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
