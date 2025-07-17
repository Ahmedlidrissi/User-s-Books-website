import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
function CreateBook(){
    const [form, setForm] = useState({
        title: '',
        genre: '',
        description: '',
        publish_date: '',
        author: '',
        price: '',
        cover_image: '',
        _token: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('genre', form.genre);
        formData.append('description', form.description);
        formData.append('publish_date', form.publish_date);
        formData.append('author', form.author);
        formData.append('price', form.price);
        formData.append('cover_image', form.cover_image);
        formData.append('_token', form._token);

        Inertia.post('/books', formData, {
            forceFormData: true,
        });
    }
    return(
        <form onSubmit={handleSubmit} > 
            <h1>Add book</h1>
            <input name='title' placeholder='Title' onChange={(e) => setForm({...form, title : e.target.value})}/>
            <input name='genre' placeholder='Genre' onChange={(e) => setForm({...form, genre : e.target.value})}/>
            <input name='description' placeholder='Description' onChange={(e) => setForm({...form, description : e.target.value})}/>
            <input name='date' type='date' placeholder='Publish Date' onChange={(e) => setForm({...form, publish_date : e.target.value})}/>
            <input name='author' placeholder='Author' onChange={(e) => setForm({...form, author : e.target.value})}/>
            <input name='price' placeholder='Price' onChange={(e) => setForm({...form, price : e.target.value})}/>
            <input name='cover_image' type='file'
                placeholder='Cover Image'
                onChange={e => setForm({...form, cover_image: e.target.files[0]})}
                />
            <input type="hidden" name="_token" value={form._token} />
            <input type="submit" value="Create Book" />
        </form>
    )
}

export default CreateBook