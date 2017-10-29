import { configure } from '@storybook/react'

function loadStories() {
  // require('../src/stories')
  require('../src/components/Grid/stories')
  require('../src/components/Week/stories')
  require('../src/components/LifeCalendar/stories')
  require('../src/components/Header/stories')
  require('../src/components/Label/stories')
}

configure(loadStories, module)
