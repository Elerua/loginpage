import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

//CSS
import '../CSS/TableUser.css';

//MUI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';

//Icons
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const TableUser = () => {
	const navigate = useNavigate();
	const [dataAllUser, setDataAllUser] = useState([]);

	var currentUser = JSON.parse(localStorage.getItem('currentUser'));
	var token = currentUser.token; // your token

	//Get Request
	useEffect(() => {
		axios
			.get('http://localhost:4000/users', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				setDataAllUser(response.data);
				console.log('Récupération ensemble utilisateur');
			});
	}, [dataAllUser]);

	//Supprimer compte
	const supprimerCompte = (id) => {
		axios
			.delete(`http://localhost:4000/users/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				console.log('Utilisateur supprimé');
			});
	};

	//Pagination
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div className="table">
			<Paper sx={{ overflow: 'hidden' }}>
				<TableContainer component={Paper} sx={{ width: 900 }}>
					<Table
						sx={{ minWidth: 300 }}
						stickyHeader
						aria-label="custom pagination table"
					>
						<TableHead>
							<TableRow>
								<StyledTableCell>ID</StyledTableCell>
								<StyledTableCell align="right">Nom Utilisateur</StyledTableCell>
								<StyledTableCell align="right">Adresse Mail</StyledTableCell>
								<StyledTableCell align="right">Action</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{dataAllUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((value, key) => (
								<StyledTableRow
									key={value.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<StyledTableCell align="right">{value.id}</StyledTableCell>
									<StyledTableCell align="right">{value.name}</StyledTableCell>
									<StyledTableCell align="right">{value.mail}</StyledTableCell>
									<StyledTableCell align="right">
										<IconButton
											onClick={() => {
												supprimerCompte(value.id);
											}}
										>
											<DeleteIcon fontSize="inherit" />
										</IconButton>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[3, 5]}
					component="div"
					count={dataAllUser.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
};

export default TableUser;
