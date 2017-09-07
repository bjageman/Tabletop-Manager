import React from 'react'

// import MdCreate from 'react-icons/lib/md/create'
// import MdDelete from 'react-icons/lib/md/delete'
import MdShare from 'react-icons/lib/md/share'
import MdFavorite from 'react-icons/lib/md/favorite'

import Delete from '../Delete/'
import Update from '../Update/'

import Card from 'apps/toolkit/components/web/Card';
import CleanHTML from 'apps/toolkit/components/web/CleanHTML'
import ReduxLink from 'apps/toolkit/components/web/links/Redux'

class JournalListItem extends React.Component {
    render(){
        const entry = this.props.entry
        const link = "journal/" + entry.slug
        return(
            <Card >
                <ReduxLink campaignLink to={link} >
                {entry.name} - {entry.created}
                {entry.author.email} {entry.author.image}
                <CleanHTML html={entry.content.length > 350 ? entry.content.slice(0,350) + "..." : entry.content} />
                </ReduxLink>
                <MdShare />
                <MdFavorite />
                {this.props.is_owner ? <Update entry={entry} /> : null }
                {this.props.is_owner ? <Delete entry={entry} /> : null }
            </Card>
        )
    }
}


export default JournalListItem
