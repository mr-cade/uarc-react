import React from 'react'
import BookTable from '../components/Book-table'

export default function Books() {
    return (
        <div>
            <h2 align="center">ARRL Books Available</h2>

            <p>
                The American Radio Relay League (ARRL) is the primary source of publications about
                amateur radio in the United States. Some decades back there were radio stores that stocked
                these books locally, but as they faded away UARC decided to become a dealer and make make them,
                again, available locally.
            </p>
            <p>
                Normally, these publications would be available at regular UARC meetings. However, while
                the Coronavirus is restricting us to on-line meetings, here is another way to obtain them. To purchase any of these items, please contact Rick, our book manager, either
                via e-mail (<a href="mailto:rickg916@gmail.com">rickg916@gmail.com)</a> or txt
                (801-582-7783).  Phone calls from unknown numbers are generally not answered,
                but voice mail will be checked. In your message please include the item names
                and the preferred method of reply.
            </p>
            <BookTable />
        </div>
    )
}