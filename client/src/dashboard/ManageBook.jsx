import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBook = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-book')
            .then(res => res.json())
            .then(book => setAllBooks(book));
    }, [allBooks]);

    // delete a book 
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/book/${id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(book => alert("Book is deleted successfully"))

    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold '>Manage Your Books</h2>
            <div>
                <Table className='lg:w-[935px]'>
                    <Table.Head>
                        <Table.HeadCell>No.</Table.HeadCell>
                        <Table.HeadCell>Book name</Table.HeadCell>
                        <Table.HeadCell>Author name</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span >Edit OR Manage</span>
                        </Table.HeadCell>
                    </Table.Head>
                    {

                        allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {book.bookTitle}
                                </Table.Cell>
                                <Table.Cell>{book.authorName}</Table.Cell>
                                <Table.Cell>{book.category}</Table.Cell>
                                <Table.Cell>${(index + 1) * 5 + 80}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                                        Edit
                                    </Link>
                                    <button onClick={() => handleDelete(book._id)} className='bg-red-600 text-white px-4 py-1 font-semibold rounded-sm
                                    hover:bg-blue-600'>Delete</button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        )}

                </Table>
            </div>

        </div>
    )
}

export default ManageBook