import React from 'react'
import { Route } from 'react-router'

import Journal from '.'
import JournalDetail from './Detail/'

export const JournalRouter = ({ match }) => (
    <div>
        <Route exact path={match.url} component={Journal} />
        <Route path={`${match.url}/:journalId`} component={JournalDetail} />
    </div>
)
