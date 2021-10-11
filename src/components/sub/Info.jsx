import React from 'react'
import {InfoTable, TableRow, TableColDif, TableCol} from '../style/sub/infoTable';

function Info({movie}) {
    return (
        <InfoTable>
                <TableRow>
                    <TableColDif>Title</TableColDif>
                    <TableColDif>{movie.original_title}</TableColDif>
                    <TableColDif>Release_date</TableColDif>
                    <TableColDif>{movie.release_date}</TableColDif>
                </TableRow>
                <TableRow>
                    <TableCol>Revenue</TableCol>
                    <TableCol>{movie.revenue}</TableCol>
                    <TableCol>Runtime</TableCol>
                    <TableCol>{movie.runtime}</TableCol>
                    <TableCol>vote_average</TableCol>
                    <TableCol>{movie.vote_average}</TableCol>
                </TableRow>
                <TableRow>                    
                    <TableCol>vote_count</TableCol>
                    <TableCol>{movie.vote_count}</TableCol>
                    <TableCol>Status</TableCol>
                    <TableCol>{movie.status}</TableCol>
                    <TableCol>Popularity</TableCol>
                    <TableCol>{movie.popularity}</TableCol>
                </TableRow>        
        </InfoTable>
    )
}

export default Info;
