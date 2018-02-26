import React from 'react'
import { WP, Posts, TheTitle, TheAuthor, TheExcerpt } from 'react-wpapi'

const SideBar = () => (
  <section>
    <Widget baseId={'My_widget'}>
      <WidgetTitle />
    </Widget>
  </section>
)

const PostsIndex = props => {
  return (
    <WP endpoint={'https://api.wp-app.org/wp-json'}>
      <Posts query={query}>
        <article>
          <header>
            <h1>
              <TheTitle />
            </h1>
            <p>
              {'Authored by '}
              <TheAuthor />
            </p>
          </header>
        </article>
        <div>
          <TheExcerpt />
        </div>
      </Posts>
      <SideBar />
    </WP>
  )
}

const MOUNT_NODE = document.getElementById('app')

render(PostsIndex, MOUNT_NODE)
