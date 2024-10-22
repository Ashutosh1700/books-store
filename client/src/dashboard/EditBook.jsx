import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom'

const EditBook = () => {
    const { id } = useParams();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData()
    const bookCategory = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Science Fiction",
        "Thriller",
        "Horror",
        "Romance",
        "History",
        "AutoBiography",
        "Travel",
        "Business",
        "Comedy",
    ]
    const [selectedBook, setSelectedBook] = useState(bookCategory[0]);
    const handleChange = ((e) => {
        setSelectedBook(e.target.value);
    })

    const handleUpdate = ((event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const UpdatebookData = { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL }
        // console.log(UpdatebookData);

        //update the book data
        fetch(`http://localhost:5000/book/${id}`,
            {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(UpdatebookData)

            }).then(res => res.json()).then(data => {
                console.log(data);
                alert("Book Updated successfully!!!")
                // form.reset();
            })

    })

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold '>Update The Book Data</h2>
            <form onSubmit={handleUpdate} className="flex lg:w-[920px] flex-wrap flex-col gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="BookTitle"
                                value="Book Title"
                            />
                        </div>
                        <TextInput
                            id="BookTitle"
                            type="text"
                            name='bookTitle'
                            placeholder="Book Name"
                            defaultValue={bookTitle}
                            required />
                    </div>

                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="authorName"
                                value="Author Name"
                            />
                        </div>
                        <TextInput
                            id="authorName"
                            type="text"
                            name='authorName'
                            placeholder="Author Name"
                            defaultValue={authorName}
                            required />
                    </div>

                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="imageURL"
                                value="Image URL"
                            />
                        </div>
                        <TextInput
                            id="imageURL"
                            type="text"
                            name='imageURL'
                            placeholder="Book Image URL"
                            defaultValue={imageURL}
                            required />
                    </div>

                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="category"
                                value="Book Category "
                            />
                        </div>
                        <Select id="category" name='category' className='w-full rounded' value={selectedBook}
                            onChange={handleChange}>
                            {
                                bookCategory.map((booktype) => <option key={booktype} value={booktype}>{booktype}</option>)
                            }
                        </Select>
                    </div>

                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="bookDescription"
                                value="Book Description"
                            />
                        </div>
                        <Textarea
                            id="bookDescription"
                            type="text"
                            name='Book Description'
                            placeholder="Write Your Book Description here..."
                            defaultValue={bookDescription}
                            rows={4}
                            required />
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="bookPDFURL"
                                value="Book Pdf Url"
                            />
                        </div>
                        <TextInput
                            id="bookPDFURL"
                            type="text"
                            name='bookPDFURL'
                            placeholder="Book Pdf Url"
                            defaultValue={bookPDFURL}
                            required />
                    </div>

                </div>
                <Button type='submit' className='mt-5 w-1/2'>
                    Update Detail
                </Button>


            </form>
        </div>
    )
}

export default EditBook